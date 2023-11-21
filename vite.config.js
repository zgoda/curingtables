import { defineConfig } from 'vite';
import { resolve } from 'path';
import preact from '@preact/preset-vite';
import { VitePWA } from 'vite-plugin-pwa';
import handlebars from '@vituum/vite-plugin-handlebars';

export default defineConfig({
  plugins: [
    handlebars({
      partials: {
        directory: resolve(__dirname, 'partials'),
        extname: false,
      },
      formats: ['hbs', 'hbs.html'],
    }),
    preact(),
    VitePWA({
      base: '/',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Peklowanie na mokro',
        short_name: 'Peklowanie na mokro',
        description: 'Tabele peklowania zalewowego (na mokro) wg Dziadka',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: [
        resolve(__dirname, 'index.html'),
        resolve(__dirname, 'about', 'index.hbs.html'),
        resolve(__dirname, 'privacy', 'index.hbs.html'),
        resolve(__dirname, 'contact', 'index.hbs.html'),
      ],
    },
  },
  server: {
    port: 8080,
  },
});
