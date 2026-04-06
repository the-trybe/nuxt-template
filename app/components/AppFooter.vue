<script setup>
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-secondary-100 border-t border-secondary-200">
    <div class="container mx-auto px-4 py-6 text-center text-sm text-secondary-600">
      {{ t('footer.copyright', { year }) }}
    </div>
  </footer>
</template>
