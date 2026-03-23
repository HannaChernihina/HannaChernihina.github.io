<template>
  <main v-if="article" class="article-page">
    <div class="article-container">
      <!-- META -->
      <p class="meta">
        {{ article.category }} • {{ formatDate(article.publishedAt) }}
      </p>

      <!-- TITLE -->
      <h1 class="title">{{ article.title }}</h1>

      <!-- EXCERPT -->
      <p class="excerpt">{{ article.excerpt }}</p>

      <!-- IMAGE -->
      <img
        v-if="article.coverImage"
        :src="article.coverImage"
        :alt="article.title"
        class="hero-image"
      />

      <!-- CONTENT -->
      <ArticleRenderer :article="article" />
    </div>
  </main>

  <main v-else class="article-page">
    <div class="article-container">
      <h1>Article introuvable</h1>
      <RouterLink to="/blog" class="back-link">
        ← Retour au blog
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ArticleRenderer from '../components/blog/ArticleRenderer.vue'

const route = useRoute()

const modules = import.meta.glob('../content/blog/articles/*.json', {
  eager: true,
  import: 'default',
})

const articles = Object.values(modules)

const article = computed(() =>
  articles.find((item) => item.slug === route.params.slug)
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
.article-page {
  background: #ffffff;
  min-height: 100vh;
  padding: 40px 20px 80px;
  color: #111827;
}

.article-container {
  max-width: 760px;
  margin: 0 auto;
}

/* META */
.meta {
  font-size: 13px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 16px;
}

/* TITLE */
.title {
  font-size: 42px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 16px;
}

/* EXCERPT */
.excerpt {
  font-size: 20px;
  line-height: 1.6;
  color: #374151;
  margin-bottom: 28px;
}

/* IMAGE */
.hero-image {
  width: 100%;
  border-radius: 16px;
  margin-bottom: 32px;
  object-fit: cover;
}

/* LINK */
.back-link {
  display: inline-block;
  margin-top: 20px;
  color: #2563eb;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}
</style>