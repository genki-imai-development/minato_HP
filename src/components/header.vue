<template>
  <div>
    <header>
      <p class="header__text--name">
        安中市磯部の介護施設 ほほえみの家 みなと
      </p>
      <div class="header disp-large">
        <a href="/"
          ><img
            class="header__logo"
            src="~/assets/images/minato_logo.png"
            alt="minato"
        /></a>
        <span class="header__text--day"
          ><a href="/day"
            ><font-awesome-icon :icon="['fas', 'car-side']" />みなとに通う
            -デイサービスセンター みなと-</a
          ></span
        >
        <span class="header__text--house"
          ><a href="/house"
            ><font-awesome-icon :icon="['fas', 'house-user']" />みなとで暮らす
            -ほほえみの家 みなと-</a
          ></span
        >
        <ul class="contact-list disp-large">
          <li class="contact-list__item">
            <a href="tel:10273863710">
              <b-button class="contact-btn contact-btn--call"
                ><font-awesome-icon
                  :icon="['fas', 'phone-alt']"
                />027-386-3710</b-button
              >
            </a>
          </li>
          <li class="contact-list__item">
            <a
              href="mailto:minato@ray.ocn.ne.jp?subject=ホームページからのお問い合わせ"
            >
              <b-button class="contact-btn contact-btn--contact"
                ><font-awesome-icon
                  :icon="['fas', 'envelope']"
                />お問い合わせ</b-button
              >
            </a>
          </li>
        </ul>
      </div>
      <HeaderNav />
    </header>
  </div>
</template>
<script>
import HeaderNav from '@/components/headerNav.vue'
export default {
  components: {
    HeaderNav
  }
}
</script>
