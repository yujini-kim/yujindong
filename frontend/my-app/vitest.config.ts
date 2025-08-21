import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    test: {
        projects: [
            {
                extends: true,
                plugins: [],
                test: {
                    name: 'storybook',
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: 'playwright',
                        instances: [{ browser: 'chromium' }],
                    },
                    setupFiles: ['.storybook/vitest.setup.ts'],
                },
            },
        ],
    },
})
