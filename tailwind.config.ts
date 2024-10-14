import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-gray": "linear-gradient(260.26deg, rgba(47, 64, 211, 0.07) 12.78%, rgba(214, 215, 225, 0.07) 118.25%)",
        "gradient-radial-blue": "radial-gradient(50% 50% at 50% 50%, #E3EDFD 0%, #EEF3FB 100%)",
        "gradient-radial-yellow": "radial-gradient(50% 50% at 50% 50%, rgba(191, 153, 20, 0.2) 0%, rgba(244, 234, 199, 0.2) 100%)",
        "gradient-radial-green": "radial-gradient(50% 50% at 50% 50%, rgba(61, 255, 92, 0.2) 0%, rgba(198, 243, 205, 0.2) 100%)",
        "gradient-radial-purple": "radial-gradient(50% 50% at 50% 50%, rgba(105, 65, 198, 0.2) 0%, rgba(217, 204, 248, 0.2) 100%)",
      },
      colors: {
        primary: '#0F55BB',
        success: '#06816B',
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'sans'],
      },
      lineHeight: {
        'extra-snug': '1.35',
      }
    },
  },
  plugins: [],
};
export default config;
