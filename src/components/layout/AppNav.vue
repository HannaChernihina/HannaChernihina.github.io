<!-- src/components/layout/AppNav.vue -->
<template>
  <v-bottom-navigation
    v-model="activeItem"
    app
    color="primary"
    grow
  >
    <v-btn
      v-for="link in navLinks"
      :key="link.id"
      :value="link.id"
      @click="navigate(link.id)"
    >
      <span>{{ link.label }}</span>
      <v-icon>{{ link.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'AppNav',
  setup() {
    const store = useStore()
    
    const navLinks = computed(() => store.state.navLinks)
    const activeItem = computed({
      get: () => store.state.activeSection,
      set: (value) => store.commit('setActiveSection', value)
    })

    const navigate = (sectionId) => {
      store.dispatch('scrollToSection', sectionId)
    }

    return {
      navLinks,
      activeItem,
      navigate
    }
  }
}
</script>