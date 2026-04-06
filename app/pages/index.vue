<script setup>
const { t } = useI18n()

useSeoMeta({
  title: () => t('site.title'),
  description: () => t('site.description'),
  ogTitle: () => t('site.title'),
  ogDescription: () => t('site.description'),
  ogType: 'website',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <SectionHero />
    <SectionFeatures />
    <SectionCTA />
  </div>
</template>
