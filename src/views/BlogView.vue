<template>
  <main class="blog-page">
    <header class="hero">
      <h1>Blog</h1>
      <p>Notes, articles et guides classés par catégorie.</p>
    </header>

    <div class="tabs">
      <button
        :class="{ active: activeTab === 'tech' }"
        @click="activeTab = 'tech'"
      >
        Tech
      </button>

      <button
        :class="{ active: activeTab === 'travel' }"
        @click="activeTab = 'travel'"
      >
        Travel
      </button>
    </div>

    <section class="grid">
      <article v-for="post in filteredPosts" :key="post.slug" class="card">
        <img :src="post.coverImage" :alt="post.title" class="cover" />

        <div class="card-body">
          <div class="meta">
            <span class="badge">{{ post.category }}</span>
            <span>{{ formatDate(post.publishedAt) }}</span>
          </div>

          <h2>{{ post.title }}</h2>
          <p>{{ post.excerpt }}</p>

          <RouterLink :to="`/blog/${post.slug}`" class="link">
            Lire l’article
          </RouterLink>
        </div>
      </article>
    </section>

    <p v-if="filteredPosts.length === 0" class="empty">
      Aucun article dans cette catégorie pour le moment.
    </p>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import posts from '../content/blog/index.json'

const activeTab = ref('tech')

const sortedPosts = computed(() =>
  [...posts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
)

const filteredPosts = computed(() =>
  sortedPosts.value.filter((post) => post.category === activeTab.value)
)

function formatDate(date) {
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style scoped>
.blog-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 20px 64px;
}

.hero {
  margin-bottom: 24px;
}

.tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.tabs button {
  border: 0;
  padding: 10px 16px;
  border-radius: 999px;
  cursor: pointer;
  background: #e5e7eb;
}

.tabs button.active {
  background: #111827;
  color: white;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.card {
  overflow: hidden;
  border-radius: 18px;
  background: white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

.cover {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.card-body {
  padding: 18px;
}

.meta {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 13px;
  margin-bottom: 10px;
  color: #6b7280;
}

.badge {
  text-transform: uppercase;
  font-weight: 700;
}

.link {
  display: inline-block;
  margin-top: 12px;
  font-weight: 700;
}

.empty {
  margin-top: 24px;
  color: #6b7280;
}
</style>