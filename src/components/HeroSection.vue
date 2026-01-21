<script setup>
defineProps({
  hero: {
    type: Object,
    default: null
  }
});
</script>

<template>
  <div
    class="grid grid-cols-1 items-center gap-10 rounded-3xl bg-gradient-to-br from-slate-200/80 via-slate-100 to-slate-50 p-8 shadow-xl ring-1 ring-slate-300 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 dark:from-slate-900/80 dark:via-slate-900 dark:to-slate-950 dark:ring-slate-800 lg:grid-cols-[1.05fr_0.95fr]"
  >
    <div class="space-y-6">
      <slot name="greeting">
        <p v-if="hero" class="animate-fade-in-up text-lg text-slate-700 dark:text-slate-300" style="animation-delay: 0.1s">
          {{ hero.greeting }}
        </p>
      </slot>
      <slot name="name">
        <h1 v-if="hero" class="animate-fade-in-up text-4xl font-black leading-tight text-slate-900 dark:text-slate-50 sm:text-5xl" style="animation-delay: 0.2s">
          {{ hero.name }}
        </h1>
      </slot>
      <slot name="title">
        <h2 v-if="hero" class="animate-fade-in-up text-2xl font-semibold text-slate-800 dark:text-slate-100 sm:text-3xl" style="animation-delay: 0.3s">
          {{ hero.titleLead }}
          <span class="text-gradient bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">{{ hero.titleHighlight }}</span>
        </h2>
      </slot>
      <slot name="description">
        <p v-if="hero" class="animate-fade-in-up max-w-2xl text-lg text-slate-700 dark:text-slate-300" style="animation-delay: 0.4s">
          {{ hero.blurb }}
        </p>
      </slot>
      <slot name="actions">
        <div v-if="hero" class="animate-fade-in-up flex items-center gap-4" style="animation-delay: 0.5s">
          <a
            :href="hero.cta.href"
            target="_blank"
            rel="noreferrer"
            class="group relative overflow-hidden rounded-full bg-primary px-6 py-3 text-base font-semibold text-slate-950 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/50"
          >
            <span class="relative z-10">{{ hero.cta.label }}</span>
            <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          </a>
          <div
            class="flex items-center gap-2 rounded-full border border-slate-400 px-4 py-2 text-sm text-slate-700 transition-all hover:scale-105 hover:border-primary/50 dark:border-slate-700 dark:text-slate-300"
          >
            <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
            <span>Open to work</span>
          </div>

           <!-- <div
            class="flex items-center gap-2 rounded-full border border-slate-400 px-4 py-2 text-sm text-slate-700 transition-all hover:scale-105 hover:border-primary/50 dark:border-slate-700 dark:text-slate-300"
          >
           <span class="animate-pulse text-lg">😍</span>
            <v-btn>About my personality</v-btn>
          </div> -->
        </div>
      </slot>
    </div>

    <slot name="image">
      <div
        v-if="hero"
        class="relative flex items-center justify-center rounded-3xl bg-slate-200/60 p-6 ring-1 ring-slate-300 transition-transform duration-500 hover:scale-105 dark:bg-slate-900/60 dark:ring-slate-800"
      >
        <div
          class="absolute inset-4 animate-pulse-slow rounded-3xl bg-gradient-to-tr from-primary/30 via-transparent to-primary/10 blur-3xl"
        ></div>
        <img
          class="relative z-10 max-h-[360px] w-full max-w-md animate-float object-contain drop-shadow-[0_20px_45px_rgba(251,79,61,0.4)]"
          :src="hero.profile"
          alt="Portrait"
        />
      </div>
    </slot>
  </div>
</template>

