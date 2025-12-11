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
import StoryEntryAnimation from './components/StoryEntryAnimation';
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
  
  // Transition State
  const [isEnteringStory, setIsEnteringStory] = useState(false);

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

  // Logic to intercept navigation for animation triggers
  const handleNavigationChange = (tab: string) => {
      setActiveTab(tab);
  };

  // Triggered from HomePage button
  const startStorySequence = () => {
    setIsEnteringStory(true);
  };

  // Called when MAIN story animation finishes
  const handleStoryEntryComplete = () => {
    setActiveTab('reader');
    setIsEnteringStory(false);
  };

  const handleHomeNavigate = (tab: string) => {
    if (tab === 'reader') {
        startStorySequence();
    } else {
        setActiveTab(tab);
    }
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

      {/* Main Story Transition Animation */}
      {isEnteringStory && (
        <StoryEntryAnimation 
            onComplete={handleStoryEntryComplete}
            language={language}
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
            setActiveTab={handleNavigationChange} 
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
                  onNavigate={handleHomeNavigate}
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
                  isLightTheme={isLightTheme}
                />
              )}
              {activeTab === 'sidestories' && (
                <SideStoriesPage 
                  language={language} 
                  isLightTheme={isLightTheme}
                />
              )}
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default App;