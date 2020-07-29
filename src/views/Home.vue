<template>
  <div class="home">
    <header class="home__header">
      <h2 class="home__header__title"> &Agrave; propos</h2>

      <aside class="home__header__aside">
        32 ans
        <span>/</span> Finistère
        <span>/</span> En recherche d'alternance
      </aside>

      <p class="home__header__content">
        Suite à une formation en marketing, puis en gestion et comptabilité, j'ai travaillé en tant que collaborateur comptable au sein d'un cabinet d'expertise Quimpérois.
        <br />Après plusieurs années à ce poste j'ai souhaité me reconvertir et revenir à mes premières aspirations : l'informatique et le web.
      </p>
      <p class="home__header__content">
        J'ai validé avec succès la formation
        <a
          href="https://openclassrooms.com/fr/paths/185-developpeur-web"
          target="__blank"
        >Développeur Web</a> dispensée par le site de formation en ligne OpenClassrooms.
        <br />Après avoir acquis les bases du développement web, mon objectif est désormais d'acquerir de nouvelles connaissances et de monter en compétences.
      </p>
      <p class="home__header__content home__header__content--strong">
        Je suis donc à la recherche d'un
        <strong>contrat en alternance</strong> dans le cadre de la formation
        <a
          href="https://openclassrooms.com/fr/paths/59-developpeur-dapplication-php-symfony"
          target="__blank"
        >PHP/Symfony</a> d'OpenClassrooms.
      </p>
    </header>

    <section class="home__skills">
      <h2 class="home__skills__title">Compétences</h2>
      <div class="container">
        <article class="skill" v-for="skill in skills" :key="skill.name">
          <header class="skill__header">
            <icon-base :width="30" :height="30" :icon-name="skill.name">
              <component :is="skill.header" />
            </icon-base>
          </header>
          <h3 class="skill__title">{{skill.name}}</h3>
          <p v-html="skill.content" class="skill__content"></p>
        </article>
      </div>
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
          name: 'WebDev',
          content:
            '<strong>Développer</strong> une application web répondant aux standards actuels.'
        },
        {
          header: 'iconSeo',
          name: 'SEO',
          content:
            'Optimiser une application pour améliorer son <strong>référencement</strong>.'
        },
        {
          header: 'iconDb',
          name: 'Base de données',
          content:
            'Création d\'<strong>API</strong> et mise en place d\'une <strong>base de données</strong>.'
        },
        {
          header: 'iconSecu',
          name: 'Sécurité',
          content:
            'Sensibilisé à la sécurité des données et à la protection des utilisateurs sur le Web. Prise en compte des recommandations de l\'<strong>OWASP</strong> et du <strong>RGPD</strong>.'
        }
      ]
    }
  }
}
</script>
