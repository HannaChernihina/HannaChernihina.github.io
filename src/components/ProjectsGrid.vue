<script setup>
defineProps({
  projects: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="grid gap-4 md:grid-cols-2">
    <template v-if="projects && projects.length > 0">
      <article
        v-for="(project, index) in projects"
        :key="project.name"
        data-animate
        class="group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl bg-slate-100 p-5 ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 hover:ring-primary/30 dark:bg-slate-900/50 dark:ring-slate-800"
        :style="`animation-delay: ${index * 0.2}s`"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        <div class="relative flex items-center justify-between">
          <h3 class="text-xl font-semibold text-slate-900 transition-colors group-hover:text-primary dark:text-slate-50">
            {{ project.name }}
          </h3>

         <div  class="relative text-sm font-semibold text-primary transition-all hover:scale-110"
          > {{ project.date }} </div>

        </div>
        <p class="relative text-slate-700 dark:text-slate-300">
          {{ project.description }}
        </p>
        <div class="relative flex flex-wrap gap-2">
          <span
            v-for="(stack, idx) in project.stack"
            :key="stack"
            class="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-white"
            :style="`animation-delay: ${(index * 0.2) + (idx * 0.05)}s`"
          >
            {{ stack }}
          </span>
        </div>

          <div class="relative flex flex-wrap gap-2">
            <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noreferrer"
            class="relative text-sm font-semibold text-primary transition-all hover:scale-110 hover:underline after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
          >
            View
          </a>
          </div>
         
      </article>
    </template>
    <slot v-else />
  </div>
</template>

