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
    locales: [ // Add your supported locales here
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'Français' }
    ],
    lazy: true, // Lazy load translations
    langDir: 'locales/', // Directory for translation files
    defaultLocale: 'en', // Default locale
    strategy: 'prefix_except_default' // URL prefixing strategy
    // vueI18n: './i18n.options.js' // Removed as the file doesn't exist yet
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
