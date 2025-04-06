<script setup>
// Nuxt 3 auto-imports these, but explicit import can help clarity/avoid issues
import { computed } from 'vue'
import { useI18n } from '#imports' // Use Nuxt's auto-import alias

const { locale, locales, setLocale, t } = useI18n()

const availableLocales = computed(() => {
  // Ensure locales.value is treated as an array and filter out the current locale
  // The structure of locale objects comes from the i18n config in nuxt.config.js
  return (locales.value || []).filter(i => i.code !== locale.value)
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm p-4">
      <nav class="container mx-auto flex justify-end space-x-4">
        <span class="text-gray-600">{{ t('change_language') }}:</span>
        <button
          v-for="locale in availableLocales"
          :key="locale.code"
          @click="setLocale(locale.code)"
          class="text-blue-600 hover:underline"
        >
          {{ locale.name }}
        </button>
      </nav>
    </header>

    <main class="container mx-auto py-8">
      <!-- This is just the layout container, we'll add header, footer, etc. later -->
      <slot />
    </main>

    <!-- Add a basic footer later if needed -->
    <!-- <footer class="bg-gray-200 p-4 mt-8 text-center text-sm text-gray-600">
      My Landing Page &copy; {{ new Date().getFullYear() }}
    </footer> -->
  </div>
</template>
