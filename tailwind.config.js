/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        mc: {
          grass: '#5D8A3C',
          'grass-light': '#7DB85A',
          dirt: '#8B5E3C',
          'dirt-light': '#A0714A',
          stone: '#828282',
          'stone-light': '#9E9E9E',
          wood: '#9C6B3C',
          sky: '#87CEEB',
          'sky-dark': '#5AAFD4',
          night: '#0D1B2A',
          'night-mid': '#1B2D3E',
          diamond: '#4FC3F7',
          gold: '#FFD700',
          emerald: '#50C878',
          redstone: '#FF4444',
          lapis: '#1E6BB0',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'cloud-move': 'cloudMove 30s linear infinite',
        'cloud-move-slow': 'cloudMove 50s linear infinite',
        'pixel-pulse': 'pixelPulse 2s ease-in-out infinite',
        'particle-rise': 'particleRise 4s ease-in infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        cloudMove: {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(calc(100vw + 200px))' },
        },
        pixelPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(79, 195, 247, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(79, 195, 247, 0)' },
        },
        particleRise: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '1' },
          '100%': { transform: 'translateY(-80px) translateX(20px)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'mc': '3px 3px 0px rgba(0,0,0,0.5), inset 2px 2px 0px rgba(255,255,255,0.25), inset -2px -2px 0px rgba(0,0,0,0.3)',
        'mc-hover': '4px 4px 0px rgba(0,0,0,0.6), inset 2px 2px 0px rgba(255,255,255,0.3), inset -2px -2px 0px rgba(0,0,0,0.4)',
        'mc-inset': 'inset 3px 3px 0px rgba(0,0,0,0.4), inset -1px -1px 0px rgba(255,255,255,0.15)',
        'mc-slot': 'inset 2px 2px 4px rgba(0,0,0,0.6), inset -1px -1px 2px rgba(255,255,255,0.1)',
        'mc-glow-diamond': '0 0 12px rgba(79,195,247,0.6), 0 0 24px rgba(79,195,247,0.3)',
        'mc-glow-gold': '0 0 12px rgba(255,215,0,0.6), 0 0 24px rgba(255,215,0,0.3)',
        'mc-glow-emerald': '0 0 12px rgba(80,200,120,0.6), 0 0 24px rgba(80,200,120,0.3)',
      },
    },
  },
  plugins: [],
};
