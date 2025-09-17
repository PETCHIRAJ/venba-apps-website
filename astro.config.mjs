// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://apps.venba.dev',
  output: 'static',
  build: {
    format: 'directory'
  }
});
