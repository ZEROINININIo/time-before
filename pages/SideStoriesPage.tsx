import React, { useState, useRef, useEffect } from 'react';
import { sideStoryVolumes } from '../data/sideStories';
import { Language, SideStoryVolume, ChapterTranslation } from '../types';
import { Folder, AlertTriangle, ShieldAlert, ArrowLeft, FileText, Activity, Image as ImageIcon, ChevronLeft, ChevronRight, List, Loader2, VenetianMask, X, FileWarning } from 'lucide-react';
import Reveal from '../components/Reveal';

interface SideStoriesPageProps {
  language: Language;
}

// --- Internal Reader Logic (Shared with ReaderPage) ---
const VoidLog: React.FC<{ lines: string[] }> = ({ lines }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Reveal>
      <div className="my-10 border-l-4 border-fuchsia-600 bg-fuchsia-950/10 font-mono text-xs md:text-sm shadow-[0_0_15px_-3px_rgba(192,38,211,0.2)]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left p-3 md:p-4 bg-fuchsia-950/20 hover:bg-fuchsia-900/30 text-fuchsia-300 font-bold flex items-center gap-3 transition-all group border-b border-fuchsia-500/20"
        >
          <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
             <AlertTriangle size={16} />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
             <span className="animate-pulse tracking-widest text-fuchsia-400">&gt;&gt;&gt; SYSTEM_INTERCEPT // VOID_SIDE</span>
             <span className="text-[10px] bg-fuchsia-900/50 px-1 border border-fuchsia-500/30 text-fuchsia-200/70">
                SOURCE: UNKNOWN
             </span>
          </div>
        </button>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-4 md:p-6 text-fuchsia-100/90 space-y-2 leading-relaxed tracking-wide font-medium bg-black/20 backdrop-blur-sm">
              {lines.map((line, i) => (
                    <p key={i} className="border-l border-fuchsia-500/20 pl-3 hover:border-fuchsia-500 hover:bg-fuchsia-500/5 transition-colors duration-300">
                        {line.replace(/0000\.2Void>>|【插入结束】|【插入結束】|\[INSERTION_END\]/g, '')}
                    </p>
              ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const SideStoriesPage: React.FC<SideStoriesPageProps> = ({ language }) => {
  const [activeVolume, setActiveVolume] = useState<SideStoryVolume | null>(null);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showCharModal, setShowCharModal] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  // Responsive sidebar check
  useEffect(() => {
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  }, [activeVolume]);

  // Scroll reset
  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, [currentChapterIndex, activeVolume]);

  // Content Renderer
  const renderContent = (text: string) => {
    const lines = text.split('\n');
    const nodes: React.ReactNode[] = [];
    let buffer: string[] = [];
    let inVoidBlock = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

        if (trimmed.includes('0000.2Void>>')) {
            inVoidBlock = true;
            buffer = [];
            buffer.push(line);
            if (trimmed.includes('【插入结束】') || trimmed.includes('【插入結束】')) {
                inVoidBlock = false;
                nodes.push(<VoidLog key={`void-${i}`} lines={[...buffer]} />);
                buffer = [];
            }
            continue;
        }

        if (inVoidBlock) {
            buffer.push(line);
            if (trimmed.includes('【插入结束】') || trimmed.includes('【插入結束】')) {
                inVoidBlock = false;
                nodes.push(<VoidLog key={`void-${i}`} lines={[...buffer]} />);
                buffer = [];
            }
            continue;
        }

        if (!trimmed) {
            nodes.push(<br key={`br-${i}`} />);
            continue;
        }

        if (trimmed === '[[DIVIDER]]') {
            nodes.push(
                <Reveal key={`div-${i}`}>
                    <div className="my-12 flex items-center justify-center gap-4 opacity-50 select-none">
                    <div className="h-px bg-ash-light flex-1 bg-gradient-to-r from-transparent via-ash-light to-transparent" />
                    <Activity size={16} className="text-ash-light animate-pulse" />
                    <div className="h-px bg-ash-light flex-1 bg-gradient-to-r from-transparent via-ash-light to-transparent" />
                    </div>
                </Reveal>
            );
            continue;
        }

        const imageMatch = trimmed.match(/\[\[IMAGE::(.*?)::(.*?)\]\]/);
        if (imageMatch) {
            const [_, src, caption] = imageMatch;
            nodes.push(
                <Reveal key={`img-${i}`} className="my-12 flex flex-col items-center w-full">
                    <div className="relative border-4 border-ash-light p-2 bg-ash-dark max-w-full shadow-hard">
                        <img src={src} alt={caption} className="relative max-h-[600px] w-auto object-cover block grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none"></div>
                        <div className="absolute bottom-4 right-4 bg-ash-light text-ash-black px-3 py-1 text-[10px] font-mono font-bold border-2 border-ash-black flex items-center gap-2 uppercase">
                           <ImageIcon size={12} /> {caption}
                        </div>
                    </div>
                </Reveal>
            );
            continue;
        }

        nodes.push(
            <Reveal key={`p-${i}`}>
                <p className="mb-6 md:mb-8 text-justify indent-8 md:indent-12 font-mono text-sm md:text-base leading-relaxed text-ash-light">
                    {line}
                </p>
            </Reveal>
        );
    }
    return nodes;
  };

  // --- Character Modal ---
  const renderCharacterModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-[2px] p-4 animate-fade-in" onClick={() => setShowCharModal(false)}>
        <div 
            className="w-full max-w-md bg-ash-black border-2 border-ash-dark shadow-2xl relative overflow-hidden" 
            onClick={e => e.stopPropagation()}
        >
            {/* Header */}
            <div className="bg-ash-dark/50 p-3 border-b border-ash-gray/30 flex justify-between items-center">
                <div className="flex items-center gap-2 text-ash-gray font-mono text-xs font-bold uppercase">
                    <VenetianMask size={14} />
                    <span>Side_Cast // Database</span>
                </div>
                <button onClick={() => setShowCharModal(false)} className="text-ash-gray hover:text-ash-light transition-colors">
                    <X size={16} />
                </button>
            </div>

            {/* Error Content */}
            <div className="p-12 flex flex-col items-center text-center space-y-6 min-h-[300px] justify-center relative">
                
                {/* Background Noise */}
                <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none"></div>
                
                <div className="relative">
                    <FileWarning size={64} className="text-ash-dark animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-ash-gray font-black text-2xl">?</div>
                </div>

                <div className="space-y-2 z-10">
                    <h3 className="text-xl font-black text-ash-light uppercase tracking-widest border-b-2 border-ash-light/20 pb-2 inline-block">
                        NO RECORD FOUND
                    </h3>
                    <p className="font-mono text-xs text-ash-gray max-w-[200px] mx-auto leading-relaxed">
                        The requested personnel file is currently empty or encrypted by higher authority.
                    </p>
                </div>

                <div className="w-full bg-ash-dark/30 p-2 font-mono text-[10px] text-red-400/70 border border-red-900/20">
                    ERR_404: COLLECTION_VOID
                </div>
            </div>

            {/* Scanline Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.2)_3px)] opacity-50"></div>
        </div>
    </div>
  );

  // --- View: Folder / Directory ---
  if (!activeVolume) {
    return (
        <div className="h-full bg-halftone overflow-y-auto p-4 md:p-12 relative flex flex-col items-center">
            {/* Background Decorative Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-ash-dark -translate-x-1/2 z-0 border-l border-dashed border-ash-gray/30"></div>

            {/* Floating Char Modal Button */}
            <button 
                onClick={() => setShowCharModal(true)}
                className="absolute top-4 right-4 z-20 bg-ash-black border border-ash-gray p-2 text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light transition-all shadow-hard group"
                title="Personnel Archive"
            >
                <VenetianMask size={20} />
                <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-ash-dark text-ash-light text-[10px] font-mono px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    EXTRA_PERSONNEL
                </span>
            </button>

            <header className="relative z-10 mb-12 text-center bg-ash-black p-6 border border-ash-gray shadow-hard max-w-lg w-full">
                <div className="flex flex-col items-center gap-2">
                    <Folder size={32} className="text-ash-light" />
                    <h1 className="text-2xl font-black text-ash-light uppercase tracking-tighter">
                        {language === 'en' ? 'SIDE_ARCHIVES' : '支线档案库'}
                    </h1>
                    <p className="text-[10px] font-mono text-ash-gray border-t border-dashed border-ash-gray/50 pt-2 w-full text-center">
                        /VAR/LIB/MEMORIES/SIDE_STORIES
                    </p>
                </div>
            </header>

            <div className="w-full max-w-4xl relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sideStoryVolumes.map((volume, index) => {
                    const isLocked = volume.status === 'locked';
                    const isCorrupted = volume.status === 'corrupted';

                    return (
                        <Reveal key={volume.id} delay={index * 100} className="w-full">
                            <button
                                onClick={() => {
                                    if (!isLocked && !isCorrupted) {
                                        setActiveVolume(volume);
                                        setCurrentChapterIndex(0);
                                    }
                                }}
                                disabled={isLocked || isCorrupted}
                                className={`
                                    w-full aspect-[4/3] flex flex-col items-center justify-center gap-4 p-6 border-2 transition-all relative group
                                    ${isCorrupted 
                                        ? 'bg-ash-black/80 border-red-900/30 text-red-900 cursor-not-allowed' 
                                        : isLocked
                                            ? 'bg-ash-black border-ash-dark text-ash-gray cursor-not-allowed opacity-50'
                                            : 'bg-ash-black border-ash-gray text-ash-light hover:border-ash-light hover:bg-ash-dark shadow-hard cursor-pointer'
                                    }
                                `}
                            >
                                <Folder size={48} strokeWidth={1} className={isCorrupted || isLocked ? 'opacity-50' : 'group-hover:fill-ash-light/10'} />
                                
                                <div className="text-center">
                                    <h3 className={`font-bold text-lg font-mono uppercase ${isCorrupted ? 'blur-[1px] select-none' : ''}`}>
                                        {language === 'en' ? volume.titleEn : volume.title}
                                    </h3>
                                    <div className="text-[10px] font-mono mt-2 opacity-50">
                                        {isCorrupted ? 'ERR_0X' : isLocked ? 'ENCRYPTED' : `${volume.chapters.length} FILES`}
                                    </div>
                                </div>
                                
                                {(isLocked || isCorrupted) && (
                                    <div className="absolute top-2 right-2">
                                        {isCorrupted ? <AlertTriangle size={16} /> : <ShieldAlert size={16} />}
                                    </div>
                                )}
                            </button>
                        </Reveal>
                    );
                })}
            </div>
            
            {showCharModal && renderCharacterModal()}
        </div>
    );
  }

  // --- View: Independent Reader System ---
  const currentChapter = activeVolume.chapters[currentChapterIndex];
  const translation: ChapterTranslation = currentChapter.translations[language] || currentChapter.translations['zh-CN'];

  return (
    <div className="flex h-full relative overflow-hidden bg-retro-paper text-zinc-950">
        {/* Sidebar */}
        <aside 
            className={`absolute md:relative z-20 h-full bg-ash-black border-r-4 border-ash-dark transition-all duration-300 ease-in-out flex flex-col ${
            isSidebarOpen ? 'w-72 translate-x-0' : 'w-0 -translate-x-full md:w-0 md:-translate-x-0 overflow-hidden'
            }`}
        >
            <div className="p-4 border-b-2 border-ash-gray bg-ash-black text-ash-light flex justify-between items-center shrink-0">
                 <button 
                    onClick={() => setActiveVolume(null)}
                    className="flex items-center gap-2 text-xs font-mono hover:text-ash-gray transition-colors"
                 >
                    <ArrowLeft size={14} /> {language === 'en' ? 'BACK' : '返回'}
                 </button>
                 <div className="text-[10px] font-mono opacity-50">
                    {language === 'en' ? activeVolume.titleEn : activeVolume.title}
                 </div>
            </div>
            
            <div className="overflow-y-auto flex-1 p-0">
                {activeVolume.chapters.map((chapter, index) => {
                    const chapTitle = chapter.translations[language]?.title || chapter.translations['zh-CN'].title;
                    const isLocked = chapter.status === 'locked';
                    return (
                        <button
                            key={chapter.id}
                            onClick={() => {
                                if(!isLocked) {
                                    setCurrentChapterIndex(index);
                                    if (window.innerWidth < 768) setIsSidebarOpen(false);
                                }
                            }}
                            disabled={isLocked}
                            className={`w-full text-left p-4 text-xs font-mono border-b border-ash-dark transition-none group relative ${
                                index === currentChapterIndex
                                    ? 'bg-ash-light text-ash-black'
                                    : isLocked ? 'bg-ash-black/50 text-ash-gray/30 cursor-not-allowed' : 'text-ash-gray hover:bg-ash-dark hover:text-ash-white'
                            }`}
                        >
                            <div className="flex justify-between items-start">
                                <span className="font-bold truncate uppercase max-w-[85%]">
                                    {index === currentChapterIndex && '> '}{chapTitle}
                                </span>
                                {isLocked && <ShieldAlert size={12} />}
                            </div>
                        </button>
                    )
                })}
            </div>
        </aside>

        {/* Sidebar Toggle */}
        {!isSidebarOpen && (
            <button 
                onClick={() => setIsSidebarOpen(true)}
                className="absolute top-4 left-4 z-10 p-2 bg-ash-black text-ash-light border-2 border-ash-light hover:bg-ash-light hover:text-ash-black shadow-hard"
            >
                <List size={20} />
            </button>
        )}

        {/* Main Reader Area */}
        <main ref={mainRef} className="flex-1 overflow-y-auto scroll-smooth relative bg-ash-black">
             <div 
                key={currentChapter.id} 
                className="max-w-4xl mx-auto min-h-full bg-ash-black border-l-0 md:border-l-2 md:border-r-2 border-ash-dark/50 shadow-2xl relative animate-slide-in"
             >
                 {currentChapter.status === 'locked' ? (
                     <div className="h-[80vh] flex flex-col items-center justify-center text-ash-gray p-8 text-center">
                         <div className="mb-6 p-6 border-4 border-dashed border-red-900/50 rounded-none bg-red-950/10 w-full max-w-md">
                            <Activity size={64} className="text-red-800 mb-4 mx-auto animate-pulse" />
                            <h2 className="text-2xl font-black uppercase text-red-700 tracking-widest mb-2">
                                {language === 'en' ? 'DATA_CORRUPTED' : '数据损坏'}
                            </h2>
                            <p className="font-mono text-sm text-red-900/70 mb-6">ERR_READ_SECTOR // UNRECOVERABLE</p>
                            
                            <div className="border-t border-red-900/30 pt-4 w-full">
                                <div className="flex items-center justify-center gap-2 text-red-500 font-mono text-xs animate-pulse">
                                    <Loader2 size={14} className="animate-spin" />
                                    <span>
                                        {language === 'en' ? 'REPAIRING...' : 
                                         language === 'zh-TW' ? '正在修復中...' : '正在修复中...'}
                                    </span>
                                </div>
                                <div className="w-full bg-red-950/50 h-1 mt-2 overflow-hidden">
                                    <div className="h-full bg-red-800/60 w-1/3 animate-[pulse_1s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50"></div>
                                </div>
                            </div>
                        </div>
                     </div>
                 ) : (
                    <>
                        {/* Header */}
                        <div className="px-8 py-12 lg:px-16 border-b-4 border-double border-ash-gray bg-ash-black text-ash-light mt-12">
                            <Reveal>
                                <div className="flex justify-between items-start mb-6 font-mono text-[10px] text-ash-gray uppercase tracking-widest">
                                    <span>SIDE_ARCHIVE // {currentChapter.id}</span>
                                    <span>FILE_INDEX: {currentChapterIndex + 1}</span>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-tight">
                                    {translation.title}
                                </h1>
                                <div className="flex items-center gap-2 text-xs font-mono text-ash-gray bg-ash-dark inline-block px-3 py-1 border border-ash-gray">
                                    <FileText size={12} />
                                    <span>{currentChapter.date}</span>
                                </div>
                            </Reveal>
                        </div>
                        
                        {/* Body */}
                        <article className="px-8 py-12 lg:px-16 max-w-none text-ash-light font-serif leading-loose tracking-wide">
                            {renderContent(translation.content)}
                        </article>

                        {/* Footer Nav */}
                        <div className="p-8 md:p-16 border-t-4 border-double border-ash-gray bg-ash-dark">
                             <div className="flex justify-between items-center gap-4">
                                <button
                                    onClick={() => setCurrentChapterIndex(prev => Math.max(0, prev - 1))}
                                    disabled={currentChapterIndex === 0}
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-ash-gray text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-ash-gray transition-colors uppercase font-bold text-sm font-mono"
                                >
                                    <ChevronLeft size={16} /> PREV
                                </button>
                                <button
                                    onClick={() => setCurrentChapterIndex(prev => Math.min(activeVolume.chapters.length - 1, prev + 1))}
                                    disabled={currentChapterIndex === activeVolume.chapters.length - 1}
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-ash-gray text-ash-gray hover:bg-ash-light hover:text-ash-black hover:border-ash-light disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-ash-gray transition-colors uppercase font-bold text-sm font-mono"
                                >
                                    NEXT <ChevronRight size={16} />
                                </button>
                             </div>
                        </div>
                    </>
                 )}
             </div>
        </main>
        
        {/* Render modal if it's open (even inside reader view, although button is in folder view, this is just a safeguard or if we move button later) */}
        {showCharModal && renderCharacterModal()}
    </div>
  );
};

export default SideStoriesPage;