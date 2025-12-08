<script setup>
defineProps({
  certificates: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <template v-if="certificates && certificates.length > 0">
      <article
        v-for="(certificate, index) in certificates"
        :key="certificate.name"
        data-animate
        class="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-slate-100 p-6 shadow-sm ring-1 ring-slate-200 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:ring-primary/30 dark:bg-slate-900/50 dark:ring-slate-800/60"
        :style="`animation-delay: ${index * 0.15}s`"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        
        <div class="relative mb-4 flex items-start justify-between">
          <div class="flex-1">
            <div class="mb-2 flex items-center gap-2">
              <svg
                class="h-6 w-6 text-primary transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <p class="text-xs font-semibold uppercase tracking-wider text-primary">
                Certificate
              </p>
            </div>
            <h3 class="mb-1 text-lg font-semibold text-slate-900 transition-colors group-hover:text-primary dark:text-slate-50">
              {{ certificate.name }}
            </h3>
            <p class="text-sm font-medium text-slate-600 dark:text-slate-300">
              {{ certificate.issuer }}
            </p>
          </div>
        </div>

        <p class="relative mb-4 flex-1 text-sm text-slate-700 dark:text-slate-300">
          {{ certificate.description }}
        </p>

        <div class="relative mt-auto flex flex-col gap-2 border-t border-slate-200 pt-4 dark:border-slate-700">
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-500 dark:text-slate-400">Issued</span>
            <span class="font-semibold text-slate-700 dark:text-slate-300">{{ certificate.date }}</span>
          </div>
          <div v-if="certificate.credentialId" class="flex items-center justify-between text-xs">
            <span class="text-slate-500 dark:text-slate-400">Credential ID</span>
            <span class="font-mono text-slate-600 dark:text-slate-400">{{ certificate.credentialId }}</span>
          </div>
          <a
            v-if="certificate.link"
            :href="certificate.link"
            target="_blank"
            rel="noreferrer"
            class="mt-2 flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-all hover:border-primary hover:bg-primary hover:text-white"
          >
            <span>View Credential</span>
            <svg
              class="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </article>
    </template>
    <slot v-else />
  </div>
</template>

