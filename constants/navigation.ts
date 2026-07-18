// Navigation and section constants
// ================================

// Section identifiers
export const SECTIONS = {
  hero: "hero",
  about: "about",
  vision: "vision",
  members: "members",
  memories: "memories",
  achievements: "achievements",
  gallery: "gallery",
  messages: "messages",
  prayers: "prayers", // New protected section
  contact: "contact",
  footer: "footer",
} as const;

// Navigation menu items
export const NAVIGATION_ITEMS = [
  { id: SECTIONS.hero, label: "Beranda", href: `#${SECTIONS.hero}` },
  { id: SECTIONS.about, label: "Tentang", href: `#${SECTIONS.about}` },
  { id: SECTIONS.members, label: "Anggota", href: `#${SECTIONS.members}` },
  { id: SECTIONS.memories, label: "Kenangan", href: `#${SECTIONS.memories}` },
  {
    id: SECTIONS.achievements,
    label: "Prestasi",
    href: `#${SECTIONS.achievements}`,
  },
  { id: SECTIONS.gallery, label: "Galeri", href: `#${SECTIONS.gallery}` },
  {
    id: SECTIONS.prayers,
    label: "Doa & Harapan",
    href: `#${SECTIONS.prayers}`,
  },
  { id: SECTIONS.contact, label: "Kontak", href: `#${SECTIONS.contact}` },
] as const;

// Social media platforms
export const SOCIAL_PLATFORMS = {
  instagram: "Instagram",
  twitter: "Twitter",
  facebook: "Facebook",
  youtube: "YouTube",
  tiktok: "TikTok",
  whatsapp: "WhatsApp",
} as const;

// Admin navigation (protected)
export const ADMIN_NAVIGATION = [
  { id: "dashboard", label: "Dashboard", href: "/admin/dashboard" },
  { id: "prayers", label: "Kelola Doa", href: "/admin/prayers" },
  { id: "tokens", label: "Kelola Token", href: "/admin/tokens" },
  { id: "settings", label: "Pengaturan", href: "/admin/settings" },
] as const;

// Scroll behavior
export const SCROLL_CONFIG = {
  behavior: "smooth" as const,
  offset: 80, // Header height offset
  duration: 800,
} as const;
