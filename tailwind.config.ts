import { color } from 'framer-motion'
import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        accent: "#5700EF",
      },
      spacing: {
        'box-xl': '1440px',
      },
    },
  },
  plugins: [],
} satisfies Config
