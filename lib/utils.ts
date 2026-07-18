/**
 * Utility functions for Zavetoria Yearbook
 * =======================================
 */

/**
 * Get the base URL for the application
 * Returns localhost for development, production URL for deployment
 */
export function getBaseUrl(): string {
  // Check if we're in browser environment
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  // Server-side: use environment variables
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }

  // Fallback for custom Vercel deployment URL
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return process.env.NEXT_PUBLIC_VERCEL_URL;
  }

  // Final fallback for development
  return "http://localhost:3000";
}

/**
 * Get the full URL for a path
 * @param path - The path to append to base URL
 */
export function getFullUrl(path: string = ""): string {
  const baseUrl = getBaseUrl();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

/**
 * Check if we're in development environment
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development";
}

/**
 * Check if we're in production environment
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}
