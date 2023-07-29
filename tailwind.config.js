/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export const content = ['./index.html', './src/**/*.{vue,js,ts}']
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
    }
  }
}
export const plugins = []
