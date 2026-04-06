<script setup>
const { t } = useI18n()

const features = ['i18n', 'seo', 'performance']
</script>

<template>
  <section id="features" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">{{ t('features.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature"
          class="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ t(`features.${feature}.title`) }}</h3>
          <p class="text-gray-600">{{ t(`features.${feature}.description`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
