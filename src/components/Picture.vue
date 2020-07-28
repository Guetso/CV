<template>
  <div class="picCard">
    <span class="picCard__alt">myPicture</span>
    <div class="picCard__info">
      <h1>Hugo Hémon</h1>
      <div>Développeur web junior</div>
      <ul class="picture__items">
        <li class="picture__item" v-for="item in itemsPic" :key="item.name">
          <a :href="item.link" target="__blank">
          <icon-base :width="25" :height="25" :icon-name="item.name">
            <component :is="item.icon" />
          </icon-base>
          </a>
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
        { name: 'linkedin', icon: 'IconLinkedin', link: 'https://www.linkedin.com/in/hugo-hémon-a03b69168' },
        { name: 'github', icon: 'IconGithub', link: 'https://github.com/Guetso' }
      ]
    }
  }
}
</script>
