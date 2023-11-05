import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'black-custom': '#1E1E1E',
        'green-custom': '#27AE6F',
        'default': '#F0E5D7'
      },
      textColor: {
        'black-custom': '#1B2E3A'
      },
      screens: {
        'small-notbook': '992px'
      }
    },
  },
  plugins: [],
}
export default config
