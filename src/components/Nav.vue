<template>
  <div class="navBar">
    <div class="navBar__upBtn">
      <icon-base width="30" height="30" icon-name="menu">
        <icon-menu />
      </icon-base>
    </div>
    <nav>
      <ul class="navBar__items">
        <audio preload="auto" ref="audioElm" src="../assets/click.mp3"></audio>
        <router-link
          tag="li"
          class="navBar__item"
          exact-active-class="navBar__item--isActive"
          :to="{ name: item.name }"
          v-for="item in $router.options.routes"
          :key="item.meta.icon.name"
          @click.native="play"
        >
          <icon-base width="30" height="30" :icon-name="item.meta.icon.name">
            <component :is="item.meta.icon.component" />
          </icon-base>
        </router-link>
      </ul>
    </nav>
    <button class="navBar__downBtn">
      <icon-base width="40" height="40" icon-name="cloud" iconColor="#04b176">
        <icon-cloud />
      </icon-base>
    </button>
  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue'
import IconMenu from '@/components/icons/IconMenu.vue'
import IconCloud from '@/components/icons/IconCloud.vue'
import IconAbout from '@/components/icons/IconAbout.vue'

export default {
  name: 'Nav',
  components: {
    IconBase,
    IconMenu,
    IconCloud,
    IconAbout
  },
  data: function () {
    return {}
  },
  methods: {
    play: function (event) {
      this.$refs.audioElm.play()
    }
  }
}
</script>
