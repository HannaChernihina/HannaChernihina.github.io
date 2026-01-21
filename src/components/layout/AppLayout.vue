<!-- src/components/layout/AppLayout.vue -->
<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <div class="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-10 sm:py-14">
      <slot name="header"></slot>
      <slot name="nav"></slot>
      <main>
        <slot></slot>
      </main>
      <slot name="footer"></slot>
    </div>
  </div>
</template>