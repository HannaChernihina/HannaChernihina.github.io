// src/stores/index.js
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    activeSection: 'home',
    content: {
    }
  }),
  actions: {
    setActiveSection(sectionId) {
      this.activeSection = sectionId
    }
  }
})