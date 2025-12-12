"use client";

import { motion, AnimatePresence } from "framer-motion";
import { members } from "../../../data/members";
import MemberCard from "./MemberCard";

export default function MembersSection() {
  return (
    <section
      className={`
        min-h-screen
        bg-white
        py-16 md:py-24
        px-8
      `}
    >
      <div
        className={`
          max-w-7xl 
          mx-auto
        `}
      >
        {/* Header Section */}
        <motion.div
          className={`
            text-center
            mb-12 md:mb-16
          `}
        >
          <h2
            className={`
              text-3xl md:text-5xl lg:text-6xl
              font-[family-name:var(--font-heading)]
              font-bold
              text-text_primary
              mb-4
            `}
          >
            Zavetoria Boys
          </h2>
          <p
            className={`
              text-base md:text-lg
              font-[family-name:var(--font-body)]
              text-text_primary
              opacity-80
              mb-2
            `}
          >
            22 Putra Alumni MANPK Martapura
          </p>
          <div
            className={`
              w-24
              h-1
              bg-primary
              mx-auto
              rounded-full
            `}
          />
        </motion.div>

        {/* Members Grid */}
        <AnimatePresence>
          <div
            className={`
              grid 
              grid-cols-1 
              md:grid-cols-2 
              xl:grid-cols-4
              gap-6 md:gap-6
              items-center
              lg:px-20 xl:px-0
            `}
          >
            {members.map((member, index) => (
              <MemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </AnimatePresence>

        {/* Footer Info */}
        <motion.div
          className={`
            text-center
            mt-12 md:mt-16
          `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p
            className={`
              text-sm md:text-base
              font-[family-name:var(--font-body)]
              text-text_primary
              opacity-60
            `}
          >
            Keluarga tak sedarah yang telah berpencar menempuh pendidikan
            masing-masing
          </p>
        </motion.div>
      </div>
    </section>
  );
}
