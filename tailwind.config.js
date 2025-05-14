/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eaf4',
          100: '#ccd5e9',
          200: '#99abd3',
          300: '#6682bd',
          400: '#3358a7',
          500: '#0A2463', // primary color
          600: '#091d4f',
          700: '#07163b',
          800: '#050e28',
          900: '#020714',
        },
        secondary: {
          50: '#fff0f0',
          100: '#ffe1e1',
          200: '#ffc3c3',
          300: '#ffa5a5',
          400: '#ff8888',
          500: '#FF6B6B', // secondary color
          600: '#cc5656',
          700: '#994040',
          800: '#662b2b',
          900: '#331515',
        },
        accent: {
          50: '#f5f9ff',
          100: '#ebf3ff',
          200: '#d6e7ff',
          300: '#c2dbff',
          400: '#adcfff',
          500: '#99C3FF', // accent color
          600: '#7a9ccc',
          700: '#5c7599',
          800: '#3d4e66',
          900: '#1f2733',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};