// vitest.config.js
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // explicit include patterns (adjust if you prefer src/)
    include: [
      'test/**/*.test.js',
      'test/**/*.spec.js',
      'src/**/*.test.{js,jsx,ts,tsx}',
      'src/**/*.spec.{js,jsx,ts,tsx}'
    ],
    exclude: ['node_modules', 'dist'],
    environment: 'node' // or 'jsdom' if testing React DOM
  }
})
