/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': 'rgb(15 23 42 / var(--tw-bg-opacity))',
      },
    },
  },
  plugins: [],
}

