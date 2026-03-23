<template>
  <main v-if="article" class="article-page">
    <div class="article-container">
      <p class="meta">
        {{ article.category }} • {{ formatDate(article.publishedAt) }}
      </p>

      <h1 class="title">{{ article.title }}</h1>

      <p class="excerpt">{{ article.excerpt }}</p>

      <img
        v-if="article.coverImage"
        :src="article.coverImage"
        :alt="article.title"
        class="hero-image"
        @click="openImage(article.coverImage)"
      />

      <ArticleRenderer :article="article" />
    </div>

    <div
      v-if="selectedImage"
      class="image-modal"
      @click="closeImage"
    >
      <button
        class="close-button"
        @click.stop="closeImage"
        aria-label="Close image"
      >
        ×
      </button>

      <img
        :src="selectedImage"
        alt="Full size preview"
        class="modal-image"
        @click.stop
      />
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
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import ArticleRenderer from '../components/blog/ArticleRenderer.vue'

const route = useRoute()
const selectedImage = ref(null)

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

function openImage(src) {
  selectedImage.value = src
}

function closeImage() {
  selectedImage.value = null
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

.meta {
  font-size: 13px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 16px;
}

.title {
  font-size: 42px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 16px;
}

.excerpt {
  font-size: 20px;
  line-height: 1.6;
  color: #374151;
  margin-bottom: 28px;
}

.hero-image {
  width: 100%;
  max-height: 420px;
  display: block;
  border-radius: 16px;
  margin-bottom: 32px;
  object-fit: cover;
  cursor: zoom-in;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  color: #2563eb;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}

.image-modal {
  position: fixed;
  inset: 0;
  background: rgba(17, 24, 39, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 1000;
}

.modal-image {
  max-width: min(1100px, 100%);
  max-height: 90vh;
  border-radius: 16px;
  object-fit: contain;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
}

.close-button {
  position: absolute;
  top: 20px;
  right: 24px;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  color: white;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
}
</style>