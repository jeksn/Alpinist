import { defineConfig } from 'vite'
import AlpineVitePlugin from './alpine-vite-plugin.js'
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    plugins: [
        AlpineVitePlugin(),
        handlebars({
          partialDirectory: [
            resolve(__dirname, 'components'),
            resolve(__dirname, 'partials')
          ],
        }),
    ]
})
