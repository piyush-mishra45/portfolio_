/** Colors come from CSS variables in index.css so the light/dark toggle works. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)', card: 'var(--card)', fg: 'var(--fg)', muted: 'var(--muted)',
        line: 'var(--line)', accent: 'var(--accent)', accent2: 'var(--accent2)',
      },
      fontFamily: { display: ['Sora', 'sans-serif'], sans: ['"Source Sans 3"', 'sans-serif'] },
    },
  },
  plugins: [],
}
