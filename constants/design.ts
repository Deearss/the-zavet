// Design system and UI constants
// ==============================

// Design system constants
export const DESIGN_TOKENS = {
  // Responsive breakpoints (matching Tailwind)
  breakpoints: {
    mobile: 320,
    tablet: 768,
    desktop: 1024,
    wide: 1280,
    ultra: 1536,
  },

  // Animation durations
  animation: {
    fast: 200,
    normal: 300,
    slow: 500,
    slower: 800,
  },

  // Z-index layers
  zIndex: {
    dropdown: 1000,
    modal: 1010,
    popover: 1020,
    tooltip: 1030,
    notification: 1040,
  },

  // Common spacing values
  spacing: {
    section: "6rem", // 96px
    sectionMobile: "4rem", // 64px
    container: "2rem", // 32px
    card: "1.5rem", // 24px
  },

  // Border radius values
  radius: {
    sm: "0.375rem", // 6px
    md: "0.5rem", // 8px
    lg: "0.75rem", // 12px
    xl: "1rem", // 16px
  },
} as const;

// Image aspect ratios
export const ASPECT_RATIOS = {
  square: "1:1",
  portrait: "3:4",
  landscape: "4:3",
  wide: "16:9",
  ultraWide: "21:9",
} as const;

// Loading states
export const LOADING_STATES = {
  idle: "idle",
  loading: "loading",
  success: "success",
  error: "error",
} as const;

// Common error messages
export const ERROR_MESSAGES = {
  imageLoadFailed: "Gagal memuat gambar",
  networkError: "Terjadi kesalahan jaringan",
  unknownError: "Terjadi kesalahan yang tidak diketahui",
  authRequired: "Akses ditolak - Token diperlukan",
  invalidToken: "Token tidak valid",
  expiredToken: "Token telah kedaluwarsa",
} as const;

// UI text constants
export const UI_TEXT = {
  loading: "Memuat...",
  loadMore: "Muat Lebih Banyak",
  viewMore: "Lihat Selengkapnya",
  viewLess: "Lihat Lebih Sedikit",
  backToTop: "Kembali ke Atas",
  close: "Tutup",
  submit: "Kirim",
  cancel: "Batal",
  save: "Simpan",
  edit: "Edit",
  delete: "Hapus",
  confirm: "Konfirmasi",
} as const;
