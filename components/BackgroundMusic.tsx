
import React, { useEffect, useRef, useState } from 'react';
import { Volume2, Volume1, Activity, Music, Disc, AlertCircle } from 'lucide-react';

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
let audioCleanupTimer: number | null = null;

const getGlobalAudio = () => {
    if (!globalAudio) {
        globalAudio = new Audio(); // Source set dynamically
        globalAudio.loop = true;
        globalAudio.volume = 0; // Init at 0
        // Add crossorigin attribute to avoid CORS issues
        globalAudio.crossOrigin = 'anonymous';
    }
    return globalAudio;
};

// Helper to reliably get absolute URL in various environments
const getAbsoluteUrl = (url: string): string => {
    try {
        // Check if already absolute URL
        if (/^https?:\/\//i.test(url) || /^\/\//.test(url)) {
            return url;
        }
        
        // Handle Vercel environment specifically
        if (typeof window !== 'undefined' && window.location) {
            const base = window.location.href;
            return new URL(url, document.baseURI || base).href;
        }
        
        // Fallback for SSR/SSG environments like Vercel
        return url;
    } catch (e) {
        // Ultimate fallback: DOM element resolution
        try {
            const a = document.createElement('a');
            a.href = url;
            return a.href;
        } catch(e2) {
            return url; // Should not happen in browser
        }
    }
};

// Helper to check if audio format is supported
const isAudioFormatSupported = (format: string): boolean => {
    const audio = new Audio();
    return audio.canPlayType(format) !== '';
};

