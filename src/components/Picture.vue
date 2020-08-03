<template>
  <div :class="['picCard', 'picCard'+ altClass]">
    <span :class="['picCard__alt', 'picCard__alt'+ altClass]">myPicture</span>
    <div :class="['picCard__info', 'picCard__info'+ altClass]">
      <h1>Hugo Hémon</h1>
      <div>Développeur web junior</div>
      <ul :class="['picture__items', 'picture__items'+ altClass]">
        <li :class="['picture__item', 'picture__item'+ altClass]" v-for="item in itemsPic" :key="item.name">
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
  props: {
    altClass: String
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
