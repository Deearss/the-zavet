import { Harmattan, Alexandria } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { getBaseUrl } from "../lib/utils";

const harmattan = Harmattan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-harmattan",
});

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-alexandria",
});

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: "Zavetoria Yearbook - Laksana Kemenangan",
  description:
    "Website yearbook resmi kelas Zavetoria, 22 putra alumni MANPK Martapura. Kumpulan kenang-kenangan, sejarah, dan perjalanan keluarga tak sedarah yang bermakna 'Laksana Kemenangan'. Muhammadiyah, persaudaraan, dan masa depan gemilang.",
  keywords: [
    "Zavetoria",
    "yearbook",
    "MANPK Martapura",
    "Muhammadiyah",
    "alumni",
    "graduation",
    "kelas",
    "kenang-kenangan",
    "Laksana Kemenangan",
    "persaudaraan",
    "sekolah menengah",
    "islamic school",
  ],
  authors: [{ name: "Zavetoria Class" }],
  creator: "Zavetoria Alumni",
  publisher: "Zavetoria Yearbook Team",
  robots: "index, follow",
  openGraph: {
    title: "Zavetoria Yearbook - Laksana Kemenangan",
    description:
      "Jelajahi kenang-kenangan indah 22 putra Zavetoria alumni MANPK Martapura. Sebuah perjalanan persaudaraan yang bermakna 'Laksana Kemenangan' dalam tradisi Muhammadiyah.",
    url: getBaseUrl(),
    siteName: "Zavetoria Yearbook",
    images: [
      {
        url: "/images/ilustrasi.png",
        width: 1200,
        height: 630,
        alt: "Zavetoria Yearbook - Alumni MANPK Martapura",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zavetoria Yearbook - Laksana Kemenangan",
    description:
      "Kenang-kenangan 22 putra Zavetoria alumni MANPK Martapura. Persaudaraan dalam tradisi Muhammadiyah.",
    images: ["/images/ilustrasi.png"],
  },
  category: "education",
};

export const viewport = "width=device-width, initial-scale=1";

export function generateViewport() {
  return {
    themeColor: "#1F4E79",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`
          ${harmattan.className} ${harmattan.variable} ${alexandria.variable} 
          antialiased bg-light text-text_primary text-[5rem] font-harmattan
          overflow-hidden h-screen
        `}
      >
        <main className="!text-[1em] h-full overflow-auto">{children}</main>
      </body>
    </html>
  );
}
