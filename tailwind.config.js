export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#7500FF',
          purpleDark: '#5E00CC',
          blue: '#4E4EF2',
          navy: '#12122D',
          ink: '#1E1C23',
          lavender: '#EAEAFF',
          mist: '#EAECF5',
          muted: '#55546A',
          line: '#E3E4EF',
          canvas: '#F7F7FC',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(18,18,45,0.04), 0 4px 16px rgba(18,18,45,0.06)',
        lift: '0 2px 4px rgba(18,18,45,0.05), 0 18px 44px rgba(18,18,45,0.12)',
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
}
