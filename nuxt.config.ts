// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/robots'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en' // Default language
      },
      title: 'Nuxt Landing Page Starter', // Default title
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A starter template for building beautiful landing pages with Nuxt 3 and Tailwind CSS.' } // Default description
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } // Link to favicon
      ]
    }
  },

  // Optional: Add global CSS if needed
  // css: ['~/assets/css/main.css'],
})
