import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cont: {
          400: '#FFB465',
        },
      },

      backgroundImage: {
        'norway-flyover': "url('/flyover-nor.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: '0', transform: 'translateX(200px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: '0', transform: 'translateX(-200px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        enterFromTop: {
          from: { opacity: '0', transform: 'translateY(-200px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        enterFromBottom: {
          from: { opacity: '0', transform: 'translateY(200px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': {
            opacity: '0.1',
          },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 150ms ease-in-out',
        enterFromLeft: 'enterFromLeft 250ms ease',
        enterFromRight: 'enterFromRight 250ms ease',
        enterFromBottom: 'enterFromBottom 250ms ease',
        enterFromTop: 'enterFromTop 250ms ease',
      },
    },
  },
  plugins: [],
};

export default config;
