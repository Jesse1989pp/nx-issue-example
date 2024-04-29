import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'cypress',
      bundler: 'vite',
      webServerCommands: { default: 'npx nx serve nuxt-app' },
      ciWebServerCommand: 'nx run nuxt-app:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
