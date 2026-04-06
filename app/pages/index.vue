<script setup>
import SectionHero from '~/components/sections/SectionHero.vue';
import SectionFeatures from '~/components/sections/SectionFeatures.vue';
import SectionCTA from '~/components/sections/SectionCTA.vue';

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
