// Form and validation type definitions
// ====================================

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Prayer/Doa submission form (protected feature)
export interface PrayerFormData {
  author: string;
  content: string;
  isPublic: boolean;
  token: string; // Authentication token
}

// Authentication types
export interface AuthToken {
  token: string;
  expiresAt: string;
  permissions: string[];
}

export interface AuthUser {
  id: string;
  name: string;
  permissions: string[];
  isAuthenticated: boolean;
}

// Form validation
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: unknown) => boolean | string;
}

export interface FormField<T = string> {
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "select" | "checkbox" | "radio";
  value: T;
  error?: string;
  validation?: ValidationRule;
  placeholder?: string;
  options?: Array<{ label: string; value: string | number }>;
}

export interface FormState<T = Record<string, unknown>> {
  values: T;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
}

// Filter form types
export interface FilterFormData {
  category?: string;
  search?: string;
  dateRange?: {
    start: string;
    end: string;
  };
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

// School information types
export interface SchoolInfo {
  name: string;
  type: string;
  location: string;
  className: string;
  meaning: string;
  graduationYear: number;
}

// Islamic content types
export interface IslamicQuote {
  arabic: string;
  translation: string;
  source: string;
}
