<template>
  <div class="skills">
    <header class="skills__header">
      <p class="skills__header__p">
        La formation "Développeur Web" m'a permis d'acquérir des bases de connaissances larges dans le domaine du developpement web.
        <br />Ajouté à cela mon parcours initial en gestion qui me permet de cerner le contexte dans lequel se développe un projet et ainsi de pouvoir m'y adapter.
      </p>
    </header>

    <section class="skills__techs">
      <h2 class="skills__techs__title">
        <icon-base :width="40" :height="40">
          <component :is="techsTitle.icon" />
        </icon-base>
        <span>{{techsTitle.content}}</span>
      </h2>
      <ul class="skills__techs__list">
        <li v-for="item in techs" :key="item.name">
          <icon-base :width="40" :height="40">
            <component :is="item.icon" />
          </icon-base>
          <span>{{ item.description }}</span>
        </li>
      </ul>
    </section>

    <section class="skills__educations">
      <h2 class="skills__educations__title">
        <icon-base :width="40" :height="40">
          <component :is="educationsTitle.icon" />
        </icon-base>
        <span>{{educationsTitle.content}}</span>
      </h2>
      <ul class="skills__educations__list">
        <li v-for="item in educations" :key="item.name">
          <span class="skills__educations__list__year">{{ item.year }}</span>
          <h3 class="skills__educations__list__title">{{ item.title }}</h3>
          <span class="skills__educations__list__degree">{{ item.name }}</span>
          <span class="skills__educations__list__town">{{ item.town }}</span>
          <p class="skills__educations__list__content">{{ item.content }}</p>
        </li>
      </ul>
    </section>

    <section class="skills__experiences">
      <h2 class="skills__experiences__title">
        <icon-base :width="40" :height="40">
          <component :is="experiencesTitle.icon" />
        </icon-base>
        <span>{{experiencesTitle.content}}</span>
      </h2>
      <ul class="skills__experiences__list">
        <li v-for="item in experiences" :key="item.name">
          <span class="skills__experiences__list__year">{{ item.year }}</span>
          <h3 class="skills__experiences__list__title">{{ item.title }}</h3>
          <span class="skills__experiences__list__degree">{{ item.name }}</span>
          <span class="skills__experiences__list__town">{{ item.town }}</span>
          <p class="skills__experiences__list__content">{{ item.content }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue'
import IconSkill from '../components/icons/IconSkill'
import IconHtml from '../components/icons/IconHtml'
import IconCss from '../components/icons/IconCss'
import IconJs from '../components/icons/IconJs'
import IconGit from '../components/icons/IconGit'
import IconSql from '../components/icons/IconSql'
import IconVue from '../components/icons/IconVue'
import IconSchool from '../components/icons/IconSchool'
import IconCase from '../components/icons/IconCase'

export default {
  name: 'Skills',
  components: {
    IconBase,
    IconSkill,
    IconHtml,
    IconCss,
    IconJs,
    IconGit,
    IconSql,
    IconVue,
    IconSchool,
    IconCase
  },
  data: function () {
    return {
      techsTitle: {
        icon: 'IconSkill',
        content: 'skills'
      },
      techs: [
        {
          name: 'html5',
          icon: 'IconHtml',
          description: 'HTML'
        },
        {
          name: 'css3',
          icon: 'IconCss',
          description: 'CSS'
        },
        {
          name: 'javascript',
          icon: 'IconJs',
          description: 'JS'
        },
        {
          name: 'vuejs',
          icon: 'IconVue',
          description: 'VueJs'
        },
        {
          name: 'mySql',
          icon: 'IconSql',
          description: 'MySql'
        },
        {
          name: 'git',
          icon: 'IconGit',
          description: 'GIT'
        }
      ],
      educationsTitle: {
        icon: 'IconSchool',
        content: 'formations'
      },
      educations: [
        {
          title: 'OpenClassrooms',
          name: 'Certification Professionnelle : Développeur Web',
          year: '2020',
          town: 'À distance',
          content:
            "Cette formation m'a permis d'acquérir les compétences de développeur web. Après avoir analysé les besoins de ses clients, le développeur web crée les fonctionnalités d'un site internet à partir d'un cahier des charges et leur propose une solution originale, sur mesure et adaptée à leurs besoins."
        },
        {
          title: 'Université de Bretagne Occidentale - IAE de Brest',
          name: 'Master II - Comptabilité Contrôle Audit',
          year: '2010-2012',
          town: 'Brest',
          content:
            'Diplôme obtenu en apprentissage. La finalité de cette spécialité est de donner un ensemble complet de connaissances et de compétences professionnelles, transversales et immédiatement opérationnelles dans les domaines de la comptabilité, du contrôle et de l’audit.'
        },
        {
          title: 'Université de Bretagne Occidentale - IAE de Brest',
          name: 'Licence Economie Gestion',
          year: '2010',
          town: 'Brest',
          content:
            'La licence en éco-gestion a pour but de former les futurs économistes issus des bac S et ES à l’ensemble du domaine de l’économie, de la gestion, de la comptabilité, de l’administration des entreprises ou des institutions, des ressources humaines.'
        },
        {
          title: 'Liverpool Hope University',
          name: 'DUETI',
          year: '2009',
          town: 'Liverpool (GB)',
          content:
            "Année Erasmus en Angleterre. Le DUETI est un diplôme de niveau bac + 3, s'effectuant après deux années de DUT. Il offre à des étudiants la possiblité de compléter leur formation universitaire et professionnelle en lui apportant une dimension internationale."
        },
        {
          title: 'IUT de Quimper',
          name: 'DUT Techniques de Commercialisation',
          year: '2006-2008',
          town: 'Quimper',
          content:
            'Le DUT TC forme des commerciaux polyvalents capables de mener une transaction commerciale dans son intégralité (prospection, négociation, fidélisation de la clientèle, réalisation d’un plan de communication commerciale, gestion du stock).'
        }
      ],
      experiencesTitle: {
        icon: 'IconCase',
        content: 'expériences'
      },
      experiences: [
        {
          title: 'Gorioux & Associés',
          name: 'Collaborateur comptable',
          year: '2012 - 2018',
          town: 'Quimper',
          content:
            "Gestion d'un portefeuille client sous la responsabilité de l'Expert Comptable - Clientèle TPE/PME, BIC/BNC ; Révision comptable ; Déclarations fiscales (liasses fiscales, TVA, CVAE, IS…) ; Gestion de la relation clients ; Prévisionnels ; Situations intermédiaires."
        },
        {
          title: 'Gorioux & Associés',
          name: 'Apprenti comptable',
          year: '2011',
          town: 'Quimper',
          content:
            'Année d\'apprentissage dans le cadre du Master 2 CCA. Assistant direct d\'un Expert Comptable. Travaux de saisie comptable et de révision comptable.'
        }
      ]
    }
  }
}
</script>
