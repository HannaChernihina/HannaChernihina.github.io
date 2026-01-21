<!-- src/components/layout/SectionWrapper.vue -->
<template>
  <section 
    :id="id" 
    v-animate-on-scroll
    class="scroll-mt-20"
  >
    <header v-if="$slots.title" class="mb-8">
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
        <slot name="title"></slot>
      </h2>
      <slot name="subtitle"></slot>
    </header>
    <div class="space-y-6">
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  }
});
</script>