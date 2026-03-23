<template>
  <main class="blog-page">
    <div class="container">
      <h1 class="page-title">Blog</h1>

      <!-- FILTER -->
      <div class="filters">
        <button
          :class="['filter-btn', { active: selectedFilter === null }]"
          @click="toggleFilter(null)"
        >
          Tous
        </button>

        <button
          :class="['filter-btn', { active: selectedFilter === 'tech' }]"
          @click="toggleFilter('tech')"
        >
          Tech
        </button>

        <button
          :class="['filter-btn', { active: selectedFilter === 'travel' }]"
          @click="toggleFilter('travel')"
        >
          Travel
        </button>
      </div>

      <!-- GRID -->
      <div class="grid">
        <RouterLink
          v-for="article in filteredArticles"
          :key="article.slug"
          :to="`/blog/${article.slug}`"
          class="card"
        >
          <div class="image-wrapper">
            <img :src="article.coverImage" :alt="article.title" class="cover" />
          </div>

          <div class="card-content">
            <p class="meta">
              {{ article.category }} • {{ formatDate(article.publishedAt) }}
            </p>

            <h2 class="title">{{ article.title }}</h2>

            <p class="excerpt">{{ article.excerpt }}</p>

            <span class="cta">Lire l’article →</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </main>
</template>
<script setup>
import { computed, ref } from 'vue'

const selectedFilter = ref(null)

const modules = import.meta.glob('../content/blog/index.json', {
  eager: true,
  import: 'default',
})

const articles = computed(() => {
  return Object.values(modules)[0] || []
})

const filteredArticles = computed(() => {
  if (!selectedFilter.value) return articles.value

  return articles.value.filter(
    (a) => a.category === selectedFilter.value
  )
})

function toggleFilter(filter) {
  if (selectedFilter.value === filter) {
    selectedFilter.value = null
  } else {
    selectedFilter.value = filter
  }
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>

<style scoped>
/* FILTER BAR */
.filters {
  display: flex;
  gap: 12px;
  margin-bottom: 28px;
}

.filter-btn {
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  background: white;
  cursor: pointer;
  font-size: 14px;
  color: #374151;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  background: #f3f4f6;
}

/* ACTIVE */
.filter-btn.active {
  background: #111827;
  color: white;
  border-color: #111827;
}

.blog-page {
  background: #f9fafb;
  min-height: 100vh;
  padding: 40px 20px 80px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

/* TITLE */
.page-title {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 32px;
  color: #111827;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

/* CARD */
.card {
  display: block;
  background: white;
  border-radius: 18px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;

  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.25s ease;
}

/* HOVER */
.card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}

/* IMAGE */
.image-wrapper {
  overflow: hidden;
}

.cover {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .cover {
  transform: scale(1.08);
}

/* CONTENT */
.card-content {
  padding: 18px;
}

/* META */
.meta {
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 8px;
  text-transform: uppercase;
}

/* TITLE */
.title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #111827;
}

/* EXCERPT */
.excerpt {
  font-size: 14px;
  color: #374151;
  line-height: 1.5;
  margin-bottom: 14px;
}

/* CTA */
.cta {
  font-size: 14px;
  font-weight: 500;
  color: #2563eb;
}
</style>