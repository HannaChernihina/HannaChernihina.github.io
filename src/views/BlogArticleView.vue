<template>
  <main v-if="article" class="article-page">
    <img :src="article.coverImage" :alt="article.title" class="hero-image" />

    <div class="article-container">
      <p class="meta">
        {{ article.category }} • {{ formatDate(article.publishedAt) }}
      </p>

      <h1>{{ article.title }}</h1>
      <p class="excerpt">{{ article.excerpt }}</p>

      <ArticleRenderer :article="article" />
    </div>
  </main>

  <main v-else class="article-page">
    <div class="article-container">
      <h1>Article introuvable</h1>
      <RouterLink to="/blog">Retour au blog</RouterLink>
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
  max-width: 980px;
  margin: 0 auto;
  padding: 32px 20px 64px;
}

.hero-image {
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 24px;
  display: block;
  margin-bottom: 24px;
}

.article-container {
  max-width: 760px;
  margin: 0 auto;
}

.meta {
  color: #6b7280;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.04em;
}

.excerpt {
  font-size: 20px;
  line-height: 1.5;
  color: #374151;
  margin-bottom: 28px;
}
</style>