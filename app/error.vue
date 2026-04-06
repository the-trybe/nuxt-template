<script setup>
const { t } = useI18n()

const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center px-4">
      <h1 class="text-6xl font-bold text-gray-900 mb-4">{{ error?.statusCode || 500 }}</h1>
      <p class="text-xl text-gray-600 mb-8">{{ error?.statusCode === 404 ? t('error.title') : error?.message }}</p>
      <button
        @click="handleError"
        class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        {{ t('error.back_home') }}
      </button>
    </div>
  </div>
</template>
