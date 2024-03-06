import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icons/downloadIcon.png",
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/qa\.corider\.in\/assignment\/chat.*/i,
            handler: 'CacheFirst' as const,
            options:{
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
})
