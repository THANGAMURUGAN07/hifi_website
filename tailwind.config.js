/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F59E0B',         // Orange main brand color
        'primary-dark': '#F59E0B',  // Darker orange for hover, gradients
        background: '#FFFFFF',      // White background
        surface: '#f2f2f3ff',         // Off-white / light surface
        text: '#000000ff',            // Almost black text
        'text-light': '#000000ff',    // Gray for secondary text
      },
    },
  },
  plugins: [],
};
