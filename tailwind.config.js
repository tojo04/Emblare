/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: '#E3FF04',
        title: '#0A0C00',
        body: '#6B7280',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        unbounded: ['Unbounded', 'cursive'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #E3FF04, 0 0 10px #E3FF04' },
          '100%': { boxShadow: '0 0 20px #E3FF04, 0 0 30px #E3FF04' },
        },
      },
    },
  },
  plugins: [],
}

