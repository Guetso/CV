<template>
  <div id="app">
    <Nav></Nav>
    <Picture></Picture>
    <transition name="slither" mode="out-in">
      <section class="main" :key="$route.name">
        <router-view />
      </section>
    </transition>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue' // @ is an alias to /src
import Picture from '@/components/Picture.vue'

export default {
  name: 'app',
  components: {
    Nav,
    Picture
  }
}
</script>

<style lang="scss">
@import './sass/main';
</style>
