import React from 'react';
import { SideStoryVolume, Language } from '../../types';
import { ArrowLeft, Cpu, Lock, FileText, ChevronRight } from 'lucide-react';
import Reveal from '../Reveal';

interface SideStoryChapterListProps {
  volume: SideStoryVolume;
  onBack: () => void;
  onSelectChapter: (index: number) => void;
  language: Language;
  isLightTheme: boolean;
}

const SideStoryChapterList: React.FC<SideStoryChapterListProps> = ({ volume, onBack, onSelectChapter, language, isLightTheme }) => {
  return (
        <div className="h-full bg-halftone overflow-y-auto p-4 md:p-12 relative flex flex-col items-center">
             <div className="w-full max-w-3xl relative z-10 animate-fade-in mt-8 md:mt-0">
                {/* Header / Breadcrumb */}
                <div className="flex items-center gap-4 mb-8 border-b-2 border-ash-gray pb-4">
                     <button 
                        onClick={onBack}
                        className="p-2 border border-ash-gray text-ash-gray hover:text-ash-light hover:border-ash-light hover:bg-ash-dark transition-all"
                     >
                         <ArrowLeft size={20} />
                     </button>
                     <div>
                         <div className="text-[10px] font-mono text-ash-gray">ROOT / {volume.id}</div>
                         <h2 className="text-2xl font-black text-ash-light uppercase tracking-tight">{language === 'en' ? volume.titleEn : volume.title}</h2>
                     </div>
                     <div className="ml-auto hidden md:block">
                         <Cpu size={24} className="text-ash-dark animate-pulse" />
                     </div>
                </div>

                {/* File List */}
                <div className="space-y-3">
                    {volume.chapters.map((chapter, index) => {
                        const isLocked = chapter.status === 'locked';
                        const t = chapter.translations[language] || chapter.translations['zh-CN'];
                        
                        // Dynamic Styles based on theme and state
                        let itemClass = "";
                        if (isLocked) {
                            itemClass = isLightTheme 
                                ? 'bg-zinc-100 border-zinc-300 text-zinc-400 opacity-60 cursor-not-allowed'
                                : 'bg-ash-dark/20 border-ash-dark/50 text-ash-gray opacity-60 cursor-not-allowed';
                        } else {
                            itemClass = isLightTheme
                                ? 'bg-white border-zinc-300 text-zinc-800 hover:bg-zinc-50 hover:border-zinc-500 shadow-sm'
                                : 'bg-ash-black/80 border-ash-dark/50 text-ash-light hover:border-ash-light hover:bg-ash-dark/40 shadow-hard-sm';
                        }

                        return (
                            <Reveal key={chapter.id} delay={index * 50}>
                                <button
                                    onClick={() => {
                                        if (!isLocked) {
                                            onSelectChapter(index);
                                        }
                                    }}
                                    disabled={isLocked}
                                    className={`
                                        w-full flex items-center gap-4 p-4 border transition-all duration-200 group relative overflow-hidden
                                        ${itemClass}
                                    `}
                                >
                                    <div className="shrink-0 w-8 text-center font-mono text-xs opacity-50">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    
                                    <div className={`
                                        shrink-0 p-2 border transition-colors
                                        ${isLocked 
                                            ? 'bg-transparent border-current opacity-50' 
                                            : isLightTheme 
                                                ? 'bg-zinc-100 border-zinc-200 group-hover:bg-zinc-800 group-hover:text-white group-hover:border-zinc-800'
                                                : 'bg-ash-dark/50 border-ash-gray/30 group-hover:border-ash-light group-hover:bg-ash-light group-hover:text-ash-black'
                                        }
                                    `}>
                                        {isLocked ? <Lock size={16} /> : <FileText size={16} />}
                                    </div>
                                    
                                    <div className="flex-1 text-left">
                                        <div className="font-bold font-mono text-sm md:text-base uppercase truncate">
                                            {t.title}
                                        </div>
                                        <div className="text-[10px] font-mono opacity-50 flex items-center gap-2">
                                            <span>{chapter.date}</span>
                                            {!isLocked && <span className="hidden md:inline">| {t.content.length * 2} BYTES</span>}
                                        </div>
                                    </div>

                                    {/* Hover Decor */}
                                    {!isLocked && (
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ChevronRight size={16} />
                                        </div>
                                    )}

                                    {/* Scanline on Hover (Only dark mode or subtle) */}
                                    {!isLocked && !isLightTheme && <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none skew-x-12"></div>}
                                </button>
                            </Reveal>
                        );
                    })}
                </div>
             </div>
        </div>
    );
};

export default SideStoryChapterList;