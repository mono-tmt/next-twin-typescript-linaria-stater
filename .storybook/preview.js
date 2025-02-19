export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    html: {
      prettier: {
        tabWidth: 4,
        printWidth:120,
        useTabs: false,
        htmlWhitespaceSensitivity: 'ignore',
      },
    },
  },
}