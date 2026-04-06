<script setup>
import { useI18n } from '#imports'
const { t } = useI18n()
</script>

<template>
  <div class="container mx-auto px-4 py-8 text-center">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ t('welcome') }}</h1>
    <p class="text-lg text-gray-700">{{ t('description') }}</p>
  </div>
</template>
