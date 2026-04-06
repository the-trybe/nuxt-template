<template>
  <div class="min-h-screen flex flex-col bg-secondary-50">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
