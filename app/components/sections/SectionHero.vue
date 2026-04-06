<script setup>
const { t } = useI18n()
</script>

<template>
  <section class="py-20 text-center">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold text-gray-900 mb-6">{{ t('hero.title') }}</h1>
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{{ t('hero.subtitle') }}</p>
      <a href="#features" class="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg">
        {{ t('hero.cta') }}
      </a>
    </div>
  </section>
</template>
