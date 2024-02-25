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
	  'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
	  'serif': ['ui-serif', 'Georgia'],
	  'mono': ['ui-monospace', 'SFMono-Regular'],
	  'display': ['Inter'],
	  'body': ['Inter']
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