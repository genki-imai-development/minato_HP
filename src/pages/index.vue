<template>
  <div class="container top">
    <section class="slider">
      <carousel
        :per-page="1"
        :autoplay="true"
        :loop="true"
        :pagination-padding="5"
        :autoplay-timeout="4000"
      >
        <slide>
          <img src="@/assets/images/slide1.jpg" />
        </slide>
        <slide>
          <img src="@/assets/images/slide2.jpg" />
        </slide>
        <slide>
          <img src="@/assets/images/slide1.jpg" />
        </slide>
        <slide>
          <img src="@/assets/images/slide2.jpg" />
        </slide>
        <slide>
          <img src="@/assets/images/slide2.jpg" />
        </slide>
      </carousel>
    </section>
    <section class="special">
      <div class="special-inner">
        <h2>みなとをご紹介</h2>
        <div class="columns">
          <div class="column is-4 special-box">
            <a href="/helper">
              <div class="special-box-inner">
                <img src="@/assets/images/helper01.jpg" />
                <p class="special-box-inner__text">
                  みなとのヘルパーさんをご紹介！
                </p>
              </div>
            </a>
          </div>
          <div class="column is-4 special-box">
            <div class="special-box-inner">
              <a href="/day">
                <img src="@/assets/images/minato_photo1.png" />
                <p class="special-box-inner__text">
                  デイサービスの1日をご紹介！
                </p>
              </a>
            </div>
          </div>
          <div class="column is-4 special-box">
            <div class="special-box-inner">
              <a href="/information">
                <img src="@/assets/images/floor1004.jpg" />
                <p class="special-box-inner__text">
                  施設内を写真でご紹介いたします
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="feature">
      <div class="feature-inner">
        <h2>みなとでの過ごしかた</h2>
        <div class="columns">
          <div class="column is-4 special-box"></div>
          <div class="column is-4 special-box"></div>
          <div class="column is-4 special-box"></div>
        </div>
      </div>
    </section>
    <section class="news">
      <div class="news-inner">
        <h2>お知らせ</h2>
      </div>
    </section>
  </div>
</template>
<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
export default {
  components: {
    Carousel,
    Slide
  }
}
</script>
