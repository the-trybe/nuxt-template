<script setup>
const { t } = useI18n()
</script>

<template>
  <section class="py-20 bg-primary-600 text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-4">{{ t('cta.title') }}</h2>
      <p class="text-lg text-primary-100 mb-8 max-w-xl mx-auto">{{ t('cta.subtitle') }}</p>
      <a
        href="#"
        class="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-colors text-lg font-semibold"
      >
        {{ t('cta.button') }}
      </a>
    </div>
  </section>
</template>
