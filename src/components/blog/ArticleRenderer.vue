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
.section {
  margin-top: 28px;
}

.section h2 {
  margin-bottom: 12px;
}

.section p {
  line-height: 1.8;
  margin-bottom: 14px;
}

.bullets {
  margin: 12px 0 0 18px;
  padding: 0;
}

.bullets li {
  line-height: 1.7;
  margin-bottom: 8px;
}
</style>