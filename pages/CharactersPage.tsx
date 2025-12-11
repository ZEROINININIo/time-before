
import React, { useState } from 'react';
import { novelData } from '../data/novelData';
import { sideCharacters } from '../data/sideCharacters';
import { User, Activity, Shield, Sparkles, Hash, Zap, Cpu, Brain, Heart, Wind, Share2 } from 'lucide-react';
import { CharacterStats, Language } from '../types';

interface CharactersPageProps {
    language: Language;
}

// --- Data & Helpers for Relationship Graph ---

const relationships: Record<string, string[]> = {
  'point': ['zeri', 'zelo', 'void', 'dusk-rain'],
  'zeri': ['point', 'zelo'],
  'zelo': ['point', 'zeri'],
  'void': ['point'],
};

const getCharInfo = (id: string, language: Language) => {
  // 1. Check Main Characters
  const main = novelData.characters.find(c => c.id === id);
  if (main) {
    const t = main.translations[language] || main.translations['zh-CN'];
    return {
      id: main.id,
      name: t.name,
      role: t.role,
      color: main.themeColor || 'text-ash-light',
      isMain: true
    };
  }
  
  // 2. Check Side Characters
  const side = sideCharacters.find(c => c.id === id);
  if (side) {
    const t = side.translations[language] || side.translations['zh-CN'];
    return {
      id: side.id,
      name: t.name,
      role: t.role,
      color: 'text-ash-gray',
      isMain: false
    };
  }

  return null;
};

// --- Components ---

const RelationshipGraph = ({ centerId, language, onSelect, isLightTheme }: { centerId: string, language: Language, onSelect: (id: string) => void, isLightTheme: boolean }) => {
    const relatedIds = relationships[centerId] || [];
    if (relatedIds.length === 0) return null;

    const centerInfo = getCharInfo(centerId, language);
    if (!centerInfo) return null;

    // Increased sizes for better visibility - V2
    const radius = 130; // Further increased distance
    const size = 400;  // Larger canvas size
    const center = size / 2;

    return (
        <div className="flex flex-col items-center w-full overflow-hidden">
            <h3 className="text-xs font-bold uppercase mb-4 flex items-center gap-2 text-ash-gray w-full border-b border-ash-gray/20 pb-2">
                <Share2 size={14} /> {language === 'en' ? 'Network' : '关系网络'}
            </h3>
            
            {/* Increased max-width constraint to allow bigger graph */}
            <div className="relative w-full max-w-[400px]" style={{ aspectRatio: '1/1' }}>
                 <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible">
                     {/* Lines */}
                     {relatedIds.map((id, i) => {
                         const angle = (i * 2 * Math.PI) / relatedIds.length - Math.PI / 2;
                         const x = center + radius * Math.cos(angle);
                         const y = center + radius * Math.sin(angle);
                         return (
                             <g key={`line-${id}`}>
                                <line 
                                    x1={center} y1={center}
                                    x2={x} y2={y}
                                    stroke="currentColor"
                                    strokeOpacity="0.3" 
                                    strokeWidth="2"
                                    className="text-ash-gray"
                                />
                                <circle cx={center + (x-center)*0.5} cy={center + (y-center)*0.5} r="3" className="text-ash-gray fill-current opacity-50" />
                             </g>
                         );
                     })}

                     {/* Center Node */}
                     <g className="filter drop-shadow-lg">
                        <circle cx={center} cy={center} r="40" className={`${centerInfo.color} fill-current opacity-20`} />
                        <circle cx={center} cy={center} r="35" className="fill-ash-black stroke-[3px] stroke-current text-ash-gray" />
                        <text x={center} y={center} dy="0.35em" textAnchor="middle" className={`text-[18px] font-mono font-black uppercase ${centerInfo.color} fill-current pointer-events-none select-none`}>
                            {centerInfo.name.substring(0, 2)}
                        </text>
                     </g>

                     {/* Satellite Nodes */}
                     {relatedIds.map((id, i) => {
                         const angle = (i * 2 * Math.PI) / relatedIds.length - Math.PI / 2;
                         const x = center + radius * Math.cos(angle);
                         const y = center + radius * Math.sin(angle);
                         const info = getCharInfo(id, language);
                         
                         if (!info) return null;

                         return (
                             <g 
                                key={id} 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if(info.isMain) onSelect(id);
                                }}
                                className={`transition-all duration-300 ${info.isMain ? 'cursor-pointer hover:scale-110' : 'cursor-default opacity-90'}`}
                             >
                                 <circle cx={x} cy={y} r="28" className={`${info.color} fill-current opacity-10`} />
                                 <circle cx={x} cy={y} r="24" className={`fill-ash-black stroke-2 stroke-current ${info.color}`} />
                                 
                                 <text x={x} y={y} dy="-0.3em" textAnchor="middle" className={`text-[12px] font-mono font-bold uppercase ${info.color} fill-current select-none`}>
                                    {info.name}
                                 </text>
                                 <text x={x} y={y} dy="1.2em" textAnchor="middle" className="text-[9px] font-mono uppercase fill-ash-gray select-none">
                                    {info.role}
                                 </text>
                             </g>
                         );
                     })}
                 </svg>
            </div>
        </div>
    );
};

