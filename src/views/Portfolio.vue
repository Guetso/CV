<template>
  <div class="portfolio">
    <header class="portfolio__header">
      <h2 class="portfolio__header__title">Portfolio</h2>
    </header>
    <div class="portfolio__content">
      <Animation></Animation>
      <p class="portfolio__content__disclaimer">En cours de réalisation...</p>
    </div>
  </div>
</template>

<script>
import Animation from '@/components/Animation.vue'
export default {
  name: 'Portfolio',
  components: {
    Animation
  }
}
</script>
