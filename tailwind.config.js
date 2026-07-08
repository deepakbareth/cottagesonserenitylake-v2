/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /**
       * Brand color tokens — edit these to change the website's theme.
       * Gray and white base color scheme.
       */
      colors: {
        brand: {
          bg:         "#FFFFFF",   // Page background (pure white)
          surface:    "#F9FAFB",   // Alternate surface (lightest gray)
          border:     "#E5E7EB",   // Borders, dividers, rule lines (light gray)
          muted:      "#4B5563",   // Secondary / body / support text (medium gray)
          subtle:     "#9CA3AF",   // Placeholders, de-emphasised icons (gray)
          text:       "#111827",   // Primary body text (charcoal/near-black)
          accent:     "#1F2937",   // Accent (dark gray/black for buttons/links)
          accentHov:  "#374151",   // Hover state for accent elements
        },
      },

      fontFamily: {
        sans:  ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "ui-serif", "serif"],
      },

      keyframes: {
        slideDown: {
          "0%":   { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-down": "slideDown 0.2s ease-out both",
        "fade-in-up": "fadeInUp 0.5s cubic-bezier(0.25, 1, 0.5, 1) both",
      },
    },
  },

  plugins: [],
};
