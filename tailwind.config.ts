import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d62ec',
          100: '#77a1f4',
          200: '#6191f2',
          300: '#4a81f0',
          400: '#3472ee',
          500: '#1d62ec',
          600: '#1a58d4',
          700: '#174ebd',
          800: '#1445a5',
          900: '#113b8e',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.debug': {
          border: '4px solid red',
        },
      })
    }),
    require('@tailwindcss/forms'),
  ],
}
export default config
