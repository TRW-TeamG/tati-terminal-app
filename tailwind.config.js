/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        'electric-blue': '#7DF9FF',
        'deep-indigo': '#1E2A3A',
        'soft-silver': '#F5F5F5',
        'luminous-turquoise': '#00FFFF',
        lavender: '#E6E6FA',
        'hover-grey': '#D3D3D3',
        background: 'var(--deep-indigo)',
        foreground: 'var(--soft-silver)',
        card: {
          DEFAULT: 'var(--deep-indigo)',
          foreground: 'var(--soft-silver)',
        },
        popover: {
          DEFAULT: 'var(--deep-indigo)',
          foreground: 'var(--soft-silver)',
        },
        primary: {
          DEFAULT: 'var(--electric-blue)',
          foreground: 'var(--deep-indigo)',
        },
        secondary: {
          DEFAULT: 'var(--lavender)',
          foreground: 'var(--deep-indigo)',
        },
        muted: {
          DEFAULT: 'var(--hover-grey)',
          foreground: 'var(--deep-indigo)',
        },
        accent: {
          DEFAULT: 'var(--luminous-turquoise)',
          foreground: 'var(--deep-indigo)',
        },
        destructive: {
          DEFAULT: '#ff4444',
          foreground: 'var(--soft-silver)',
        },
        border: 'var(--hover-grey)',
        input: 'var(--hover-grey)',
        ring: 'var(--electric-blue)',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
