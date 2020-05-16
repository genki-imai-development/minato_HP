<template>
  <div class="container">
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
