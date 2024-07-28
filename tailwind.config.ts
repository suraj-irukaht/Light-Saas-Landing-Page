import type { Config } from 'tailwindcss';

const config: Config = {
   content: [
      './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      screens: {
         sm: '375px',
         md: '768px',
         lg: '1024px',
      },
      extend: {
         container: {
            center: true,

            padding: {
               DEFAULT: '20px',
               lg: '80px',
            },
            screens: {
               large: '1200px',
            },
         },
      },
   },
   plugins: [],
};

export default config;
