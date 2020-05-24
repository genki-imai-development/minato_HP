<template>
  <div class="container availability">
    <section class="title">
      <h1 class="title--title">空き状況</h1>
      <p class="title--description">AVAILABILITY</p>
    </section>
    <section class="availability-day">
      <h2 class="availability-day--title">デイサービス みなと</h2>
      <p class="availability-day--text">
        現在1名様の空きがございます。施設利用をご希望の方はお問い合わせください。
      </p>
      <p class="availability-day--note">
        ※2020年6月1日更新
      </p>
    </section>
    <section class="availability-house">
      <h2 class="availability-house--title">ほほえみの家 みなと</h2>
      <p class="availability-house--text">
        申し訳ありませんが、現在1名様の空きがございません。
      </p>
      <p class="availability-house--note">※2020年6月1日更新</p>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '安中市磯部の介護施設 | ほほえみの家 みなと | 空き状況'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '安中市磯部の介護施設 ほほえみの家 みなとのホームページです。空き状況を掲載しています。'
        }
      ]
    }
  }
}
</script>
