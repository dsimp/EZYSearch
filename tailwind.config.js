/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        yzy: {
          black: '#070707',
          obsidian: '#0E0E0E',
          charcoal: '#181818',
          slate: '#262626',
          muted: '#3E3E3E',
          ash: '#737373',
          chalk: '#D4D4D0',
          bone: '#EAEAE6',
          pumice: '#F5F5F0',
          white: '#FAFAFA',
          earth: '#8C7355',
          clay: '#B85D38',
          sand: '#C2B280',
          concrete: '#9E9E98',
          hemp: '#7B8C65',
          neon: '#00FF66',
          electric: '#2563EB',
          warning: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.06em',
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      }
    },
  },
  plugins: [],
}
