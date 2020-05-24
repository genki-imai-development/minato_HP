<template>
  <div class="container day">
    <section class="title">
      <p class="title--title disp-large">デイサービスセンター みなと</p>
      <p class="title--title disp-small">
        デイサービスセンター<br />
        みなと
      </p>
      <p class="title--description">DAY SERVICE</p>
    </section>
    <section class="day-service">
      <div class="columns">
        <div class="column is-6">
          <img src="@/assets/images/day_house.png" />
        </div>
        <div class="column is-6">
          <div class="text-box">
            <h3 class="text-box__title">
              - サービス概要 -
            </h3>
            <p class="text-box__text">
              デイサービスは、
              ご自宅から施設(地図)に通っていただく、日帰りサービスです。ご家族の負担を軽減し、ご利用者様が楽しく充実した時間をお過ごしいただけるようサポートいたします。
            </p>
          </div>
          <div class="text-box">
            <h3 class="text-box__title">
              - サービス内容 -
            </h3>
            <p class="text-box__text">
              ①送迎(ご自宅までお迎えに参ります)<br />
              ②機能訓練(可能な範囲で体を動かします)<br />
              ③食事(食事の補助をさせていただきます)<br />
              ④アクティビティ・レクリエーション(音楽の合唱やゲームをします)<br />
              ⑤入浴(入浴のお手伝いさせていただきます)<br />
              ⑥調理(ご利用者に合わせた食事をご用意します)<br />
              ⑦生活相談(お話を伺います) ⑧排泄(排泄のお手伝いさせていただきます)
            </p>
          </div>
          <div class="text-box text-box--note">
            <p class="text-box__text">
              ◻︎ご利用できる方：要支援１～２、要介護１～５の方<br />
              ◻︎送迎エリア：安中市内<br />
              ※送り迎え時間・場所につきましては、ご利用者様のご希望で調節いたしますので、お気軽にご相談ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title:
        '安中市磯部の介護施設 | ほほえみの家 みなと | デイサービスセンター みなと'
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
            '安中市磯部の介護施設 ほほえみの家 みなとのホームページです。デイサービスセンター みなとに関する情報を掲載しています。'
        }
      ]
    }
  }
}
</script>
