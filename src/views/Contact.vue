<template>
  <div class="contact">
    <header class="contact__header">
      <h2 class="contact__header__title">Contact</h2>
      <p class="contact__header__aside">Pour me contacter:</p>
    </header>
    <section class="contact__content">
      <div class="contact__content__map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d241732.90036984472!2d-3.7441654587412514!3d47.978993274646506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1596020638454!5m2!1sfr!2sfr"
        width="600"
        height="250"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
      </div>
      <ul class="contact__content__list">
        <li v-for="item in contact_items" :key="item.name">
          <icon-base :width="30" :height="30" :icon-name="item.icon">
            <component :is="item.icon" />
          </icon-base>
          <span v-html="item.content"></span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue'
import IconAdress from '../components/icons/IconAdress'
import IconTel from '../components/icons/IconTel'
import IconMail from '../components/icons/IconMail'

export default {
  name: 'Contact',
  components: { IconBase, IconAdress, IconTel, IconMail },
  data: function () {
    return {
      contact_items: [
        { name: 'Number', content: '+33(0) 6 37 81 40 22', icon: 'IconTel' },
        {
          name: 'mail',
          content:
            '<a href="mailto:hugo.hemon@orange.fr">hugo.hemon@orange.fr</a>',
          icon: 'IconMail'
        },
        {
          name: 'adress',
          content: '29000 Quimper',
          icon: 'IconAdress'
        }
      ]
    }
  }
}
</script>
