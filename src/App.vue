<template>
  <div id="app">
    <Nav></Nav>
    <Picture></Picture>
    <router-view />

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
