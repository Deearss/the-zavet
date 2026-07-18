// Memory and timeline type definitions
// ====================================

// Memory/Timeline types
export interface Memory {
  id: string;
  title: string;
  description: string;
  date: string;
  photos: string[];
  category: MemoryCategory;
  participants?: string[]; // member IDs
  location?: string;
  tags?: string[];
}

export type MemoryCategory =
  | "academic"
  | "social"
  | "religious"
  | "achievement"
  | "extracurricular";

// Achievement types
export interface Achievement {
  id: string;
  title: string;
  description: string;
  type: AchievementType;
  recipients: string[]; // member IDs
  date: string;
  icon: string;
  certificate?: string;
  photos?: string[];
}

export type AchievementType =
  | "individual"
  | "class"
  | "school"
  | "regional"
  | "national";

// Message/Quote types
export interface Message {
  id: string;
  author: string;
  role: string; // "Wali Kelas", "Guru", "Orang Tua", etc.
  content: string;
  photo?: string;
  signature?: string;
  date?: string;
}

// Prayer/Doa types (updated for front-end collection)
export interface PrayerCollection {
  id: string;
  title: string;
  description: string; // Combined Arabic + translation
  category: PrayerCategory;
  contributor: string; // Default: "Orang Baik"
  createdAt: string;
  featured?: boolean;
}

export type PrayerCategory =
  | "friendship" // Doa persahabatan, ikatan Zavetoria
  | "success" // Doa kesuksesan, masa depan gemilang
  | "reunion" // Doa pertemuan, reuni alumni
  | "blessing" // Doa umum, berkah untuk semua
  | "guidance"; // Doa petunjuk, arahan hidup

// Legacy Prayer interface (for reference)
export interface Prayer {
  id: string;
  author: string;
  content: string;
  isPublic: boolean;
  date: string;
  approved: boolean;
}

// Photo/Gallery types
export interface Photo {
  id: string;
  url: string;
  title?: string;
  description?: string;
  date?: string;
  category?: PhotoCategory;
  tags?: string[];
  photographer?: string;
  width?: number;
  height?: number;
}

export type PhotoCategory =
  | "class"
  | "activities"
  | "events"
  | "graduation"
  | "candid";

// Timeline configuration
export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "memory" | "achievement" | "milestone";
  featured?: boolean;
}

// Filter types for memories
export interface MemoryFilter {
  category?: MemoryCategory | "all";
  search?: string;
  dateRange?: {
    start: string;
    end: string;
  };
  participants?: string[];
  tags?: string[];
}
