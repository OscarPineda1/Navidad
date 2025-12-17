import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        christmas: {
          forest: "#1d351d",
          pine: "#325632",
          berry: "#8b181d",
          wine: "#6f0f11",
          sand: "#e6be9a",
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'fadeIn': 'fadeIn 0.3s ease-out',
        'bounceIn': 'bounceIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.3) translateY(-100px)',
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.05)',
          },
          '70%': { 
            transform: 'scale(0.9)',
          },
          '100%': { 
            transform: 'scale(1) translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
