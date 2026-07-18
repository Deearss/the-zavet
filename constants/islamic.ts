// Islamic content and spiritual constants
// =======================================

// Islamic phrases and quotes
export const ISLAMIC_CONTENT = {
  basmallah: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم",
  basmallahTranslation:
    "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang",

  closing: "وَبِاللَّهِ التَّوْفِيقُ",
  closingTranslation: "Dan kepada Allah lah kita meminta pertolongan",

  quotes: [
    {
      arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
      translation:
        "Dan barangsiapa yang bertakwa kepada Allah niscaya Dia akan mengadakan baginya jalan keluar",
      source: "QS. At-Talaq: 2",
    },
    {
      arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      translation: "Sesungguhnya sesudah kesulitan itu ada kemudahan",
      source: "QS. Al-Insyirah: 6",
    },
    {
      arabic: "وَاللَّهُ خَيْرٌ حَافِظًا ۖ وَهُوَ أَرْحَمُ الرَّاحِمِينَ",
      translation:
        "Dan Allah adalah sebaik-baik Pemelihara, dan Dia adalah Maha Penyayang di antara para penyayang",
      source: "QS. Yusuf: 64",
    },
    {
      arabic:
        "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
      translation:
        "Ya Tuhan kami, berikanlah kepada kami kebaikan di dunia dan kebaikan di akhirat dan peliharalah kami dari siksa neraka",
      source: "QS. Al-Baqarah: 201",
    },
    {
      arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
      translation:
        "Dan katakanlah: Ya Tuhanku, tambahkanlah kepadaku ilmu pengetahuan",
      source: "QS. Taha: 114",
    },
  ],
} as const;

// Prayer categories
export const PRAYER_CATEGORIES = {
  graduation: {
    id: "graduation",
    label: "Doa Kelulusan",
    description: "Doa untuk kesuksesan di masa depan",
  },
  friendship: {
    id: "friendship",
    label: "Doa Persahabatan",
    description: "Doa untuk menjaga ukhuwah",
  },
  success: {
    id: "success",
    label: "Doa Kesuksesan",
    description: "Doa untuk mencapai cita-cita",
  },
  guidance: {
    id: "guidance",
    label: "Doa Hidayah",
    description: "Doa untuk mendapat petunjuk",
  },
  gratitude: {
    id: "gratitude",
    label: "Doa Syukur",
    description: "Ungkapan rasa syukur",
  },
} as const;

// Islamic values (Muhammadiyah principles)
export const ISLAMIC_VALUES = [
  {
    title: "Tauhid",
    description: "Mengesakan Allah SWT dalam segala aspek kehidupan",
    icon: "star-and-crescent",
  },
  {
    title: "Amanah",
    description: "Menjalankan tanggung jawab dengan penuh kepercayaan",
    icon: "hand-holding-heart",
  },
  {
    title: "Tabligh",
    description: "Menyebarkan kebaikan dan ilmu kepada sesama",
    icon: "mosque",
  },
  {
    title: "Ukhuwah",
    description: "Menjaga persaudaraan dan kebersamaan",
    icon: "users",
  },
  {
    title: "Istiqomah",
    description: "Konsisten dalam kebaikan dan ketakwaan",
    icon: "balance-scale",
  },
] as const;

// Muhammadiyah organizational values
export const MUHAMMADIYAH_PRINCIPLES = {
  motto: "Hidup-Hidupilah Muhammadiyah",
  vision: "Terwujudnya masyarakat Islam yang sebenar-benarnya",
  mission: "Menegakkan dan menjunjung tinggi agama Islam",
  founder: "K.H. Ahmad Dahlan",
  founded: "1912",
  characteristics: [
    "Gerakan Islam",
    "Dakwah Amar Ma'ruf Nahi Munkar",
    "Tajdid (Pembaruan)",
    "Berkemajuan",
  ],
} as const;
