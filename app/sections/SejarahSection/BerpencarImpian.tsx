"use client";

import { motion } from "framer-motion";

interface BerpencarImpianProps {
  className?: string;
}

export default function BerpencarImpian({
  className = "",
}: BerpencarImpianProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`
        min-h-screen w-full
        bg-white
        flex items-center justify-center
        py-24 md:py-32 lg:py-40
        px-4 md:px-8 lg:px-12
        ${className}
      `}
    >
      <div
        className={`
          w-full max-w-6xl
          text-center
          space-y-8 md:space-y-12 lg:space-y-16
        `}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`
            space-y-4 md:space-y-6
          `}
        >
          <h2
            className={`
              text-4xl md:text-6xl lg:text-7xl xl:text-6xl
              font-[family-name:var(--font-heading)]
              font-bold
              text-[var(--color-text-primary)]
              leading-tight
            `}
          >
            Berpencar Mengejar Impian
          </h2>
          <div
            className={`
              w-24 md:w-32 lg:w-40 xl:w-32
              h-2 md:h-3 lg:h-4 xl:h-3
              bg-[var(--color-secondary)]
              mx-auto
              rounded-full
            `}
          />
        </motion.div>

        <p>
          sekarang sudah berpencar menempuh pendidikan masing-masing demi
          mencapai impian.
        </p>
      </div>
    </motion.section>
  );
}
