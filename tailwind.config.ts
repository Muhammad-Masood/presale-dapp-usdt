import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "bg-button": "linear-gradient(155deg, #B07BFE 0%, #FFD178 100%)",
        "bg-card":
          "linear-gradient(151deg, rgba(255, 148, 255, 0.8) 0%, rgba(61, 33, 75, 0.8) 100%)",

        "bg-gradientText": "linear-gradient(176deg, #8E054B 0%, #FF94FF 100%)",
        "bg-gradientText2": "linear-gradient(155deg, #6EC1E4 0%, #FF94FF 100%)",
        "bg-gradientText3": "linear-gradient(180deg, #6EC1E4 0%, #3D214B 100%)",
        "bg-hero": "url('/landing-page/hero.png')",
        "bg-hero10": "url('/landing-page/hero10-bg.png')",
        "bg-gradientHero": "linear-gradient(174deg, #3D214B 0%, #222330 100%)",

        "bg-heroEcos": "url('/ecosystem/widnet.png')",
        "bg-gradientHero2":
          "linear-gradient(232deg, #222330 80%, #6DD8D4 100%)",

        "bg-gradientHero3":
          "linear-gradient(347deg, #27283C 71%, #3D214B 100%)",

        "bg-gradientHero4":
          "linear-gradient(143deg, #222330 85%, #6DD8D4 100%)",
        "bg-gradientHero5":
          "linear-gradient(180deg, #222330 0%, #3D214B 50%, #222330 75%, #3D214B 100%)",
        "bg-transparent": "transparent",
      },
      fontFamily: {
        alfaSlabOne: ["Alfa Slab One", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        albertSans: ["Albert Sans", "sans-serif"],
        roborto: ["Roboto", "sans-serif"],
        telex: ["Telex", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
