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
	  'sans': ['Roobert Trial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
	  'serif': ['ui-serif', 'Georgia', 'serif'],
	  'mono': ["Menlo", 'ui-monospace', 'SFMono-Regular', 'monospace'],
	  'display': ['Roobert Trial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
	  'body': ['GitLab Sans', 'Basier Circle', 'ui-sans-serif', 'system-ui', 'sans-serif']
	},
	borderRadius: {
		'xl': '24px'
	},
	extend: {
	  spacing: {
		'160': '40rem',
	  },
	  maxWidth: {
		'screen-2xl': '1600px',
	  }
	}
  },
  plugins: [
	  require('@tailwindcss/typography'),
  ],
}