/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#0F172A',
          blue: '#2563EB',
          'blue-light': '#3B82F6',
          green: '#059669',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.700'),
            maxWidth: 'none',
            h1: { color: theme('colors.slate.900'), fontWeight: '800' },
            h2: { color: theme('colors.slate.900'), fontWeight: '700' },
            h3: { color: theme('colors.slate.800'), fontWeight: '600' },
            h4: { color: theme('colors.slate.800'), fontWeight: '600' },
            a: {
              color: theme('colors.blue.600'),
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            },
            strong: { color: theme('colors.slate.900') },
            blockquote: {
              borderLeftColor: theme('colors.blue.500'),
              color: theme('colors.slate.600'),
            },
            code: {
              backgroundColor: theme('colors.slate.100'),
              padding: '2px 6px',
              borderRadius: '4px',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
