"use client";

import { motion, AnimatePresence } from "framer-motion";
import { members } from "../../../data/members";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function MemoriesSection() {
  return (
    <section
      className={`
        min-h-screen
        bg-white
        py-16 md:py-24 lg:py-32 xl:py-24
        px-4 md:px-8 lg:px-12 xl:px-8
      `}
    >
      <div
        className={`
          max-w-6xl 
          mx-auto
        `}
      >
        {/* Header Section */}
        <motion.div
          className={`
            text-center
            mb-12 md:mb-16 lg:mb-20 xl:mb-16
          `}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`
              text-3xl md:text-5xl lg:text-7xl xl:text-6xl
              font-[family-name:var(--font-heading)]
              font-bold
              text-text_primary
              mb-4 md:mb-6 lg:mb-8 xl:mb-6
            `}
          >
            Kenang-kenangan
          </h2>
          <p
            className={`
              text-base md:text-lg lg:text-2xl xl:text-xl
              font-[family-name:var(--font-body)]
              text-text_primary
              opacity-80
              mb-2 md:mb-3 lg:mb-4 xl:mb-3
            `}
          >
            Momen Berharga Zavetoria Boys
          </p>
          <div
            className={`
              w-24 h-1 md:w-32 md:h-1 lg:w-40 lg:h-2 xl:w-32 xl:h-1
              bg-gradient-to-r
              from-primary
              via-tertiary
              to-primary
              mx-auto
              rounded-full
            `}
          />
        </motion.div>

        {/* Timeline */}
        <div
          className={`
            relative
            max-w-4xl
            mx-auto
          `}
        >
          {/* Timeline Line */}
          <div
            className={`
              absolute
              left-4 md:left-6 lg:left-8 xl:left-6
              top-0
              bottom-0
              w-0.5 md:w-1 lg:w-1 xl:w-1
              bg-gradient-to-b
              from-primary
              via-tertiary
              to-primary
            `}
          />

          {/* Timeline Items */}
          <AnimatePresence>
            <div className="space-y-8 md:space-y-12 lg:space-y-16 xl:space-y-12">
              {members.slice(0, 8).map((member, index) => (
                <motion.div
                  key={member.id}
                  className={`
                    relative
                    pl-12 md:pl-16 lg:pl-20 xl:pl-16
                  `}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`
                      absolute
                      left-0 md:left-2 lg:left-4 xl:left-2
                      top-6 md:top-8 lg:top-10 xl:top-8
                      w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-10 xl:h-10
                      bg-white
                      rounded-full
                      border-2 md:border-3 lg:border-4 xl:border-3
                      border-primary
                      flex
                      items-center
                      justify-center
                      shadow-lg
                    `}
                  >
                    <div
                      className={`
                        w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-6 xl:h-6
                        rounded-full
                        overflow-hidden
                      `}
                    >
                      <DotLottieReact
                        src="https://lottie.host/0dd9aa43-943b-43d2-8247-b6bcfab73ed2/lcIfotseiW.lottie"
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>

                  {/* Memory Card */}
                  <motion.div
                    className={`
                      bg-white
                      rounded-xl
                      shadow-lg
                      border border-border_soft
                      p-6 md:p-8 lg:p-10 xl:p-8
                      hover:shadow-xl
                    `}
                    whileHover={{ y: -3 }}
                  >
                    {/* Member Name */}
                    <h3
                      className={`
                        text-lg md:text-xl lg:text-2xl xl:text-xl
                        font-[family-name:var(--font-heading)]
                        font-bold
                        text-primary
                        mb-3 md:mb-4 lg:mb-5 xl:mb-4
                      `}
                    >
                      {member.name}
                    </h3>

                    {/* Memory Text */}
                    <p
                      className={`
                        text-base md:text-lg lg:text-xl xl:text-lg
                        font-[family-name:var(--font-body)]
                        text-text_primary
                        opacity-80
                        leading-relaxed
                        italic
                      `}
                    >
                      &ldquo;{member.favoriteMemory}&rdquo;
                    </p>

                    {/* Aspiration Tag */}
                    <div
                      className={`
                        mt-4 md:mt-5 lg:mt-6 xl:mt-5
                        inline-flex
                        px-3 py-1 md:px-4 md:py-2 lg:px-5 lg:py-2 xl:px-4 xl:py-2
                        bg-tertiary_light
                        text-primary
                        text-sm md:text-base lg:text-lg xl:text-base
                        font-[family-name:var(--font-body)]
                        font-medium
                        rounded-full
                      `}
                    >
                      {member.aspiration}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {/* Footer Message */}
          <motion.div
            className={`
              text-center
              mt-16 md:mt-20 lg:mt-24 xl:mt-20
              p-6 md:p-8 lg:p-10 xl:p-8
              bg-gradient-to-r
              from-primary_light
              to-tertiary_light
              rounded-xl
              border border-border_soft
            `}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h4
              className={`
                text-lg md:text-xl lg:text-2xl xl:text-xl
                font-[family-name:var(--font-heading)]
                font-bold
                text-text_primary
                mb-3 md:mb-4 lg:mb-5 xl:mb-4
              `}
            >
              Setiap Momen, Setiap Kenangan
            </h4>
            <p
              className={`
                text-sm md:text-base lg:text-lg xl:text-base
                font-[family-name:var(--font-body)]
                text-text_primary
                opacity-70
              `}
            >
              Perjalanan indah 22 putra Zavetoria yang tak akan terlupakan
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
