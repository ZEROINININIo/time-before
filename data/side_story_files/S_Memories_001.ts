
import { Chapter } from '../../types';

export const chapterSMemories001: Chapter = {
  id: "memory-fragment-init",
  date: "档案记录: M-001",
  status: 'published',
  translations: {
    'zh-CN': {
      title: "待写入扇区",
      summary: "检测到新的记忆槽位，等待数据同步。",
      content: `[[DIVIDER]]

> 正在扫描记忆扇区 [VOL_MEMORIES]...
> 发现可用空间。

该区域目前为空。
破碎的雨滴尚未汇聚成河。

[AWAITING_DATA_STREAM]`
    },
    'zh-TW': {
      title: "待寫入扇區",
      summary: "檢測到新的記憶槽位，等待數據同步。",
      content: `[[DIVIDER]]

> 正在掃描記憶扇區 [VOL_MEMORIES]...
> 發現可用空間。

該區域目前為空。
破碎的雨滴尚未匯聚成河。

[AWAITING_DATA_STREAM]`
    },
    'en': {
      title: "Allocated Sector",
      summary: "New memory slot detected. Waiting for sync.",
      content: `[[DIVIDER]]

> Scanning memory sector [VOL_MEMORIES]...
> Available space found.

This area is currently empty.
The fragmented raindrops have not yet gathered into a river.

[AWAITING_DATA_STREAM]`
    }
  }
};
