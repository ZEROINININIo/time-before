import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import DatabasePage from './pages/DatabasePage';
import ReaderPage from './pages/ReaderPage';
import SideStoriesPage from './pages/SideStoriesPage';
import BootSequence from './components/BootSequence';
import InitialSetup from './components/InitialSetup';
import CustomCursor from './components/CustomCursor';
import { Language } from './types';

const STORAGE_KEY = 'nova_labs_config_v2';

interface AppConfig {
  language: Language;
  crtEnabled: boolean;
  isLightTheme: boolean;
  setupCompleted: boolean;
}

const defaultConfig: AppConfig = {
  language: 'zh-CN',
  crtEnabled: true,
  isLightTheme: false,
  setupCompleted: false
};

const App: React.FC = () => {
  // 1. Load config from localStorage immediately to determine initial state
  const loadConfig = (): AppConfig => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return { ...defaultConfig, ...JSON.parse(saved) };
    } catch (e) {
      console.warn("Failed to load config", e);
    }
    return defaultConfig;
  };

  const initialConfig = loadConfig();

  // App State: 'BOOT' -> 'SETUP' -> 'READY'
  const [appState, setAppState] = useState<'BOOT' | 'SETUP' | 'READY'>('BOOT');
  
  // Navigation State
  const [activeTab, setActiveTab] = useState('home');
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  // Global Preference State (Initialized from storage)
  const [language, setLanguage] = useState<Language>(initialConfig.language);
  const [crtEnabled, setCrtEnabled] = useState(initialConfig.crtEnabled);
  const [isLightTheme, setIsLightTheme] = useState(initialConfig.isLightTheme);
  const [setupCompleted, setSetupCompleted] = useState(initialConfig.setupCompleted);

  // 2. Persist settings whenever they change
  useEffect(() => {
    const config: AppConfig = {
      language,
      crtEnabled,
      isLightTheme,
      setupCompleted
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  }, [language, crtEnabled, isLightTheme, setupCompleted]);

  const handleBootComplete = () => {
    if (setupCompleted) {
      setAppState('READY');
    } else {
      setAppState('SETUP');
    }
  };

  const handleSetupComplete = () => {
    setSetupCompleted(true);
    setAppState('READY');
  };

  return (
    <>
      {/* Global Cursor - Always rendered on top */}
      <CustomCursor />

      {/* Render Boot Sequence */}
      {appState === 'BOOT' && (
        <BootSequence 
          onComplete={handleBootComplete} 
          isNormalBoot={setupCompleted} 
          language={language}
        />
      )}

      {/* Render Initial Setup */}
      {appState === 'SETUP' && (
        <InitialSetup 
            onComplete={handleSetupComplete}
            language={language}
            setLanguage={setLanguage}
            crtEnabled={crtEnabled}
            setCrtEnabled={setCrtEnabled}
            isLightTheme={isLightTheme}
            setIsLightTheme={setIsLightTheme}
        />
      )}

      {/* Render Main App */}
      {appState === 'READY' && (
        <div className="flex flex-col lg:flex-row h-screen supports-[height:100dvh]:h-[100dvh] bg-ash-black text-ash-light overflow-hidden font-mono selection:bg-ash-light selection:text-ash-black cursor-none">
          
          {/* Global Texture Overlays */}
          <div className="noise-overlay"></div>
          
          {/* Background Grid */}
          <div className="absolute inset-0 z-0 bg-grid-hard pointer-events-none opacity-50"></div>

          {/* Main Layout */}
          <Navigation 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            language={language}
            setLanguage={setLanguage}
            crtEnabled={crtEnabled}
            setCrtEnabled={setCrtEnabled}
            isLightTheme={isLightTheme}
            setIsLightTheme={setIsLightTheme}
          />
          
          <main className="flex-1 h-full overflow-hidden relative z-10 border-l-2 border-ash-dark">
            <div 
              key={activeTab}
              className="h-full overflow-y-auto pb-20 lg:pb-0 bg-ash-black/90 animate-slide-in"
            >
              {activeTab === 'home' && (
                <HomePage 
                  onStartReading={() => setActiveTab('reader')} 
                  language={language}
                  setLanguage={setLanguage}
                />
              )}
              {activeTab === 'characters' && <CharactersPage language={language} />}
              {activeTab === 'database' && <DatabasePage language={language} />}
              {activeTab === 'reader' && (
                <ReaderPage 
                  currentIndex={currentChapterIndex} 
                  onChapterChange={setCurrentChapterIndex} 
                  language={language}
                />
              )}
              {activeTab === 'sidestories' && <SideStoriesPage language={language} />}
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default App;