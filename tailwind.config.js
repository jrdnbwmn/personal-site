module.exports = {
  content: [
	'./_drafts/**/*.html',
	'./_includes/**/*.html',
	'./_layouts/**/*.html',
	'./_posts/*.md',
	'./_tools/*.md',
	'./*.md',
	'./*.html',
  ],
  theme: {
	fontFamily: {
	  'sans': ['Public Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
	  'serif': ['ui-serif', 'Georgia', 'serif'],
	  'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
	  'display': ['Satoshi Variable', 'sans-serif'],
	  'body': ['Inter', 'sans-serif']
	},
	extend: {
	  spacing: {
		'160': '40rem',
	  }
	}
  },
  plugins: [
	  require('@tailwindcss/typography'),
  ],
}