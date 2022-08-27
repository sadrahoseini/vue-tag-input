const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 1000,
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
    specPattern: '**/*.spec.js',
    supportFile: false,
    viewportWidth: 600,
    viewportHeight: 600
  },
  e2e: {
    baseUrl: 'http://127.0.0.1:5173',
    specPattern: '**/*.cy.js',
    supportFile: false
  },
})