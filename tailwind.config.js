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
	  'sans': ['Basier Square', 'ui-sans-serif', 'system-ui', 'sans-serif'],
	  'serif': ['ui-serif', 'Georgia', 'serif'],
	  'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
	  'display': ['Basier Square', 'ui-sans-serif', 'system-ui', 'sans-serif'],
	  'body': ['Basier Square', 'ui-sans-serif', 'system-ui', 'sans-serif']
	},
	borderRadius: {
		'xl': '1.75rem'
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