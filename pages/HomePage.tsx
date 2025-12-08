import React, { useState, useEffect, useMemo } from 'react';
import { Terminal, Activity, Wifi, Shield, ChevronRight, Cpu, HardDrive, Clock, RefreshCw } from 'lucide-react';
import { Language } from '../types';
import Reveal from '../components/Reveal';
import { introQuotes } from '../data/introQuotes';

interface HomePageProps {
  onStartReading: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartReading, language, setLanguage }) => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Initialize random quote index
  const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * introQuotes.length));

  const handleReroute = () => {
    // Pick a new random index, ensuring it tries to be different if possible (optional, but nice UX)
    setQuoteIndex(prev => {
        let next = Math.floor(Math.random() * introQuotes.length);
        // Simple retry once if it's the same to encourage variety
        if (next === prev && introQuotes.length > 1) {
             next = Math.floor(Math.random() * introQuotes.length);
        }
        return next;
    });
  };

  // Construct the intro content based on language and the selected random quote
  const introContent = useMemo(() => {
    const quote = introQuotes[quoteIndex];
    const text = quote.text[language];
    
    if (language === 'zh-CN') {
        return `> 正在建立加密连接...\n> 发送者: ${quote.speaker}\n\n“${text}”\n\n> 讯号待机中。`;
    } else if (language === 'zh-TW') {
        return `> 正在建立加密連接...\n> 發送者: ${quote.speaker}\n\n「${text}」\n\n> 訊號待機中。`;
    } else {
        return `> ESTABLISHING ENCRYPTED CONNECTION...\n> SENDER: ${quote.speaker}\n\n"${text}"\n\n> SIGNAL STANDBY.`;
    }
  }, [language, quoteIndex]);

  // Typing effect for the intro
  useEffect(() => {
    let index = 0;
    const speed = 40; // Slightly slower for dialogue
    setTypedText('');
    
    const interval = setInterval(() => {
      if (index < introContent.length) {
        setTypedText((prev) => prev + introContent.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [language, introContent]);

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor(v => !v), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const t = {
    'zh-CN': {
      sys_status: '系统状态',
      net_status: '网络连接',
      mem_usage: '内存占用',
      integrity: '完整性',
      online: '在线',
      stable: '稳定',
      verified: '已验证',
      welcome: '欢迎回来，操作员',
      cmd_prompt: '执行主要协议 [阅读模式]',
      recent_logs: '近期系统日志'
    },
    'zh-TW': {
      sys_status: '系統狀態',
      net_status: '網絡連接',
      mem_usage: '內存占用',
      integrity: '完整性',
      online: '在線',
      stable: '穩定',
      verified: '已驗證',
      welcome: '歡迎回來，操作員',
      cmd_prompt: '執行主要協議 [閱讀模式]',
      recent_logs: '近期系統日誌'
    },
    'en': {
      sys_status: 'SYS_STATUS',
      net_status: 'NET_UPLINK',
      mem_usage: 'MEM_USAGE',
      integrity: 'INTEGRITY',
      online: 'ONLINE',
      stable: 'STABLE',
      verified: 'VERIFIED',
      welcome: 'WELCOME BACK, OPERATOR',
      cmd_prompt: 'EXECUTE PRIMARY PROTOCOL [READ_MODE]',
      recent_logs: 'RECENT SYSTEM LOGS'
    }
  }[language];

  return (
    <div className="flex flex-col h-full p-4 md:p-8 overflow-y-auto bg-halftone text-ash-light font-mono relative">
      
      {/* --- Top Status Bar --- */}
      <div className="flex flex-wrap items-end justify-between border-b-2 border-ash-gray pb-4 mb-8 shrink-0 animate-fade-in gap-4">
        <div>
           <div className="flex items-center gap-2 text-xl md:text-2xl font-black uppercase tracking-tighter text-ash-light mb-1">
              <Terminal size={24} />
              <span>ROOT_CONSOLE // V.3.2.1</span>
           </div>
           <div className="text-[10px] text-ash-gray flex items-center gap-4">
              <span>ID: VOID-XPSDVN</span>
              <span>LOC: SECTOR_0</span>
              <span className="flex items-center gap-1"><Clock size={10} /> {new Date().toLocaleTimeString()}</span>
           </div>
        </div>
        
        {/* Language Switcher Mini-Terminal */}
        <div className="flex gap-1 text-[10px] font-bold">
           {(['zh-CN', 'zh-TW', 'en'] as Language[]).map(lang => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1 border transition-colors ${
                    language === lang 
                    ? 'bg-ash-light text-ash-black border-ash-light' 
                    : 'bg-ash-black text-ash-gray border-ash-gray hover:text-ash-light'
                }`}
              >
                {lang === 'en' ? 'EN' : lang === 'zh-CN' ? 'CN' : 'TW'}
              </button>
           ))}
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- Left Column: System Metrics --- */}
        <div className="space-y-6 lg:col-span-1 animate-slide-in" style={{ animationDelay: '100ms' }}>
            
            {/* Status Block */}
            <div className="bg-ash-dark/30 border border-ash-gray p-4 relative">
                <div className="absolute top-0 right-0 p-1">
                    <div className="flex gap-1">
                        <div className="w-2 h-2 bg-ash-gray rounded-full"></div>
                        <div className="w-2 h-2 bg-ash-gray rounded-full"></div>
                    </div>
                </div>
                <h3 className="text-xs font-bold text-ash-gray mb-4 flex items-center gap-2 uppercase">
                    <Activity size={14} /> {t.sys_status}
                </h3>
                <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-center">
                        <span className="text-ash-gray">CORE_KERNEL</span>
                        <span className="text-ash-light font-bold bg-ash-dark px-1 border border-ash-gray/50 text-[10px]">{t.online}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-ash-gray">ARCHIVE_DB</span>
                        <span className="text-ash-light font-bold bg-ash-dark px-1 border border-ash-gray/50 text-[10px]">{t.online}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-ash-gray">REALITY_ANCHOR</span>
                        <span className="text-ash-light font-bold bg-ash-dark px-1 border border-ash-gray/50 text-[10px]">{t.stable}</span>
                    </div>
                </div>
            </div>

            {/* Hardware Block */}
            <div className="bg-ash-dark/30 border border-ash-gray p-4">
                 <h3 className="text-xs font-bold text-ash-gray mb-4 flex items-center gap-2 uppercase">
                    <Cpu size={14} /> HARDWARE_MONITOR
                </h3>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-[10px] mb-1">
                            <span>CPU_LOAD</span>
                            <span>4%</span>
                        </div>
                        <div className="w-full bg-ash-dark h-1">
                            <div className="w-[4%] h-full bg-ash-light"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-[10px] mb-1">
                            <span>MEM_ALLOC</span>
                            <span>4024PB</span>
                        </div>
                        <div className="w-full bg-ash-dark h-1">
                            <div className="w-[6%] h-full bg-ash-light"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-[10px] mb-1">
                            <span>SYNC_RATE</span>
                            <span>10%</span>
                        </div>
                        <div className="w-full bg-ash-dark h-1">
                            <div className="w-[10%] h-full bg-ash-light"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Logs Preview */}
            <div className="bg-ash-black border border-ash-gray p-2 font-mono text-[10px] h-32 overflow-hidden opacity-70">
                <div className="mb-2 border-b border-ash-gray/30 pb-1 text-ash-gray uppercase">{t.recent_logs}</div>
                <ul className="space-y-1 text-ash-gray/80">
                    <li>&gt; [SYS] User_Login detected...</li>
                    <li>&gt; [NET] Handshake successful (0.04ms)</li>
                    <li>&gt; [DB] Loaded 3 Volumes, 1 Side_Story</li>
                    <li>&gt; [SEC] Environment scan... Clear</li>
                    <li>&gt; [SYS] Ready for input.</li>
                </ul>
            </div>
        </div>

        {/* --- Center/Right: Main Terminal Output --- */}
        <div className="lg:col-span-2 flex flex-col animate-slide-in" style={{ animationDelay: '200ms' }}>
            
            {/* Main Viewport */}
            <div className="flex-1 bg-ash-black border-2 border-ash-light p-6 md:p-12 relative shadow-hard min-h-[400px] flex flex-col">
                {/* Decorative UI */}
                <div className="absolute top-2 left-2 flex gap-1">
                    <div className="w-1 h-1 bg-ash-light"></div>
                    <div className="w-1 h-1 bg-ash-light"></div>
                </div>
                
                {/* Refresh Signal Button */}
                <div className="absolute top-2 right-2 flex gap-2">
                    <button 
                        onClick={handleReroute}
                        className="flex items-center gap-1 text-[10px] font-bold bg-ash-gray/20 text-ash-gray border border-ash-gray/50 px-2 hover:bg-ash-light hover:text-ash-black hover:border-ash-light transition-all group"
                    >
                        <RefreshCw size={10} className="group-hover:animate-spin" />
                        REROUTE_SIGNAL
                    </button>
                    <div className="text-[10px] font-bold bg-ash-light text-ash-black px-1 border border-ash-light">
                        TTY_1
                    </div>
                </div>

                {/* ASCII Art */}
                <pre className="text-[6px] md:text-[10px] leading-[6px] md:leading-[10px] font-black text-ash-gray/30 select-none mb-8">
{`
 _   _  _____  _   _   ___       _       ___  ______  _____ 
| \\ | ||  _  || | | | / _ \\     | |     / _ \\ | ___ \\/  ___|
|  \\| || | | || | | |/ /_\\ \\    | |    / /_\\ \\| |_/ /\\ \`--. 
| . \` || | | || | | ||  _  |    | |    |  _  || ___ \\ \`--. \\
| |\\  |\\ \\_/ /\\ \\_/ /| | | |    | |____| | | || |_/ /\\__/ /
\\_| \\_/ \\___/  \\___/ \\_| |_/    \\_____/\\_| |_/\\____/\\____/ 
                                                          
 >> SECURE ARCHIVE TERMINAL `}
                </pre>

                {/* Welcome Message */}
                <div className="mb-6">
                    <h1 className="text-xl md:text-3xl font-bold uppercase text-ash-light mb-2">
                        {t.welcome}
                    </h1>
                    <div className="h-px w-full bg-gradient-to-r from-ash-light via-ash-gray to-transparent opacity-50"></div>
                </div>

                {/* Typing Content */}
                <div className="flex-1 font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap text-ash-gray">
                    {typedText}
                    {showCursor && <span className="inline-block w-2 h-4 bg-ash-light ml-1 align-middle"></span>}
                </div>

                {/* Interactive Command Line (The Button) */}
                <div className="mt-8 pt-6 border-t border-dashed border-ash-gray/30">
                    <button 
                        onClick={onStartReading}
                        className="w-full text-left group relative bg-ash-dark/50 hover:bg-ash-light hover:text-ash-black border border-ash-gray hover:border-ash-light p-4 transition-all duration-200"
                    >
                        <div className="flex items-center gap-3 font-bold text-sm md:text-lg">
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            <span className="animate-pulse group-hover:animate-none">{t.cmd_prompt}</span>
                        </div>
                        {/* Hover effect decorative elements */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-mono border border-current px-2 py-1">ENTER</span>
                        </div>
                    </button>
                    <div className="mt-2 flex justify-between text-[10px] text-ash-gray/50 font-mono">
                        <span>WAITING FOR INPUT...</span>
                        <span>SESSION_ID: #992-AZ</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;