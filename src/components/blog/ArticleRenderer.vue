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
  </section>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
})
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
  color: #111827;
}

.section p {
  line-height: 1.8;
  margin-bottom: 14px;
  color: #1f2937;
  font-size: 17px;
}

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
  display: block;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.article-figure figcaption {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.5;
  color: #6b7280;
}

.bullets {
  margin: 16px 0 0 20px;
  padding: 0;
}

.bullets li {
  line-height: 1.7;
  margin-bottom: 10px;
  color: #1f2937;
}
</style>