<script setup>
defineProps({
  education: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <template v-if="education && education.length > 0">
      <article
        v-for="(item, index) in education"
        :key="item.school"
        data-animate
        class="group relative overflow-hidden rounded-2xl bg-slate-100 p-5 shadow-sm ring-1 ring-slate-200 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 hover:ring-primary/30 dark:bg-slate-900/50 dark:ring-slate-800/60"
        :style="`animation-delay: ${index * 0.2}s`"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        <div class="relative">
          <p class="text-sm uppercase tracking-[0.2em] text-primary">Education</p>
          <h3 class="text-xl font-semibold text-slate-900 transition-colors group-hover:text-primary dark:text-slate-50">
            {{ item.school }}
          </h3>
          <p class="text-slate-700 dark:text-slate-300">{{ item.degree }}</p>
          <p class="text-sm text-slate-600 dark:text-slate-400">{{ item.period }}</p>
        </div>
      </article>
    </template>
    <slot v-else />
  </div>
</template>

