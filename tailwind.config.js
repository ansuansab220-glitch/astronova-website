/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'astronova': {
          'dark-blue': '#001F3F',
          'blue': '#0088ff',
          'cyan': '#00d4ff',
          'purple': '#9d4edd',
          'pink': '#ff006e',
          'gold': '#ffd700',
        }
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'exo': ['Exo 2', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.4s ease-out',
        'bounce': 'bounce 2s infinite',
        'slowZoom': 'slowZoom 20s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        'spin-slower': 'spin 45s linear infinite',
        'spin-slowest': 'spin 60s linear infinite',
        'orbit-1': 'orbit 40s linear infinite',
        'orbit-2': 'orbit 40s linear infinite 2s',
        'orbit-3': 'orbit 40s linear infinite 4s',
        'orbit-4': 'orbit 40s linear infinite 6s',
        'orbit-5': 'orbit 40s linear infinite 8s',
        'orbit-6': 'orbit 40s linear infinite 10s',
        'orbit-7': 'orbit 40s linear infinite 12s',
        'orbit-8': 'orbit 40s linear infinite 14s',
        'orbit-9': 'orbit 40s linear infinite 16s',
        'orbit-10': 'orbit 40s linear infinite 18s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slowZoom: {
          '0%': { 
            transform: 'scale(1)',
          },
          '100%': { 
            transform: 'scale(1.15)',
          },
        },
        'pulse-glow': {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.5))',
          },
          '50%': { 
            filter: 'drop-shadow(0 0 40px rgba(0, 212, 255, 0.9))',
          },
        },
        orbit: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
}