<template>
  <div>
    <Header />
    <Slider />
    <!-- <main>
      <nuxt />
    </main> -->
    <!-- <Footer /> -->
  </div>
</template>
<script>
import Header from '@/components/header.vue' // headerをインポート
import Slider from '@/components/slider.vue' // sliderをインポート
// import Footer from "@/components/footer.vue";
export default {
  components: {
    Header,
    Slider
    // Footer
  }
}
</script>
