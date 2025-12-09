
import { SideStoryVolume, Chapter } from '../types';
import { chapterS001 } from './side_story_files/S001';

// Helper to create garbled chapters
const createGarbledChapter = (id: string, dateLabel: string): Chapter => ({
  id: id,
  date: dateLabel,
  status: 'locked',
  translations: {
    'zh-CN': { title: "▞▞▞▞▞▞", content: "", summary: "FILE_CORRUPTED" },
    'zh-TW': { title: "▞▞▞▞▞▞", content: "", summary: "FILE_CORRUPTED" },
    'en': { title: "▞▞▞▞▞▞", content: "", summary: "FILE_CORRUPTED" }
  }
});

export const sideStoryVolumes: SideStoryVolume[] = [
  {
    id: "VOL_DAILY",
    title: "时域日常", 
    titleEn: "Time Line Daily",
    status: 'unlocked',
    chapters: [
        // Chapter 1: The Coffee Machine (Previously A003)
        chapterS001,
        // Garbled Chapters
        createGarbledChapter("ERR_002", "档案记录: X-002"),
        createGarbledChapter("ERR_003", "档案记录: X-003"),
        createGarbledChapter("ERR_004", "档案记录: X-004"),
    ]
  },
  {
    id: "VOL_MEMORIES",
    title: "破碎雨滴",
    titleEn: "Fragmented Rain",
    status: 'locked',
    chapters: []
  },
  {
    id: "VOL_UNKNOWN",
    title: "▓▓▓▓▓▓",
    titleEn: "UNKNOWN_SECTOR",
    status: 'corrupted',
    chapters: []
  }
];
