<template>
  <div class="skills">
    <header class="skills__header">
      <p class="skills__header__p">
        La formation "Développeur Web" m'a permis d'acquérir des bases de connaissances larges dans le domaine du developpement web.
        <br />Ajouté à cela mon parcours initial qui me permet de cerner le contexte dans lequel se développe un projet et ainsi de pouvoir m'y adapter.
      </p>
    </header>

    <section class="skills__techs">
      <h2 class="skills__techs__title">
        <icon-base :width="40" :height="40">
          <component :is="title.icon" />
        </icon-base>
        <span>{{title.content}}</span>
      </h2>
      <div class="container">
        <article class="skill" v-for="skill in skills" :key="skill.name"></article>
      </div>
      <ul v-for="item in techs" :key="item.name">
        <li></li>
      </ul>
    </section>
  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue'
import IconSkill from '../components/icons/IconSkill'

export default {
  name: 'Skills',
  components: {
    IconBase,
    IconSkill
  },
  data: function () {
    return {
      title: {
        icon: 'IconSkill',
        content: 'skills'
      },
      techs: [
        {
          name: 'html5',
          icon: 'HtmlIcon'
        },
        {
          name: 'css3',
          icon: 'CssIcon'
        },
        {
          name: 'javascript',
          icon: 'JsIcon'
        },
        {
          name: 'mySql',
          icon: 'MySqlIcon'
        },
        {
          name: 'git',
          icon: 'GitIcon'
        }
      ]
    }
  }
}
</script>
