<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Zavetoria Yearbook Project - Copilot Instructions

## Project Overview

Website yearbook untuk kelas Zavetoria (22 boys, alumni MANPK Martapura - sekolah Muhammadiyah). Website ini adalah **full frontend** tanpa backend sama sekali, bersifat semi-private untuk kenang-kenangan klien.

**🚨 MAJOR UPDATE - SINGLE PAGE APPLICATION:**

- Website sekarang adalah **Single Page Application (SPA)**
- Tidak ada halaman terpisah (members page dihapus)
- Semua konten akan berada dalam satu halaman utama
- Layout dibersihkan dari navbar dan footer

## Technical Stack & Architecture

- **Framework**: Next.js dengan App Router
- **Styling**: Tailwind CSS (Tailwind v4) dengan CSS Variables
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Icons**: Font Awesome (allowed)
- **Project Structure**: No /src directory, no import alias
- **Fonts**: ~~Oswald (headings)~~, ~~Montserrat (body text)~~ → **Alexandria (headings) + Harmattan (body text)**

## Design System & Theme - **UPDATED COLOR PALETTE**

**🎨 New Color System (defined in globals.css):**

- **Primary Colors**:
  - `--color-primary`: #3A7CA5 (biru utama)
  - `--color-primary-light`: #A3CBE3 (biru terang)
  - `--color-primary-dark`: #1F4E79 (biru gelap)
- **Secondary Colors**:
  - `--color-secondary`: #F4D06F (kuning emas)
  - `--color-secondary-light`: #FBE8A6 (kuning terang)
  - `--color-secondary-dark`: #C9A63D (kuning gelap)
- **Text Colors**:
  - `--color-text-primary`: #1F4E79 (teks utama)
  - `--color-text-secondary`: #3A7CA5 (teks sekunder)
  - `--color-text-light`: #FFFFFF (teks putih)
  - `--color-text-muted`: #6C7A89 (teks abu-abu)
- **Background Colors**:
  - `--color-bg-main`: #DCEEFF (background utama - biru sangat terang)
  - `--color-bg-light`: #F5F9FC (background terang)
  - `--color-bg-dark`: #1F4E79 (background gelap)
