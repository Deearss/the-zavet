// Basic animation variants - Essential only
// =========================================

import { Variants } from "framer-motion";

// Basic fade animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeOut: Variants = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};
