import { Alexandria } from "next/font/google";
import Link from "next/link";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-heading",
});

export default function NotFound() {
  return (
    <div
      className={`
        ${alexandria.variable}
        min-h-screen
        bg-main
        flex flex-col items-center justify-center
        p-4 md:p-6 lg:p-8
        text-center
      `}
    >
      {/* Decorative Islamic Pattern */}
      <div className="mb-8 text-tertiary opacity-20">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="animate-pulse"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="50"
            cy="50"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Error Content */}
      <h1
        className={`
          font-[family-name:var(--font-heading)]
          text-4xl md:text-6xl lg:text-7xl
          font-bold
          text-text_primary
          mb-4
        `}
      >
        404
      </h1>

      <h2
        className={`
          font-[family-name:var(--font-heading)]
          text-xl md:text-2xl lg:text-3xl
          font-semibold
          text-text_secondary
          mb-6
        `}
      >
        Halaman Tidak Ditemukan
      </h2>

      <p
        className={`
          text-base md:text-lg
          text-text_muted
          max-w-md
          mb-8
          leading-relaxed
        `}
      >
        Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman
        telah dipindahkan atau tidak tersedia.
      </p>

      {/* Back to Home Button */}
      <Link
        href="/"
        className={`
          inline-flex items-center
          px-6 py-3
          bg-primary hover:bg-primary_dark
          text-text_light
          font-semibold
          rounded-lg
          transition-all duration-300
          transform hover:scale-105
          shadow-soft hover:shadow-lg
        `}
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Kembali ke Beranda
      </Link>

      {/* Decorative Bottom Element */}
      <div className="mt-12 text-tertiary opacity-10">
        <svg width="60" height="20" viewBox="0 0 60 20">
          <circle cx="10" cy="10" r="2" fill="currentColor" />
          <circle cx="30" cy="10" r="2" fill="currentColor" />
          <circle cx="50" cy="10" r="2" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
