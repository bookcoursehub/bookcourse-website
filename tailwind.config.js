/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // brand = BlueZeon dark slate (used for header dark bar, footer, hero bg)
        brand: {
          50:  "#EEF2F4",
          100: "#D2DBE0",
          200: "#A5B7C0",
          300: "#7B919E",
          400: "#556C7A",
          500: "#3D5663",
          600: "#314551",
          700: "#2C3E48",
          800: "#212934",
          900: "#161D26",
          950: "#0B1117"
        },
        // accent = BlueZeon blue (primary CTA / highlight colour)
        accent: {
          50:  "#E6F6FC",
          100: "#C0E9F7",
          200: "#80D3EF",
          300: "#46C0E9",
          400: "#2EBDF5",
          500: "#0A95CD",
          600: "#0876A4",
          700: "#066284",
          800: "#054E6B"
        },
        // ink = neutrals for body/borders/light backgrounds
        ink: {
          900: "#111111",
          800: "#1E293B",
          700: "#334155",
          600: "#555555",
          500: "#64748B",
          400: "#94A3B8",
          300: "#CBD5E1",
          200: "#E2E8F0",
          100: "#F2F2F2"
        }
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 1px 2px rgba(17,17,17,0.04), 0 4px 12px rgba(17,17,17,0.05)",
        elegant: "0 4px 6px -1px rgba(17,17,17,0.06), 0 10px 25px -3px rgba(17,17,17,0.08)",
        lift: "0 20px 40px -12px rgba(17,17,17,0.15)"
      }
    }
  },
  plugins: []
};