- **Interactive & Effects**:
  - `--gradient-islami`: linear-gradient(135deg, #DCEEFF, #A3CBE3)
  - `--shadow-soft`: 0 4px 12px rgba(58, 124, 165, 0.1)

**🚫 DEPRECATED COLORS (don't use anymore):**

- ~~#002e42 (old dark blue)~~
- ~~#5aceff (old bright blue)~~

## Layout & Typography

- **Body Font Size**: 5rem (kept for specific design purpose)
- **Fonts**:
  - **Alexandria**: Headings (weights: 300-900) - `font-[family-name:var(--font-heading)]`
  - **Harmattan**: Body text (weights: 400-700) - `font-[family-name:var(--font-body)]`
- **Layout**: Mobile-first responsive design
- **Language**: Indonesian (lang="id")

## SEO & Metadata - **COMPREHENSIVE METADATA ADDED**

✅ **Complete metadata implementation:**

- Title, description, keywords
- OpenGraph tags for social sharing
- Twitter Card support
- Proper viewport and theme-color
- Authors, creator, publisher info
- Robot instructions
- Category classification

## Component Guidelines

- **Heavy use of "use client"** - Most components will be client components due to full frontend nature
- **Image Handling**:
  - Use commented `<Image>` tags for future implementation
  - Replace with colored `<div>` placeholders during development
  - All images will be provided via Google Drive later
- **Animations**: Rich, smooth animations using Framer Motion
- **Responsive**: Mobile-first, then tablet, then desktop
- **Color Usage**: ALWAYS use CSS variables, never hardcoded hex colors

## 🚨 **CRITICAL - TAILWIND CSS WRITING RULES**

**⚡ MANDATORY STYLING GUIDELINES - ALWAYS FOLLOW:**

### **1. Same-Effect Classes (Single Line)**

```tsx
// ✅ CORRECT - Size effects in one line
className="w-24 h-1"
className="px-3 py-1.5"
className="mb-5 mt-3"

// ❌ WRONG - Don't split same-effect classes
className={`
  w-24
  h-1
`}
```

### **2. Responsive Classes (Single Line)**

```tsx
// ✅ CORRECT - All responsive breakpoints in one line
className="text-lg lg:text-[1.8rem] xl:text-xl"
className="grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
className="gap-6 md:gap-8 lg:gap-10"

// ❌ WRONG - Don't split responsive classes
className={`
  text-lg
  lg:text-[1.8rem]
  xl:text-xl
`}
```

### **3. Framer Motion Components**

```tsx
// ✅ CORRECT - No Tailwind transitions for Motion components
<motion.div
  className="opacity-100"  // No transition-opacity
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>

// ❌ WRONG - Redundant transitions
className="transition-opacity duration-300"  // Conflicts with Motion
```

### **4. 🎯 TABLET-FIRST RESPONSIVE PRIORITY**

```tsx
// ✅ CORRECT - Tablet LARGER than Desktop
className = "text-base lg:text-[1.5rem] xl:text-lg";
//           mobile     tablet(BIGGER)   desktop(smaller)

className = "gap-6 md:gap-8 lg:gap-10 xl:gap-8";
//         mobile  tablet(BIGGER)  desktop(smaller)

// ❌ WRONG - Desktop larger than tablet
className = "text-lg lg:text-xl xl:text-2xl"; // Progressive increase
```

### **5. Multi-Line Organization (Backtick Format)**

```tsx
// ✅ CORRECT - Use backticks for different effect categories
className={`
  min-h-screen
  bg-white
  py-16 md:py-24
  px-4 md:px-8
  text-center
  font-bold
`}
```

**💡 WHY TABLET-FIRST?**

- Tablet screens show content too small with traditional mobile-first
- Desktop already has optimal sizing
- Better UX on iPad/tablet devices
- Inspect element testing revealed tablet sizing issues

## Content Structure - **SIMPLIFIED TO SPA**

### Homepage (`app/page.tsx`) - **RESET TO EMPTY**

- Currently empty div with main background
- Ready for complete redesign as SPA
- Will contain all website content in one page

### ~~Members Page~~ - **DELETED**

- ❌ Removed completely
- All member content will be integrated into main page

## Development Standards

- **File Organization**: Components directly in app directory
- **Naming**: Use descriptive, clear component and file names
- **Code Style**: Follow ESLint configurations
- **Performance**: Optimize for mobile devices first
- **Accessibility**: Maintain good contrast ratios with new color scheme
- **Color Consistency**: Always use CSS variables from globals.css

## Development Server Guidelines

**🚨 IMPORTANT - Port Management:**

- **ALWAYS check for running servers** before starting development
- **Stop any existing terminal processes** that might use port 3000
- **Clear terminal or start fresh** before running commands
- **Commands to run in sequence:**
  1. `Ctrl+C` to stop any running process
  2. `npm run dev` for development
  3. `npm run build` for production build
  4. `npm run start` for production server
- **Avoid port conflicts** - only one Next.js server should run at a time

## Student Data

22 members: Faisal, Jaya, Nabiel, Fateya, Suta, Adha, Akbar, Juna, Zhohiri, Azmi, Faqih, Fatih, Daus, Nabil, Salim, Rizky, Rafly, Dzaky, Duan, Rifqi, Raghib, Roihan

## Communication Protocol

- Ask questions when unclear about requirements
- Confirm design decisions before major changes
- Always communicate clearly and without hesitation
- Consider Islamic/respectful context in all design decisions

## Logging Guidelines

**📝 IMPORTANT - Development Logging Protocol:**

- **ALWAYS create development logs** for significant changes/sessions
- **File naming format**: `LOG_TYPE_YYYY-MM-DD_HH-MM.md`
- **Examples**:
  - `DEVELOPMENT_LOG_2025-09-02_06-00.md`
  - `BUILD_FIX_LOG_2025-09-01_18-10.md`
  - `FEATURE_LOG_2025-09-02_14-30.md`
- **Content requirements**:
  - Date & time header
  - Session overview
  - Technical details
  - Files modified/created
  - Next steps
- **Location**: Root project directory
- **Purpose**: Track development progress, decisions, and changes

## Recent Changes Log

1. ✅ **Deleted members page** - converted to SPA
2. ✅ **Removed navbar and footer** from layout
3. ✅ **Removed Montserrat font** - using Harmattan only
4. ✅ **Updated to new color system** - all CSS variables implemented
5. ✅ **Added comprehensive metadata** for SEO and social sharing
6. ✅ **Reset homepage** to empty state for fresh redesign
7. ✅ **Updated language** to Indonesian (lang="id")
8. ✅ **Added Alexandria font** for headings - dual font system implemented

## Future Considerations

- Complete SPA redesign with new color palette
- Image integration from Google Drive
- Interactive yearbook sections in single page
- Enhanced animations with new design system
