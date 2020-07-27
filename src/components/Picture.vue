<template>
  <div class="picCard">
    <span class="picCard__alt">myPicture</span>
    <div class="picCard__info">
      <h2>George Abitbol</h2>
      <div>Développeur web junior</div>
      <ul class="picture__items">
        <li class="picture__item" v-for="item in itemsPic" :key="item.name">
          <icon-base :width="25" :height="25" :icon-name="item.name">
            <component :is="item.icon" />
          </icon-base>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue'
import IconLinkedin from '../components/icons/IconLinkedin'
import IconGithub from '../components/icons/IconGithub'
export default {
  name: 'Picture',
  components: {
    IconBase,
    IconLinkedin,
    IconGithub
  },
  data: function () {
    return {
      itemsPic: [
        { name: 'linkedin', icon: 'IconLinkedin' },
        { name: 'github', icon: 'IconGithub' }
      ]
    }
  }
}
</script>
