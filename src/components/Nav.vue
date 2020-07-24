<template>
  <div class="navBar">
    <div class="navBar__upBtn">
      <icon-base width="30" height="30" icon-name="menu">
        <icon-menu />
      </icon-base>
    </div>
    <nav>
      <ul class="navBar__items">
        <li class="navBar__item" v-for="item in $router.options.routes" :key="item.meta.icon.name">
          <icon-base :width="item.meta.icon.width || 30 " :height="item.meta.icon.height || 30" :icon-name="item.meta.icon.name">
            <component :is="item.meta.icon.component" />
          </icon-base>
        </li>
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
    return {
    }
  }
}
</script>
