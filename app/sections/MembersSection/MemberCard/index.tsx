"use client";

import { motion } from "framer-motion";
import { Member } from "@/types";
import Avatar from "./Avatar";
import Content from "./Content";

interface MemberCardProps {
  member: Member;
  index?: number;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <motion.div
      className={`
        bg-white
        rounded-xl
        shadow-lg
        overflow-hidden
        border border-border_soft/30
        hover:shadow-xl
        cursor-pointer
      `}
      // Framer Motion properties siap untuk animasi future
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      whileHover={{ y: -5, scale: 1.05 }}
    >
      {/* Avatar Section dengan Lottie Animation */}
      <Avatar />

      {/* Content Section */}
      <Content member={member} />

      {/* Decorative Bottom Border */}
      <div
        className={`
          h-1
          scale-y-0
          bg-primary
          group-hover:scale-y-[5]
          transition-all
          duration-300
        `}
      />
    </motion.div>
  );
}
