// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-06',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n',
    '@nuxt/eslint'
  ],

  i18n: {
    langDir: "locales/",
    lazy: true,
    locales: [
      { code: "en", iso: "en-US", files: ["en.json"], name: "English" },
      { code: "fr", iso: "fr-FR", files: ["fr.json"], name: "Français" },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
  },

  app: {
    head: {
      title: 'Nuxt Landing Page Starter',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A starter template for building beautiful landing pages with Nuxt 4 and Tailwind CSS.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],
})
