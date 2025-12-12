"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MaknaAsliProps {
  className?: string;
}

export default function MaknaAsli({ className = "" }: MaknaAsliProps) {
  return (
    <section
      className={`
        h-full w-full
        overflow-hidden
        bg-white
        ${className}
      `}
    >
      <div
        className={`
        flexc
        w-full h-full relative
        `}
      >
        {/* animation */}
        <motion.div
          initial={{
            opacity: 1,
            // y: 0,
            top: "0%",
            width: "2.5rem",
            height: "1.5rem",
            borderRadius: "100%",
          }}
          whileInView={{
            opacity: 1,
            // y: [-1000, -100, 500, 0],
            top: ["0%", "55%", "140%", "150%"],
            width: ["2.5rem", "1rem", "250rem", "250rem"],
            height: ["1.5rem", "3rem", "250rem", "250rem"],
            borderRadius: ["100%", "90%", "80%", "0%"],
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2, ease: "easeIn" }}
          className={`atranscenter origin-center overflow-hidden z-1`}
        >
          <div
            className={`
                bg-primary_dark w-full h-full
            `}
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeIn",
            delay: 1.5 - 0.8 + 0.4,
          }}
          viewport={{ once: true, amount: 0.5 }}
          style={{ backgroundImage: "url(images/turkey-flag.webp)" }}
          className={`
          atranscenter z-[2]
          w-full h-full
          text-white
          flexc !justify-start 
          origin-left
          `}
        >
          <div className="atranscenter w-full h-full bg-gradient-to-r from-primary_dark/85 to-black/100 z-[2]" />
          <video
            src="/videos/turkey-flag.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover relative z-[1]"
          />

          {/* <Image
            src="/images/turkey-flag.webp"
            alt="Turkey Flag"
            width={2560}
            height={1707}
            className="w-full h-full object-cover relative z-[1]"
          /> */}
        </motion.div>

        <div
          className={`
          w-full max-w-6xl
          text-center
          space-y-3 md:space-y-10 lg:space-y-6
          relative z-[2]
        `}
        >
          {/* header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 0.25, 0.5, 1] }}
            transition={{
              duration: 0.8,
              ease: "easeIn",
              delay: 1.5 - 0.8 + 0.2,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className={`
            space-y-4 md:space-y-6
          `}
          >
            <h2
              className={`
              text-4xl md:text-6xl lg:text-7xl xl:text-6xl
              text-center xl:text-right
              font-[family-name:var(--font-heading)]
              font-bold
              text-white
              leading-tight
            `}
            >
              Makna Asli
            </h2>
          </motion.div>

          {/* teks */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 0.25, 0.5, 1] }}
            transition={{
              duration: 0.8,
              ease: "easeIn",
              delay: 1.5 - 0.8 + 0.4,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className={`
            px-7 flexc xl:p-0 xl:pl-64
          `}
          >
            <div
              className={`
              flexc
              text-xl md:text-2xl lg:text-4xl xl:text-4xl
              font-[family-name:var(--font-body)]
              text-white
              leading-relaxed md:leading-relaxed lg:leading-relaxed
              space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-8
            `}
            >
              <p className="text-center xl:text-right">
                {" "}
                Zavetoria, sebuah singkatan yang kemudian memiliki makna asli
                antara zaverin dan victoria, berasal dari bahasa turki, yang
                maknanya selaras dengan ambisi kami yaitu{" "}
                <span className="text-red-500 font-bold">
                  &ldquo;Laksana Kemenangan&rdquo;.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
