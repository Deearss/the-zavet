// UI Component type definitions
// ==============================

// Base component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AnimatedComponentProps extends BaseComponentProps {
  animate?: boolean;
  delay?: number;
  duration?: number;
}

// Navigation types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

// Modal types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  closeOnOverlay?: boolean;
}

// Button variants
export interface ButtonProps extends BaseComponentProps {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  loading?: boolean;
  onClick?: ClickHandler;
  type?: "button" | "submit" | "reset";
}

// Card variants
export interface CardProps extends BaseComponentProps {
  variant?: "default" | "elevated" | "outlined" | "interactive";
  padding?: "none" | "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  hover?: boolean;
}

// Typography variants
export interface TypographyProps extends BaseComponentProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "caption"
    | "quote";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  color?: "primary" | "secondary" | "muted" | "light" | "dark";
  align?: "left" | "center" | "right" | "justify";
  as?: React.ElementType;
}

// Generic component prop types
export interface VariantComponentProps<T extends string> {
  variant?: T;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  loading?: boolean;
}

// Responsive types
export type Breakpoint = "mobile" | "tablet" | "desktop" | "wide";

export interface ResponsiveValue<T> {
  mobile?: T;
  tablet?: T;
  desktop?: T;
  wide?: T;
}

// Loading states
export type LoadingState = "idle" | "loading" | "success" | "error";

export interface DataState<T> {
  data: T | null;
  loading: LoadingState;
  error: string | null;
}

// Theme/Design system types
export interface ColorPalette {
  primary: string;
  secondary: string;
  text: {
    primary: string;
    secondary: string;
    muted: string;
    light: string;
  };
  background: {
    main: string;
    light: string;
    dark: string;
  };
}

// Event handler types
export type ClickHandler = (event: React.MouseEvent<HTMLElement>) => void;
export type ChangeHandler = (
  event: React.ChangeEvent<HTMLInputElement>
) => void;
export type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void;

// Utility types
export type WithRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type WithOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
