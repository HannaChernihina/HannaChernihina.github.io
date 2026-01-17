<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="space-y-2">
    <p class="animate-fade-in-left text-sm uppercase tracking-[0.3em] text-primary">Portfolio</p>
    <h2 class="animate-fade-in-up text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl" style="animation-delay: 0.1s">
      <slot name="title">{{ title }}</slot>
    </h2>
    <p v-if="subtitle || $slots.subtitle" class="animate-fade-in-up max-w-3xl text-slate-600 dark:text-slate-400" style="animation-delay: 0.2s">
      <slot name="subtitle">{{ subtitle }}</slot>
    </p>
  </div>
</template>

