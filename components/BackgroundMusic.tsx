
import React, { useEffect, useRef } from 'react';
import { Volume2, Volume1, Activity, Music, Disc } from 'lucide-react';

interface BackgroundMusicProps {
    isSetupMode?: boolean;
    isPlaying: boolean;
    onToggle: () => void;
    volume: number;
    onVolumeChange: (val: number) => void;
    audioSrc?: string | null;
    trackTitle?: string;
    trackComposer?: string;
}

const FADE_IN_DURATION = 2000; // ms
const FADE_OUT_DURATION = 1500; // ms

// Global singleton to persist audio across component unmounts (e.g. Setup -> Main transition)
let globalAudio: HTMLAudioElement | null = null;

const getGlobalAudio = () => {
    if (!globalAudio) {
        globalAudio = new Audio(); // Source set dynamically
        globalAudio.loop = true;
        globalAudio.volume = 0; // Init at 0
    }
    return globalAudio;
};

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ 
    isSetupMode = false,
    isPlaying,
    onToggle,
    volume,
    onVolumeChange,
    audioSrc = null,
    trackTitle = "UNKNOWN",
    trackComposer = "UNKNOWN"
}) => {
  const fadeIntervalRef = useRef<number | null>(null);

  // Helper to perform smooth volume transition
  const performFade = (audio: HTMLAudioElement, targetVol: number, duration: number, onComplete?: () => void) => {
      // Clear any existing fade
      if (fadeIntervalRef.current) window.clearInterval(fadeIntervalRef.current);

      const startVol = audio.volume;
      const diff = targetVol - startVol;
      
      // If no change needed
      if (Math.abs(diff) < 0.01) {
          audio.volume = targetVol;
          if (onComplete) onComplete();
          return;
      }

      const startTime = Date.now();

      fadeIntervalRef.current = window.setInterval(() => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Linear interpolation
          audio.volume = startVol + (diff * progress);

          if (progress >= 1) {
              if (fadeIntervalRef.current) window.clearInterval(fadeIntervalRef.current);
              audio.volume = targetVol; // Ensure exact target is hit
              if (onComplete) onComplete();
          }
      }, 50); // Update every 50ms
  };

  // Manage Playback State & Source
  useEffect(() => {
    const audio = getGlobalAudio();

    // 1. Handle Audio Source Update
    if (audioSrc && audio.src !== audioSrc) {
        audio.src = audioSrc;
        // If we switch tracks while playing, we keep playing, 
        // but performFade will handle volume smoothing below.
    }

    // 2. Handle Play/Stop Logic with Fades
    if (isPlaying && audioSrc) {
        // --- DESIRED STATE: PLAYING ---
        if (audio.paused) {
            // Start from silence
            audio.volume = 0; 
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        // Fade In
                        performFade(audio, volume, FADE_IN_DURATION);
                    })
                    .catch(e => console.error("Playback failed", e));
            }
        } else {
            // Already playing, ensure we fade to the correct target volume 
            // (e.g., if we cancelled a fade-out midway)
            performFade(audio, volume, FADE_IN_DURATION);
        }
    } else {
        // --- DESIRED STATE: STOPPED ---
        if (!audio.paused) {
            // Fade Out -> Pause
            performFade(audio, 0, FADE_OUT_DURATION, () => {
                audio.pause();
            });
        }
    }

    // Cleanup on unmount (only clears interval, audio keeps playing if global)
    return () => {
        if (fadeIntervalRef.current) window.clearInterval(fadeIntervalRef.current);
    };
  }, [isPlaying, audioSrc]); // Note: 'volume' is NOT in dependency array to avoid re-triggering fade on slider drag

  // Handle Manual Volume Change (Slider)
  // This needs to interrupt any active fades to feel responsive
  useEffect(() => {
      const audio = getGlobalAudio();
      
      // Only apply immediate volume if we are logically playing and audio is active
      if (isPlaying && !audio.paused) {
          // Kill any running fade animation so the slider takes control
          if (fadeIntervalRef.current) window.clearInterval(fadeIntervalRef.current);
          audio.volume = volume;
      }
  }, [volume]);


  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onVolumeChange(parseFloat(e.target.value));
  };

  const isDisabled = !audioSrc;

  if (isSetupMode) {
    return (
       <div className="flex flex-col gap-1 w-full">
           <button 
               onClick={onToggle}
               className={`w-full flex items-center justify-between p-3 border font-mono text-xs transition-colors ${
                   isPlaying 
                   ? 'border-amber-500 bg-amber-500/20 text-amber-400' 
                   : 'border-amber-800/50 text-amber-800 hover:border-amber-600 hover:text-amber-600'
               }`}
           >
               <span className="flex items-center gap-2"><Music size={14} /> AUDIO_SYSTEM</span>
               {isPlaying ? <Activity size={14} className="animate-pulse" /> : <span>OFF</span>}
           </button>
       </div>
    );
 }

  return (
    <div className="flex flex-col gap-1 w-full">
        <button 
        onClick={onToggle}
        disabled={isDisabled}
        className={`flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard group
            ${isDisabled 
                ? 'bg-ash-black text-ash-gray border-ash-gray/30 opacity-50 cursor-not-allowed'
                : isPlaying 
                    ? 'bg-ash-light text-ash-black border-ash-light' 
                    : 'bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light'
            }`}
        >
            <div className="flex items-center gap-3">
                <div className="relative">
                    {isPlaying && !isDisabled ? <Disc size={16} className="animate-spin" /> : <Volume2 size={16} />}
                </div>
                <span className="text-[10px] font-mono font-bold uppercase">
                    BGM
                </span>
            </div>
            
            <div className="flex items-center gap-2">
                {isPlaying && !isDisabled ? (
                    <div className="flex gap-0.5 items-end h-3">
                        <div className="w-0.5 bg-current animate-[bounce_1s_infinite] h-2"></div>
                        <div className="w-0.5 bg-current animate-[bounce_1.2s_infinite] h-3"></div>
                        <div className="w-0.5 bg-current animate-[bounce_0.8s_infinite] h-1"></div>
                    </div>
                ) : (
                    <span className="text-[10px] font-mono font-bold">
                        {isDisabled ? 'NO_SIGNAL' : 'OFF'}
                    </span>
                )}
            </div>
        </button>
        
        {isPlaying && !isDisabled && (
            <div className="flex flex-col gap-2 px-3 py-2 border-l-2 border-ash-light bg-ash-dark/30 animate-fade-in">
                <div className="flex justify-between items-center text-[9px] font-mono text-ash-gray">
                    <span className="truncate max-w-[60%]">{trackTitle}</span>
                    <span className="opacity-50 truncate max-w-[35%] text-right">{trackComposer}</span>
                </div>
                
                <div className="flex items-center gap-2">
                    <Volume1 size={10} className="text-ash-gray" />
                    <input 
                       type="range" 
                       min="0" 
                       max="1" 
                       step="0.01" 
                       value={volume}
                       onChange={handleVolumeChange}
                       className="flex-1 h-1 bg-ash-black border border-ash-gray/30 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-ash-light [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-ash-black hover:[&::-webkit-slider-thumb]:bg-ash-white transition-all"
                    />
                    <span className="text-[9px] font-mono text-ash-gray w-6 text-right">{Math.round(volume * 100)}%</span>
                </div>
            </div>
        )}
    </div>
  );
};

export default BackgroundMusic;
