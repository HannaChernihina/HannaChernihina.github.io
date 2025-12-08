<script setup>
defineProps({
  experiences: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="space-y-4">
    <template v-if="experiences && experiences.length > 0">
      <article
        v-for="(experience, index) in experiences"
        :key="experience.company"
        data-animate
        class="group relative overflow-hidden rounded-2xl bg-slate-100 p-6 shadow-sm ring-1 ring-slate-200 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 hover:ring-primary/30 dark:bg-slate-900/50 dark:ring-slate-800/60"
        :style="`animation-delay: ${index * 0.15}s`"
      >
        <div
          class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-primary/0 transition-all duration-300 group-hover:w-1.5 group-hover:from-primary group-hover:to-primary/50"
        ></div>
        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-primary">Experience</p>
            <h3 class="text-xl font-semibold text-slate-900 transition-colors group-hover:text-primary dark:text-slate-50">
              {{ experience.role }}
            </h3>
            <p class="text-slate-700 dark:text-slate-300">{{ experience.company }}</p>
          </div>
          <span class="text-sm text-slate-600 dark:text-slate-400">{{ experience.period }}</span>
        </div>
        <p class="mt-3 text-slate-700 dark:text-slate-300">
          {{ experience.summary }}
        </p>
        <ul class="mt-4 grid gap-2 text-sm text-slate-700 dark:text-slate-300 sm:grid-cols-2">
          <li
            v-for="(achievement, idx) in experience.achievements"
            :key="achievement"
            class="flex items-start gap-2 transition-all hover:translate-x-1"
            :style="`animation-delay: ${(index * 0.15) + (idx * 0.05)}s`"
          >
            <span class="mt-1 h-1.5 w-1.5 animate-pulse-slow rounded-full bg-primary"></span>
            <span>{{ achievement }}</span>
          </li>
        </ul>
      </article>
    </template>
    <slot v-else />
  </div>
</template>

