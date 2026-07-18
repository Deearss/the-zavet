// School and student data constants
// =================================

// Student data
export const STUDENT_NAMES = [
  "Faisal",
  "Jaya",
  "Nabiel",
  "Fateya",
  "Suta",
  "Adha",
  "Akbar",
  "Juna",
  "Zhohiri",
  "Azmi",
  "Faqih",
  "Fatih",
  "Daus",
  "Nabil",
  "Salim",
  "Rizky",
  "Rafly",
  "Dzaky",
  "Duan",
  "Rifqi",
  "Raghib",
  "Roihan",
] as const;

export const TOTAL_STUDENTS = 22;

// School information
export const SCHOOL_INFO = {
  name: "MANPK Martapura",
  type: "Muhammadiyah",
  location: "Martapura",
  className: "Zavetoria",
  meaning: "Laksana Kemenangan",
  graduationYear: 2024, // Adjust as needed
} as const;

// Academic information
export const ACADEMIC_INFO = {
  level: "Sekolah Menengah",
  curriculum: "Kurikulum Muhammadiyah",
  language: "Bahasa Indonesia",
  religion: "Islam",
  accreditation: "A",
} as const;

// Class statistics
export const CLASS_STATS = {
  totalStudents: TOTAL_STUDENTS,
  maleStudents: 22,
  femaleStudents: 0,
  averageAge: 18,
  graduationRate: 100,
} as const;
