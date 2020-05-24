<template>
  <div>
    <Header />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/header.vue' // headerをインポート
import Footer from '@/components/footer.vue' // footerをインポート
export default {
  components: {
    Header,
    Footer
  }
}
</script>
