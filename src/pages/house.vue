<template>
  <div class="container house">
    <section class="title">
      <h1 class="title--title disp-large">ほほえみの家 みなと</h1>
      <p class="title--title disp-small">
        ほほえみの家<br />
        みなと
      </p>
      <p class="title--description">HOHOEMI HOUSE</p>
    </section>
    <section class="hohoemi-house">
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
              ほほえみの家「みなと」では、ひとり暮らしや、ご自宅での介護に不安を抱える皆様を全面的にサポート致します。ケアスタッフが２４時間体制で常駐していますので、安心してご入居いただけます。どうぞお気軽にご相談ください。
            </p>
          </div>
          <div class="text-box">
            <h3 class="text-box__title">
              - サービス内容 -
            </h3>
            <p class="text-box__text">
              ご入居いただくお部屋は全室個室で、エアコン、コール、照明、安全手すり、火災報知器、テレビ端子を完備しております。<br />
              日中はデイルームのご利用も可能です。<br />
              専門のケアスタッフが常駐し、可能な限り「みなと」で快適な生活が送れるようサポートいたします。
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
      title: '安中市磯部の介護施設 | ほほえみの家 みなと | ほほえみの家 みなと'
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
            '安中市磯部の介護施設 ほほえみの家 みなとのホームページです。ほほえみの家 みなとに関する情報を掲載しています。'
        }
      ]
    }
  }
}
</script>
