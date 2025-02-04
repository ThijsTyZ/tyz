import type { Config } from 'tailwindcss';
import { theme } from './src/theme';

console.log('THIS IS A TEST TAILWIND', theme);

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { ...theme.colors },

      theme: {
        extend: {},
      },
    },
  },
  plugins: [],
};
export default config;
