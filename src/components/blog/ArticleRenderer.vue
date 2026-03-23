<template>
  <section class="article-content">
    <section
      v-for="section in article.sections"
      :key="section.heading"
      class="section"
    >
      <h2>{{ section.heading }}</h2>

      <p
        v-for="paragraph in section.paragraphs || []"
        :key="paragraph"
      >
        {{ paragraph }}
      </p>

      <!-- IMAGES -->
      <div
        v-if="section.images && section.images.length"
        class="section-images"
      >
        <figure
          v-for="image in section.images"
          :key="image.src"
          class="article-figure"
        >
          <img
            :src="image.src"
            :alt="image.alt || section.heading"
            class="section-image"
            @click="openImage(image.src)"
          />

          <figcaption v-if="image.caption">
            {{ image.caption }}
          </figcaption>
        </figure>
      </div>

      <ul v-if="section.bullets && section.bullets.length" class="bullets">
        <li v-for="bullet in section.bullets" :key="bullet">
          {{ bullet }}
        </li>
      </ul>
    </section>

    <!-- MODAL -->
    <div
      v-if="selectedImage"
      class="image-modal"
      @click="closeImage"
    >
      <button
        class="close-button"
        @click.stop="closeImage"
      >
        ×
      </button>

      <img
        :src="selectedImage"
        class="modal-image"
        @click.stop
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  article: {
    type: Object,
    required: true,
  },
})

const selectedImage = ref(null)

function openImage(src) {
  selectedImage.value = src
}

function closeImage() {
  selectedImage.value = null
}
</script>

<style scoped>
.article-content {
  color: #111827;
}

.section {
  margin-top: 36px;
}

.section h2 {
  margin-bottom: 14px;
  font-size: 28px;
  line-height: 1.3;
}

.section p {
  line-height: 1.8;
  margin-bottom: 14px;
  font-size: 17px;
  color: #1f2937;
}

/* IMAGES */
.section-images {
  margin: 24px 0 16px;
  display: grid;
  gap: 18px;
}

.article-figure {
  margin: 0;
}

.section-image {
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 16px;
  cursor: zoom-in;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.article-figure figcaption {
  margin-top: 10px;
  font-size: 14px;
  color: #6b7280;
}

/* BULLETS */
.bullets {
  margin: 16px 0 0 20px;
}

.bullets li {
  line-height: 1.7;
  margin-bottom: 10px;
}

/* MODAL */
.image-modal {
  position: fixed;
  inset: 0;
  background: rgba(17, 24, 39, 0.9);
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
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.close-button {
  position: absolute;
  top: 20px;
  right: 24px;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 28px;
  cursor: pointer;
}
</style>