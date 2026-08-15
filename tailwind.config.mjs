/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F4F7F6',
          100: '#E6ECE9',
          200: '#CAD8D3',
          300: '#A1BABC',
          400: '#759B94',
          500: '#4F7C74',
          600: '#3D625C',
          700: '#2F4D48',
          800: '#223835',
          900: '#152422',
          950: '#0B1413',
        },
        emeraldDeep: '#0D3B36',
        emeraldTeal: '#164E46',
        emeraldSoft: '#2A6B62',
        sandLight: '#FDFBF7',
        sandWarm: '#F7F3EC',
        sandBorder: '#EFE8DC',
        goldAccent: '#C5A059',
        goldLight: '#E5C88B',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Mulish', 'sans-serif'],
        accent: ['"Outfit"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'breathe': 'breathe 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        }
      },
      boxShadow: {
        'glow-sage': '0 0 35px -5px rgba(79, 124, 116, 0.18)',
        'glow-gold': '0 0 30px -5px rgba(197, 160, 89, 0.25)',
        'luxury': '0 20px 40px -15px rgba(13, 59, 54, 0.08)',
        'glass': '0 8px 32px 0 rgba(13, 59, 54, 0.06)',
      }
    },
  },
  plugins: [],
};
