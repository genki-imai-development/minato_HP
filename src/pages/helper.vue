<template>
  <div class="container helper">
    <section class="title">
      <h1 class="title--title">ヘルパーご紹介</h1>
      <p class="title--description">HELPER</p>
    </section>
    <section class="helper-description">
      <div class="columns">
        <div class="column is-6">
          <img
            src="@/assets/images/helper02.jpg"
            alt="みなとのヘルパーさんの写真"
          />
        </div>
        <div class="column is-6">
          <div class="text-box">
            <p class="text-box__text">
              ◻︎名前 : 長岡恵美子<br /><br />
              ◻︎星座 : おうし座<br /><br />
              ◻︎血液型 : A型<br /><br />
              ◻︎趣味 : 歌うこと<br /><br />
              ◻︎コメント :
              笑顔の溢れる介護施設です。お年寄りが毎日楽しく過ごせるようにサポートします。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="helper-description">
      <div class="columns">
        <div class="column is-6">
          <img
            src="@/assets/images/helper01.jpg"
            alt="みなとのヘルパーさんの写真"
          />
        </div>
        <div class="text-box">
          <p class="text-box__text">
            ◻︎名前 : 小橋麻里<br /><br />
            ◻︎星座 : おひつじ座<br /><br />
            ◻︎血液型 : AB型<br /><br />
            ◻︎趣味 : 寝ること<br /><br />
            ◻︎コメント :
            自由で楽しい利用者様本位の介護施設です。目線を合わせて自分の家族のように介護の仕事をしています！
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '安中市磯部の介護施設 | ほほえみの家 みなと | ヘルパーご紹介'
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
            '安中市磯部の介護施設 ほほえみの家 みなとのホームページです。ヘルパーをご紹介しています。'
        }
      ]
    }
  }
}
</script>
