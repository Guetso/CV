<template>
  <div class="home">
    <header class="home__header">
      <h1 class="home__header__title">à propos de moi</h1>

      <aside class="home__header__aside">
        68 ans
        <span>/</span> Texase
        <span>/</span> En recherche d'alternance
      </aside>

      <p class="home__header__content">
        Suite à une formation en marketing, puis en gestion et comptabilité, je fus embauché en tant que collaborateur comptable au sein d'un cabinet d'expertise comptable. Après plusieurs années à ce poste j'ai souhaité me reconvertir et revenir à mes premières aspirations : l'informatique et le web.
        <br />J'ai validé avec succès la formation
        <em>"Développeur Web"</em> dispensée par le site de formation en ligne OpenClassrooms, et me lance aujourd'hui en tant que développeur web freelance.
        <br />Fort de mes compétences en développement, couplées à mes connaissances du monde de l'entreprise je suis capable d'offrir des solutions adaptées aux besoins de mes clients.
      </p>
    </header>

    <section class="home__skills">
      <h2 class="home__skills__title">compétences</h2>

      <article class="skill" v-for="skill in skills" :key="skill.name">
        <header class="skill__header">
          <icon-base :width="25" :height="25" :icon-name="skill.name">
            <component :is="skill.header" />
          </icon-base>
        </header>
        <h3 class="skill__title">{{skill.name}}</h3>
        <p class="skill_content">{{skill.content}}</p>
      </article>
    </section>
  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue'
import IconCode from '../components/icons/IconCode'
import IconSeo from '../components/icons/IconSeo'
import IconDb from '../components/icons/IconDb'
import IconSecu from '../components/icons/IconSecu'
export default {
  name: 'Home',
  components: {
    IconBase,
    IconCode,
    IconSeo,
    IconDb,
    IconSecu
  },
  data: function () {
    return {
      skills: [
        {
          header: 'IconCode',
          name: 'développement',
          content:
            'Building a custom tailored solution based on your technical specification.'
        },
        {
          header: 'iconSeo',
          name: 'SEO',
          content:
            'Audit your website, perform technical improvements and write meta tags.'
        },
        {
          header: 'iconDb',
          name: 'développement',
          content:
            'Building a custom tailored solution based on your technical specification.'
        },
        {
          header: 'iconSecu',
          name: 'Protection des données',
          content:
            'Strategy with leading data protection technology to safeguard your critical data.'
        }
      ]
    }
  }
}
</script>
