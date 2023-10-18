import type { Config } from 'tailwindcss'
import { Exo_2, Source_Code_Pro } from 'next/font/google'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'slate': '#060606',
        'rose-of-sharon': {
          '50': '#fffbeb',
          '100': '#fef3c7',
          '200': '#fde58a',
          '300': '#fbd24e',
          '400': '#fabe25',
          '500': '#f49d0c',
          '600': '#d87607',
          '700': '#bc560a',
          '800': '#923f0e',
          '900': '#78340f',
          '950': '#451a03',
        },
      },
      fontFamily: {
        default: ['"Exo 2"', 'sans-serif'],
        name   : ['"Source Code Pro"', 'monospace']
      },
    },
    plugins: [],
  }
}
export default config
