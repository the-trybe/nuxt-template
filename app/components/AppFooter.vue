<script setup>
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-100 border-t border-gray-200">
    <div class="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
      {{ t('footer.copyright', { year }) }}
    </div>
  </footer>
</template>