// Helper to get supported audio extension based on browser support
const getSupportedAudioExtension = (baseUrl: string): string => {
    // Check if URL already has extension
    if (/.(mp3|wav|ogg|aac)$/i.test(baseUrl)) {
        return baseUrl;
    }
    
    // Test different formats
    const formats = ['.mp3', '.wav', '.ogg', '.aac'];
    for (const format of formats) {
        const testUrl = baseUrl + format;
        const mimeType = `audio/${format.slice(1)}`;
        if (isAudioFormatSupported(mimeType)) {
            return testUrl;
        }
    }
    
    // Fallback to mp3
    return baseUrl + '.mp3';
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
  const [error, setError] = useState<boolean>(false);

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

    // Error handling listener - enhanced for Vercel environment
    const handleError = (e: Event) => {
        console.warn("Audio Playback Error:", audio.error);
        console.warn("Audio Source:", audio.src);
        setError(true);
    };
    
    // Canplaythrough listener - ensures audio is loaded before playing
    const handleCanPlayThrough = () => {
        console.log("Audio can play through");
    };
    
    // Play listener - for debugging and state management
    const handlePlay = () => {
        console.log("Audio playing");
    };
    
    // Pause listener - for debugging and state management
    const handlePause = () => {
        console.log("Audio paused");
    };
    
    // Loadedmetadata listener - for debugging
    const handleLoadedMetadata = () => {
        console.log("Audio metadata loaded:", audio.duration);
    };
    
    // Waiting listener - for debugging buffering issues
    const handleWaiting = () => {
        console.log("Audio waiting for more data");
    };
    
    // Add all event listeners
    audio.addEventListener('error', handleError);
    audio.addEventListener('canplaythrough', handleCanPlayThrough);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('waiting', handleWaiting);

    // 1. Handle Audio Source Update
    // IMPORTANT: Compare absolute URLs to prevent infinite loop with relative paths
    // DECODING: Decode both to standard text to avoid "%20" vs " " mismatches
    const currentAbsSrc = audio.src;
    const newAbsSrc = audioSrc ? getAbsoluteUrl(audioSrc) : '';

    const currentDecoded = decodeURIComponent(currentAbsSrc);
    const newDecoded = decodeURIComponent(newAbsSrc);

    if (audioSrc && currentDecoded !== newDecoded) {
        // Reset error state on track change
        setError(false);
        
        // Set audio source with proper compatibility handling
        const supportedUrl = getSupportedAudioExtension(audioSrc);
        const absoluteSupportedUrl = getAbsoluteUrl(supportedUrl);
        audio.src = absoluteSupportedUrl;
        
        // Preload audio for smoother playback
        audio.preload = 'auto';
        
        // If we switch tracks while playing, the loop below handles the play trigger
        if (isPlaying) {
            // Load the new track before attempting to play
            audio.load();
        }
    }

    // 2. Handle Play/Stop Logic with Fades
    if (isPlaying && audioSrc && !error) {
        // --- DESIRED STATE: PLAYING ---
        if (audio.paused) {
            // Start from silence for fade-in
            audio.volume = 0; 
            
            // Handle different browser autoplay policies and Vercel environment
            const playAudio = async () => {
                try {
                    // Load audio if not already loaded
                    if (audio.readyState < 3) { // HAVE_FUTURE_DATA
                        await audio.load();
                    }
                    
                    // Ensure we're in a user-interactive context before playing
                    if (audio.readyState >= 3) {
                        const playPromise = audio.play();
                        if (playPromise !== undefined) {
                            await playPromise;
                            // Fade In
                            performFade(audio, volume, FADE_IN_DURATION);
                        }
                    } else {
                        console.warn("Audio not ready for playback, waiting for data");
                        // Try again once canplaythrough is fired
                        const handleCanPlayThroughForPlay = () => {
                            audio.removeEventListener('canplaythrough', handleCanPlayThroughForPlay);
                            const playPromise = audio.play();
                            if (playPromise !== undefined) {
                                playPromise.then(() => {
                                    performFade(audio, volume, FADE_IN_DURATION);
                                }).catch(playError => {
                                    console.warn("Delayed playback attempt failed:", playError);
                                });
                            }
                        };
                        audio.addEventListener('canplaythrough', handleCanPlayThroughForPlay);
                    }
                } catch (e) {
                    console.warn("Playback prevented (autoplay policy or error):", e);
                    // Don't set error state here as it might be recoverable by user interaction
                }
            };
            
            playAudio();
        } else {
            // Already playing, ensure we fade to the correct target volume 
            performFade(audio, volume, FADE_IN_DURATION);
        }
    } else {
        // --- DESIRED STATE: STOPPED ---
        if (!audio.paused) {
            // Fade Out -> Pause
            performFade(audio, 0, FADE_OUT_DURATION, () => {
                try {
                    audio.pause();
                    // Reset current time to start for next play
                    audio.currentTime = 0;
                } catch (e) {
                    console.warn("Error during pause/reset:", e);
                }
            });
        }
    }

    // Cleanup on unmount
    return () => {
        // Clear any pending fade intervals
        if (fadeIntervalRef.current) {
            window.clearInterval(fadeIntervalRef.current);
            fadeIntervalRef.current = null;
        }
        
        // Clear any pending timers
        if (audioCleanupTimer) {
            window.clearTimeout(audioCleanupTimer);
            audioCleanupTimer = null;
        }
        
        // Remove all event listeners
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('canplaythrough', handleCanPlayThrough);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('waiting', handleWaiting);
    };
  }, [isPlaying, audioSrc, error, volume]); // Add volume to dependencies for better sync

  // Handle Manual Volume Change (Slider)
  useEffect(() => {
      const audio = getGlobalAudio();
      
      // Only apply immediate volume if we are logically playing and audio is active
      if (isPlaying && !audio.paused && !error) {
          // Kill any running fade animation so the slider takes control
          if (fadeIntervalRef.current) window.clearInterval(fadeIntervalRef.current);
          audio.volume = volume;
      }
  }, [volume]);


  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onVolumeChange(parseFloat(e.target.value));
  };

  const isDisabled = !audioSrc || error;

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
        disabled={isDisabled && !isPlaying} // Allow toggling off if playing despite errors (edge case)
        className={`flex items-center justify-between w-full px-3 py-3 border-2 transition-all duration-300 shadow-hard group
            ${isDisabled 
                ? 'bg-ash-black text-ash-gray border-ash-gray/30 cursor-not-allowed opacity-70'
                : isPlaying 
                    ? 'bg-ash-light text-ash-black border-ash-light' 
                    : 'bg-ash-black text-ash-gray border-ash-gray/50 hover:border-ash-light hover:text-ash-light'
            }`}
        >
            <div className="flex items-center gap-3">
                <div className="relative">
                    {error ? <AlertCircle size={16} className="text-red-500" /> : 
                     isPlaying && !isDisabled ? <Disc size={16} className="animate-spin" /> : <Volume2 size={16} />}
                </div>
                <span className="text-[10px] font-mono font-bold uppercase">
                    BGM
                </span>
            </div>
            
            <div className="flex items-center gap-2">
                {error ? (
                    <span className="text-[10px] font-mono font-bold text-red-500 animate-pulse">ERR</span>
                ) : isPlaying && !isDisabled ? (
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
