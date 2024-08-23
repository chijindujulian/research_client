import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import node from '@astrojs/node'
import netlify from '@astrojs/netlify';

import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), svelte()],
    output: 'server',
    adapter: netlify(),
    darkMode: 'selector',
    adapter: node({
        mode: 'standalone',
    }),
})
