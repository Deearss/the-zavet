// Member-related type definitions
// ================================

// Student/Member types
export interface Member {
  id: string;
  name: string;
  nickname?: string;
  photo: string;
  quote?: string;
  aspiration: string;
  achievements?: string[];
  favoriteMemory?: string;
  socialMedia?: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
  profileColor?: string;
}

// Social media platforms
export type SocialPlatform =
  | "instagram"
  | "twitter"
  | "facebook"
  | "youtube"
  | "tiktok"
  | "whatsapp";

// Member filter and search
export interface MemberFilter {
  search?: string;
  achievement?: string;
  aspiration?: string;
  hasQuote?: boolean;
  hasSocialMedia?: boolean;
}

// Member statistics
export interface MemberStats {
  totalMembers: number;
  withAchievements: number;
  withQuotes: number;
  withSocialMedia: number;
  popularAspirations: Array<{
    aspiration: string;
    count: number;
  }>;
}
