/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'accent-color': 'var(--color-accent-color)',
      },
      fontFamily: {
        'main': 'var(--font-main)',
      },
      backgroundImage: {
        'accent-gradient': 'var(--background-image-accent-gradient)',
      },
      animation: {
        'float': 'var(--animate-float)',
        'float-reverse': 'var(--animate-float-reverse)',
        'marquee': 'var(--animate-marquee)',
      },
    },
  },
  plugins: [],
}
