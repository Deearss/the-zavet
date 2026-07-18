// Categories for memories, achievements, and content
// =================================================

// Memory/achievement categories
export const CATEGORIES = {
  academic: {
    id: "academic",
    label: "Akademik",
    color: "primary",
    icon: "graduation-cap",
    description: "Prestasi dan kegiatan akademik",
  },
  social: {
    id: "social",
    label: "Sosial",
    color: "secondary",
    icon: "users",
    description: "Kegiatan sosial dan kemasyarakatan",
  },
  religious: {
    id: "religious",
    label: "Keagamaan",
    color: "primary",
    icon: "mosque",
    description: "Kegiatan keagamaan dan spiritual",
  },
  achievement: {
    id: "achievement",
    label: "Prestasi",
    color: "secondary",
    icon: "trophy",
    description: "Pencapaian dan penghargaan",
  },
  extracurricular: {
    id: "extracurricular",
    label: "Ekstrakurikuler",
    color: "primary",
    icon: "star",
    description: "Kegiatan di luar kurikulum",
  },
  sports: {
    id: "sports",
    label: "Olahraga",
    color: "secondary",
    icon: "futbol",
    description: "Kegiatan dan prestasi olahraga",
  },
  arts: {
    id: "arts",
    label: "Seni & Budaya",
    color: "primary",
    icon: "palette",
    description: "Kegiatan seni dan budaya",
  },
  leadership: {
    id: "leadership",
    label: "Kepemimpinan",
    color: "secondary",
    icon: "crown",
    description: "Peran kepemimpinan dan organisasi",
  },
} as const;

// Photo gallery categories
export const PHOTO_CATEGORIES = {
  class: {
    id: "class",
    label: "Foto Kelas",
    description: "Foto bersama dan kegiatan kelas",
  },
  activities: {
    id: "activities",
    label: "Kegiatan",
    description: "Dokumentasi berbagai kegiatan",
  },
  events: {
    id: "events",
    label: "Acara Khusus",
    description: "Perayaan dan acara penting",
  },
  graduation: {
    id: "graduation",
    label: "Kelulusan",
    description: "Momen wisuda dan kelulusan",
  },
  candid: {
    id: "candid",
    label: "Candid",
    description: "Momen spontan dan natural",
  },
  facilities: {
    id: "facilities",
    label: "Fasilitas",
    description: "Gedung dan fasilitas sekolah",
  },
} as const;

// Achievement levels
export const ACHIEVEMENT_LEVELS = {
  individual: {
    id: "individual",
    label: "Individu",
    description: "Prestasi perorangan",
    icon: "user",
  },
  class: {
    id: "class",
    label: "Kelas",
    description: "Prestasi tingkat kelas",
    icon: "users",
  },
  school: {
    id: "school",
    label: "Sekolah",
    description: "Prestasi tingkat sekolah",
    icon: "school",
  },
  regional: {
    id: "regional",
    label: "Regional",
    description: "Prestasi tingkat daerah",
    icon: "map-marker-alt",
  },
  national: {
    id: "national",
    label: "Nasional",
    description: "Prestasi tingkat nasional",
    icon: "flag",
  },
  international: {
    id: "international",
    label: "Internasional",
    description: "Prestasi tingkat internasional",
    icon: "globe",
  },
} as const;

// Content tags for search and filtering
export const CONTENT_TAGS = [
  "persahabatan",
  "prestasi",
  "pembelajaran",
  "olahraga",
  "seni",
  "keagamaan",
  "organisasi",
  "kompetisi",
  "wisuda",
  "farewell",
  "class-trip",
  "praktikum",
  "presentasi",
  "drama",
  "musik",
  "futsal",
  "basket",
  "debate",
  "karya-tulis",
  "penelitian",
] as const;