// Simple Radar Chart Component
const RadarChart = ({ stats, colorClass }: { stats: CharacterStats; colorClass: string }) => {
  const size = 100;
  const center = size / 2;
  const radius = 40;
  const maxStat = 10;
  
  // Calculate points for the pentagon
  const getPoint = (value: number, index: number, total: number) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const r = (value / maxStat) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x},${y}`;
  };

  const statValues = [stats.strength, stats.intelligence, stats.mental, stats.resonance, stats.agility];
  const points = statValues.map((val, i) => getPoint(val, i, 5)).join(' ');

  // Helper labels
  const labels = [
    { label: "STR", x: 50, y: 5 },
    { label: "INT", x: 95, y: 35 },
    { label: "MEN", x: 80, y: 95 },
    { label: "RES", x: 20, y: 95 },
    { label: "AGI", x: 5, y: 35 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[200px] mx-auto">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible">
        {/* Background Grid (Pentagon) */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale) => (
           <polygon 
             key={scale}
             points={Array(5).fill(maxStat * scale).map((val, i) => getPoint(val, i, 5)).join(' ')}
             fill="none"
             stroke="var(--ash-gray)"
             strokeWidth="0.5"
             opacity="0.3"
           />
        ))}
        {/* Axes */}
        {labels.map((_, i) => (
             <line 
                key={i}
                x1={center} y1={center}
                x2={getPoint(maxStat, i, 5).split(',')[0]}
                y2={getPoint(maxStat, i, 5).split(',')[1]}
                stroke="var(--ash-gray)"
                strokeWidth="0.5"
                opacity="0.3"
             />
        ))}

        {/* Data Polygon */}
        <polygon 
          points={points} 
          fill="currentColor" 
          fillOpacity="0.2"
          stroke="currentColor" 
          strokeWidth="2"
          className={colorClass}
        />
        {/* Points */}
        {statValues.map((val, i) => {
            const [x, y] = getPoint(val, i, 5).split(',');
            return <circle key={i} cx={x} cy={y} r="1.5" className={`${colorClass} fill-current`} />
        })}
        
        {/* Labels */}
        {labels.map((l, i) => (
            <text key={i} x={l.x} y={l.y} textAnchor="middle" fontSize="6" fill="var(--ash-gray)" className="font-mono font-bold">{l.label}</text>
        ))}
      </svg>
    </div>
  );
};

export default function CharactersPage({ language }: CharactersPageProps) {
  const [selectedId, setSelectedId] = useState<string>(novelData.characters[0].id);

  const selectedChar = novelData.characters.find(c => c.id === selectedId) || novelData.characters[0];
  const tChar = selectedChar.translations[language] || selectedChar.translations['zh-CN'];

  const getIcon = (role: string) => {
    const r = role.toLowerCase();
    if (r.includes('支援') || r.includes('重装') || r.includes('support') || r.includes('heavy')) return <Shield className="w-5 h-5" />;
    if (r.includes('科研') || r.includes('前线') || r.includes('research') || r.includes('frontline')) return <Activity className="w-5 h-5" />;
    if (r.includes('？？？') || r.includes('???')) return <Sparkles className="w-5 h-5" />;
    return <User className="w-5 h-5" />;
  };

  const statsList = [
      { label: "STRENGTH", val: selectedChar.stats.strength, icon: Zap },
      { label: "INTELLIGENCE", val: selectedChar.stats.intelligence, icon: Brain },
      { label: "AGILITY", val: selectedChar.stats.agility, icon: Wind },
      { label: "MENTAL", val: selectedChar.stats.mental, icon: Heart },
      { label: "RESONANCE", val: selectedChar.stats.resonance, icon: Cpu },
  ];

  return (
    <div className="flex flex-col h-full bg-halftone overflow-hidden">
      
      {/* Top Header */}
      <header className="p-4 md:p-8 border-b-2 border-ash-dark bg-ash-black z-20 flex justify-between items-center shrink-0">
        <div>
            <h2 className="text-xl md:text-3xl font-black text-ash-light mb-1 uppercase tracking-tighter flex items-center gap-3">
                <User size={24} className="md:w-7 md:h-7" />
                {language === 'en' ? 'Personnel_File' : '人员档案'}
            </h2>
            <div className="text-[10px] font-mono text-ash-gray flex gap-2">
                <span className="bg-ash-dark px-1">CONFIDENTIAL</span>
                <span>// AUTH_REQ_LEVEL_5</span>
            </div>
        </div>
        <div className="hidden md:block text-right">
             <div className="text-xs text-ash-light font-bold font-mono border border-ash-gray px-2 py-1 inline-block">
                DB_STATUS: ONLINE
             </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
         
         {/* List Selection */}
         <aside className="w-full md:w-64 lg:w-80 border-b-2 md:border-b-0 md:border-r-2 border-ash-dark bg-ash-black overflow-x-auto md:overflow-y-auto shrink-0 z-10 flex flex-row md:flex-col no-scrollbar">
             <div className="flex flex-row md:flex-col p-2 md:p-4 gap-2 md:gap-4 md:space-y-2 min-w-max md:min-w-0">
                 {novelData.characters.map(char => {
                     const charT = char.translations[language] || char.translations['zh-CN'];
                     return (
                        <button
                            key={char.id}
                            onClick={() => setSelectedId(char.id)}
                            className={`w-32 md:w-full text-left p-2 md:p-4 border-2 transition-all relative overflow-hidden group shrink-0 ${
                                selectedId === char.id 
                                ? 'border-ash-light bg-ash-light text-ash-black shadow-hard' 
                                : 'border-ash-gray/30 bg-ash-dark text-ash-gray hover:border-ash-gray hover:text-ash-white'
                            }`}
                        >
                            <div className="flex justify-between items-start mb-1 z-10 relative">
                                <span className="font-bold uppercase tracking-wider truncate text-xs md:text-base">{charT.name}</span>
                                <div className="scale-75 origin-top-right md:scale-100">{getIcon(charT.role)}</div>
                            </div>
                            <div className="text-[10px] font-mono opacity-70 z-10 relative truncate">{char.alias}</div>
                            
                            {/* Selected Background Pattern */}
                            {selectedId === char.id && (
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-50 pointer-events-none" />
                            )}
                        </button>
                     );
                 })}
             </div>
         </aside>

         {/* Right: Detail View */}
         <main key={selectedChar.id} className="flex-1 overflow-y-auto p-4 md:p-12 relative animate-fade-in bg-ash-black">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Hash size={300} strokeWidth={0.5} />
             </div>
             
             <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
                 
                 {/* ID Card Header */}
                 <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start border-b-2 border-dashed border-ash-gray pb-8 md:pb-12">
                     <div className="w-full lg:w-1/3 bg-ash-dark p-4 md:p-6 border-2 border-ash-gray shadow-hard relative">
                         {/* Radar Chart Container */}
                         <div className="aspect-square bg-ash-black border border-ash-dark mb-4 flex items-center justify-center relative overflow-hidden">
                             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ash-gray to-transparent"></div>
                             <RadarChart stats={selectedChar.stats} colorClass={selectedChar.themeColor || 'text-ash-light'} />
                             
                             <div className="absolute bottom-2 right-2 text-[10px] font-mono text-ash-gray">
                                 SYNC_RATE: {selectedChar.stats.resonance * 10}%
                             </div>
                         </div>
                         
                         <div className="space-y-2 mb-6">
                            {statsList.map((stat) => (
                                <div key={stat.label} className="flex items-center justify-between text-[10px] font-mono">
                                    <span className="flex items-center gap-1 text-ash-gray">
                                        <stat.icon size={10} /> {stat.label}
                                    </span>
                                    <div className="flex gap-[1px]">
                                        {Array(10).fill(0).map((_, i) => (
                                            <div 
                                                key={i} 
                                                className={`w-1 h-2 ${i < stat.val ? (selectedChar.themeColor?.replace('text-', 'bg-') || 'bg-ash-light') : 'bg-ash-black border border-ash-dark'}`} 
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                         </div>

                         {/* Relationship Graph Section */}
                         <div className="pt-4 border-t border-ash-gray/20">
                             <RelationshipGraph 
                                centerId={selectedChar.id} 
                                language={language} 
                                onSelect={setSelectedId}
                                isLightTheme={false} 
                             />
                         </div>
                     </div>

                     <div className="flex-1 space-y-4 md:space-y-6">
                         <div>
                             <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-ash-light mb-2">
                                 {tChar.name}
                             </h1>
                             <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm font-mono text-ash-gray">
                                 <span className="px-2 py-1 bg-ash-dark border border-ash-gray text-ash-light font-bold">
                                     {selectedChar.alias}
                                 </span>
                                 <span> // ROLE: {tChar.role}</span>
                                 <span> // ID: {selectedChar.id.toUpperCase()}</span>
                             </div>
                         </div>

                         {tChar.quote && (
                             <div 
                                className="border-l-4 border-ash-light pl-4 py-2 italic text-ash-light/80 font-serif text-base md:text-lg animate-slide-in"
                                style={{ animationDelay: '150ms', animationFillMode: 'both' }}
                             >
                                 "{tChar.quote}"
                             </div>
                         )}

                         <div className="flex flex-wrap gap-2">
                             {tChar.tags.map(tag => (
                                 <span key={tag} className="px-3 py-1 border border-ash-gray rounded-full text-xs font-mono hover:bg-ash-light hover:text-ash-black transition-colors">
                                     #{tag}
                                 </span>
                             ))}
                         </div>
                     </div>
                 </div>

                 {/* Dossier Content */}
                 <div className="space-y-4 md:space-y-6 pb-20 md:pb-0">
                     <h3 className="text-lg md:text-xl font-bold uppercase border-b border-ash-gray pb-2 flex items-center gap-2">
                         <Activity size={20} /> Field Analysis
                     </h3>
                     <div className="grid xl:grid-cols-2 gap-4 md:gap-8 text-sm md:text-base leading-relaxed font-mono text-ash-gray/90">
                         {tChar.description.map((para, idx) => (
                             <div key={idx} className="p-3 md:p-4 border border-ash-dark bg-ash-dark/30 hover:bg-ash-dark/50 transition-colors">
                                 <span className="text-ash-light font-bold mr-2">[{String(idx + 1).padStart(2, '0')}]</span>
                                 {para}
                             </div>
                         ))}
                     </div>
                 </div>

             </div>
         </main>
      </div>
   </div>
    );
}
