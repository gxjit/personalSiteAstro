import { defineConfig } from 'astro/config'
import purgecss from 'astro-purgecss'

import alpinejs from '@astrojs/alpinejs'

// https://astro.build/config
export default defineConfig({
  // TODO: add purgecss purgecss(),
  integrations: [alpinejs()],
})
