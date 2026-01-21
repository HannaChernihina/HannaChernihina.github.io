<script setup>
/**
 * items: [{ name: string, Icon: component, colorClass?: string }]
 * Icon — компонент из lucide-vue-next или svg-компонент.
 */
defineProps({
  skills: { type: Array, required: true },
})
</script>

<template>
  <div class="rounded-2xl border border-slate-200/70 bg-white/60 p-4 shadow-sm backdrop-blur
              dark:border-slate-800/70 dark:bg-slate-950/40">
    <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="group relative"
      >
      
        <button
          type="button"
          class="grid h-12 w-12 place-items-center rounded-xl border border-slate-200 bg-white
                 transition-all duration-200
                 hover:-translate-y-0.5 hover:shadow-md
                 dark:border-slate-800 dark:bg-slate-950"
          :aria-label="skill.name"
        >
        
       <component
            :is="skill.icon"
            class="h-6 w-6 transition-all duration-200
                    text-slate-400 fill-current stroke-current"
            :class="skill.hoverClass ?? 'group-hover:text-primary'"
            />
        </button>

     
        <div
          class="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-3
                 opacity-0 transition-all duration-200
                 group-hover:-translate-y-5 group-hover:opacity-100"
        >
          <div
            class="whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-800 shadow-lg
                   dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
          >
            {{ skill.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
