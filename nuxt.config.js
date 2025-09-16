// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/i18n'
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
  css: ['~/assets/css/main.css'],
}
