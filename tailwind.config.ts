// tailwind.config.ts (Corregido)

import type { Config } from 'tailwindcss';

const config: Config = { 
  darkMode: 'class', 
  
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Puedes añadir tus colores y fuentes aquí
    },
  },
  plugins: [],
};

export default config;