// Animation-related type definitions
// ==================================

// Animation types
export interface AnimationVariant {
  hidden: object;
  visible: object;
}

export interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
  easing?: string;
}

// Hook return types
export interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement>;
  isInView: boolean;
  controls: object; // Framer Motion controls
}

export interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLElement>;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
}

export interface UseParallaxReturn {
  ref: React.RefObject<HTMLElement>;
  transform: string;
}

// Animation configuration
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  stagger?: number;
  repeat?: number | boolean;
}

// Transition types
export interface TransitionConfig {
  type?: "spring" | "tween" | "keyframes";
  duration?: number;
  delay?: number;
  ease?: string | number[];
  stiffness?: number;
  damping?: number;
  mass?: number;
}

// Gesture animation types
export interface GestureAnimationProps {
  whileHover?: object;
  whileTap?: object;
  whileFocus?: object;
  whileDrag?: object;
}

// Islamic animation presets
export interface IslamicAnimationPreset {
  name: string;
  variant: AnimationVariant;
  config: AnimationConfig;
  description: string;
}
