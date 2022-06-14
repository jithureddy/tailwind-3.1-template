const mondraTheme = require('@mondra/ui-components/styles/theme-config')

module.exports = mondraTheme({
  content: ['./public/index.html', './.storybook/preview.js'],
  theme: {
    extend: {
		},
  },
  plugins: [],
})

