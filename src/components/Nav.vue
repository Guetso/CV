<template>
  <div class="navBar">
    <button class="navBar__upBtn"></button>
    <nav>
      <ul class="navBar__items">
        <li class="navBar__item" v-for="item in navItems" :key="item.id">{{item.text}}</li>
      </ul>
    </nav>
    <button class="navBar__downBtn"></button>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data: function () {
    return {
      navItems: [
        { id: 1, text: 'about me', icon: 'message' },
        { id: 2, text: 'contact me', icon: 'message' },
        { id: 3, text: 'portfolio', icon: 'message' },
        { id: 4, text: 'skills', icon: 'message' }
      ]
    }
  }
}
</script>
