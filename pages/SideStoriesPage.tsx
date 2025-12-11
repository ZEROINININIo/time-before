import React, { useState } from 'react';
import { sideStoryVolumes } from '../data/sideStories';
import { Language, SideStoryVolume } from '../types';
import SideStoryVolumeList from '../components/sidestory/SideStoryVolumeList';
import SideStoryChapterList from '../components/sidestory/SideStoryChapterList';
import SideStoryReader from '../components/sidestory/SideStoryReader';
import SideCharacterModal from '../components/sidestory/SideCharacterModal';
import SideStoryEntryAnimation from '../components/SideStoryEntryAnimation';

interface SideStoriesPageProps {
  language: Language;
  isLightTheme: boolean;
}

const SideStoriesPage: React.FC<SideStoriesPageProps> = ({ language, isLightTheme }) => {
  // Navigation State: 'volumes' -> 'chapters' -> 'reader'
  const [viewMode, setViewMode] = useState<'volumes' | 'chapters' | 'reader'>('volumes');
  const [activeVolume, setActiveVolume] = useState<SideStoryVolume | null>(null);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [showCharModal, setShowCharModal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Trigger animation when entering a folder (Volume)
  const handleVolumeSelect = (vol: SideStoryVolume) => {
    setActiveVolume(vol);
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    setViewMode('chapters');
  };

  const handleChapterSelect = (index: number) => {
    setCurrentChapterIndex(index);
    setViewMode('reader');
  };

  // Render Animation if active
  if (isAnimating) {
    return (
        <SideStoryEntryAnimation 
            onComplete={handleAnimationComplete}
            language={language}
        />
    );
  }

  // --- View 1: Volume Index (Directory) ---
  if (viewMode === 'volumes') {
    return (
        <>
            <SideStoryVolumeList 
                volumes={sideStoryVolumes}
                onSelectVolume={handleVolumeSelect}
                onOpenCharModal={() => setShowCharModal(true)}
                language={language}
                isLightTheme={isLightTheme}
            />
            <SideCharacterModal 
                isOpen={showCharModal}
                onClose={() => setShowCharModal(false)}
                language={language}
                isLightTheme={isLightTheme}
            />
        </>
    );
  }

  // --- View 2: Chapter List (File Browser) ---
  if (viewMode === 'chapters' && activeVolume) {
      return (
        <SideStoryChapterList 
            volume={activeVolume}
            onBack={() => {
                setActiveVolume(null);
                setViewMode('volumes');
            }}
            onSelectChapter={handleChapterSelect}
            language={language}
            isLightTheme={isLightTheme}
        />
      );
  }

  // --- View 3: Reader ---
  if (viewMode === 'reader' && activeVolume) {
      return (
        <SideStoryReader 
            volume={activeVolume}
            initialChapterIndex={currentChapterIndex}
            onBack={() => setViewMode('chapters')}
            language={language}
            isLightTheme={isLightTheme}
        />
      );
  }

  return null;
};

export default SideStoriesPage;