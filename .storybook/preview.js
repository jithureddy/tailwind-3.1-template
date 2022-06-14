import { MemoryRouter } from 'react-router-dom'
import '../src/styles/index.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


export const Decorator = (Story) => (
  <div id="page">
    <div id="content">
        <div className="font-inter bg-gray-100 px-4 md:px-6 lg:px-8 xl:px-18 py-8 min-h-screen rounded-md">
          <MemoryRouter>
            <Story />
          </MemoryRouter>
      </div>
    </div>
  </div>
)

export const decorators = [Decorator]