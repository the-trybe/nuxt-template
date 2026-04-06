<script setup>
const { locale, locales, setLocale, t } = useI18n()

const availableLocales = computed(() => {
  return (locales.value || []).filter(i => i.code !== locale.value)
})
</script>

<template>
  <header class="bg-white shadow-sm">
    <nav class="container mx-auto flex items-center justify-between px-4 py-4">
      <NuxtLink to="/" class="text-xl font-bold text-secondary-900">
        {{ t('site.title') }}
      </NuxtLink>
      <div class="flex items-center space-x-4">
        <span class="text-sm text-secondary-500">{{ t('nav.change_language') }}:</span>
        <button
          v-for="loc in availableLocales"
          :key="loc.code"
          @click="setLocale(loc.code)"
          class="text-sm text-primary-600 hover:underline"
        >
          {{ loc.name }}
        </button>
      </div>
    </nav>
  </header>
</template>
