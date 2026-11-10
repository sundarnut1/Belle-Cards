import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

export default function defaultConfig({ content, theme, variants, plugins }: Config) {
  return {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          border: 'var(--border)',
          input: 'var(--input)',
          ring: 'var(--ring)',
          background: 'var(--background)',
          foreground: 'var(--foreground)',
          primary: 'var(--primary)',
          'primary-foreground': 'var(--primary-foreground)',
          secondary: 'var(--secondary)',
          'secondary-foreground': 'var(--secondary-foreground)',
          accent: 'var(--accent)',
          'accent-foreground': 'var(--accent-foreground)',
          destructive: 'var(--destructive)',
          muted: 'var(--muted)',
          'muted-foreground': 'var(--muted-foreground)',
          popover: 'var(--popover)',
          'popover-foreground': 'var(--popover-foreground)',
          card: 'var(--card)',
          'card-foreground': 'var(--card-foreground)',
          page: 'var(--page)',
          'border-border': 'var(--border)',
        },
        fontFamily: {
          sans: ['Inter', ...defaultTheme.fontFamily.sans.split(", ")],
          mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono.split(", ")],
          serif: ['Merriweather', ...defaultTheme.fontFamily.serif.split(", ")],
          display: ['Georgia', ...defaultTheme.fontFamily.sans.split(", ")],
          body: ['Source Sans Pro', ...defaultTheme.fontFamily.sans.split(", ")],
        },
      },
    },
    plugins: plugins,
  }
}
