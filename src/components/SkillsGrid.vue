<script setup>
defineProps({
  skills: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
    <template v-if="skills && skills.length > 0">
      <article
        v-for="(skill, index) in skills"
        :key="skill.name"
        data-animate
        class="group relative overflow-hidden rounded-2xl bg-slate-100 p-4 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:ring-primary/30 dark:bg-slate-900/50 dark:ring-slate-800"
        :style="`animation-delay: ${index * 0.1}s`"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div class="relative flex items-center justify-between">
          <h3 class="font-semibold text-slate-900 transition-colors group-hover:text-primary dark:text-slate-50">
            {{ skill.name }}
          </h3>
          <span class="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-all group-hover:bg-primary group-hover:text-white">
            {{ skill.level }}
          </span>
        </div>
      </article>
    </template>
    <slot v-else />
  </div>
</template>

