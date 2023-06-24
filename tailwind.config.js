/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      primary: 'rgb(var(--color-primary))',
      title: 'rgb(var(--primary-text))',
      content: 'rgb(var(--regular-text))',
      disabled: 'rgb(var(--disabled-text))',
      gray: {
        light: 'rgb(var(--light-border))',
        DEFAULT: 'rgb(var(--base-border))',
        dark: 'rgb(var(--dark-border))',
      },
      footer: 'rgb(var(--footer-bg))',
    },
    extend: {},
  },
  plugins: [],
};
