
import React, { useEffect, useRef } from 'react';
import { Volume2, Volume1, Activity, Music, Disc } from 'lucide-react';

interface BackgroundMusicProps {
    isSetupMode?: boolean;
    isPlaying: boolean;
    onToggle: () => void;
    volume: number;
    onVolumeChange: (val: number) => void;
}

// Updated song: 神隠しの真相 by しゃろう
const SONG_URL = "https://music.163.com/song/media/outer/url?id=1831400969.mp3";
const SONG_INFO = {
    title: "神隠しの真相",
    composer: "しゃろう"
};

const FADE_DURATION = 5; // Seconds for fade in/out

// Global singleton to persist audio across component unmounts (e.g. Setup -> Main transition)
let globalAudio: HTMLAudioElement | null = null;

const getGlobalAudio = () => {
    if (!globalAudio) {
        globalAudio = new Audio(SONG_URL);
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
    onVolumeChange
}) => {
  // Use a ref to access current target volume inside the event listener without re-binding
  const volumeRef = useRef(volume);

  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);

  // Apply volume with fade logic
  const applyVolume = (audio: HTMLAudioElement) => {
      const targetVolume = volumeRef.current;
      
      if (!audio.duration) {
          audio.volume = targetVolume;
          return;
      }
      
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      const timeLeft = duration - currentTime;
      
      let modifier = 1;
      
      // Fade In at start
      if (currentTime < FADE_DURATION) {
          modifier = currentTime / FADE_DURATION;
      } 
      // Fade Out at end
      else if (timeLeft < FADE_DURATION) {
          modifier = timeLeft / FADE_DURATION;
      }
      
      // Ensure modifier is between 0 and 1
      modifier = Math.max(0, Math.min(1, modifier));
      
      audio.volume = targetVolume * modifier;
  };

  // Sync Audio State & Attach Listeners
  useEffect(() => {
    const audio = getGlobalAudio();

    const handleTimeUpdate = () => {
        applyVolume(audio);
    };

    const handleError = (e: Event) => {
        console.warn("BackgroundMusic: Audio resource failed to load.", e);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('error', handleError);

    if (isPlaying) {
        if (audio.paused) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error("Audio playback failed:", error);
                });
            }
        }
    } else {
        if (!audio.paused) {
            audio.pause();
        }
    }

    // Initial volume apply in case paused/seeked
    applyVolume(audio);

    return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('error', handleError);
    };
  }, [isPlaying]);

  // Effect to update volume immediately when slider changes (outside of timeupdate)
  useEffect(() => {
    const audio = getGlobalAudio();
    applyVolume(audio);
  }, [volume]);

  // Volume Slider Handler
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onVolumeChange(parseFloat(e.target.value));
  };

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
           
           {/* Setup Mode Metadata & Volume */}
           {isPlaying && (
               <div className="flex flex-col gap-2 px-2 py-1 animate-fade-in">
                   <div className="flex justify-between items-center text-[10px] font-mono text-amber-700/80">
                       <span className="truncate max-w-[60%] flex items-center gap-1">
                           <span className="w-1 h-1 bg-amber-600 rounded-full animate-pulse"></span>
                           {SONG_INFO.title}
                       </span>
                       <span className="opacity-70">{SONG_INFO.composer}</span>
                   </div>
                   
                   <div className="flex items-center gap-2">
                       <Volume1 size={10} className="text-amber-700/70" />
                       <input 
                           type="range" 
                           min="0" 
                           max="1" 
                           step="0.01" 
                           value={volume}
                           onChange={handleVolumeChange}
                           className="flex-1 h-1 bg-amber-900/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-amber-600 [&::-webkit-slider-thumb]:rounded-full hover:[&::-webkit-slider-thumb]:scale-125 transition-all"
                       />
                       <span className="text-[9px] font-mono text-amber-700/70 w-6 text-right">{Math.round(volume * 100)}%</span>
                   </div>
               </div>
           )}
       </div>
    );
 }

  return (
    <div className="flex flex-col gap-1 w-full">
        <button 
        onClick={onToggle}
        className={`flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard group
            ${isPlaying 
            ? 'bg-ash-light text-ash-black border-ash-light' 
            : 'bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light'
            }`}
        >
            <div className="flex items-center gap-3">
                <div className="relative">
                    {isPlaying ? <Disc size={16} className="animate-spin" /> : <Volume2 size={16} />}
                </div>
                <span className="text-[10px] font-mono font-bold uppercase">
                    BGM
                </span>
            </div>
            
            <div className="flex items-center gap-2">
                {isPlaying ? (
                    <div className="flex gap-0.5 items-end h-3">
                        <div className="w-0.5 bg-current animate-[bounce_1s_infinite] h-2"></div>
                        <div className="w-0.5 bg-current animate-[bounce_1.2s_infinite] h-3"></div>
                        <div className="w-0.5 bg-current animate-[bounce_0.8s_infinite] h-1"></div>
                    </div>
                ) : (
                    <span className="text-[10px] font-mono font-bold">OFF</span>
                )}
            </div>
        </button>
        
        {isPlaying && (
            <div className="flex flex-col gap-2 px-3 py-2 border-l-2 border-ash-light bg-ash-dark/30 animate-fade-in">
                <div className="flex justify-between items-center text-[9px] font-mono text-ash-gray">
                    <span className="truncate max-w-[60%]">{SONG_INFO.title}</span>
                    <span className="opacity-50 truncate max-w-[35%] text-right">{SONG_INFO.composer}</span>
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
