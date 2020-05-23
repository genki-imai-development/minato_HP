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
              <a href="/schedule">
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
        <div class="columns disp-large">
          <div class="column is-6 feature-box">
            <div class="feature-box-inner">
              <h3 class="feature-box-inner__title">
                みなとに通う -デイサービスセンター みなと-
              </h3>
              <p class="feature-box-inner__text">
                デイサービスは、 ご自宅から施設に通っていただく、
                日帰りサービスです。ご家族の負担を軽減し、ご利用者様が楽しく充実した時間をお過ごしいただけるようサポートいたします。
              </p>
              <div class="feature-box__btn">
                <a href="/day">もっと詳しく見る</a>
              </div>
            </div>
          </div>
          <div class="column is-6 feature-box">
            <a href="/helper">
              <div class="feature-box-inner">
                <img src="@/assets/images/helper01.jpg" />
              </div>
            </a>
          </div>
        </div>
        <div class="columns disp-small">
          <div class="column is-12 feature-box">
            <div class="feature-box-inner">
              <h3 class="feature-box-inner__title">
                みなとに通う<br />
                -デイサービスセンター みなと-
              </h3>
              <img src="@/assets/images/helper01.jpg" />
              <p class="feature-box-inner__text">
                デイサービスは、 ご自宅から施設に通っていただく、
                日帰りサービスです。ご家族の負担を軽減し、ご利用者様が楽しく充実した時間をお過ごしいただけるようサポートいたします。
              </p>
              <div class="feature-box__btn">
                <a href="/day">もっと詳しく見る</a>
              </div>
            </div>
          </div>
        </div>
        <div class="columns disp-large">
          <div class="column is-6 feature-box">
            <div class="feature-box-inner">
              <a href="/information">
                <img src="@/assets/images/floor1004.jpg" />
              </a>
            </div>
          </div>
          <div class="column is-6 feature-box">
            <div class="feature-box-inner">
              <h3 class="feature-box-inner__title">
                みなと-みなとで暮らす -ほほえみの家 みなと-
              </h3>
              <p class="feature-box-inner__text">
                ほほえみの家「みなと」では、ひとり暮らしや、ご自宅での介護に不安を抱える皆様を全面的にサポート致します。ケアスタッフが２４時間体制で常駐していますので、安心してご入居いただけます。どうぞお気軽にご相談ください。
              </p>
              <div class="feature-box__btn">
                <a href="/house">もっと詳しく見る</a>
              </div>
            </div>
          </div>
        </div>
        <div class="columns disp-small">
          <div class="column is-12 feature-box">
            <div class="feature-box-inner">
              <h3 class="feature-box-inner__title">
                みなと-みなとで暮らす<br />
                -ほほえみの家 みなと-
              </h3>
              <img src="@/assets/images/floor1004.jpg" />
              <p class="feature-box-inner__text">
                ほほえみの家「みなと」では、ひとり暮らしや、ご自宅での介護に不安を抱える皆様を全面的にサポート致します。ケアスタッフが２４時間体制で常駐していますので、安心してご入居いただけます。どうぞお気軽にご相談ください。
              </p>
              <div class="feature-box__btn">
                <a href="/house">もっと詳しく見る</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="news">
      <div class="news-inner">
        <h2>お知らせ</h2>
        <ul>
          <li>
            <time class="time" datetime="2020-06-03">2020.09.03</time>
            <p>『みなとのホームページ』リニューアルしました</p>
          </li>
          <li>
            <time class="time" datetime="2020-05-03">2020.05.03</time>
            <p>
              新型コロナウイルス感染症の感染防止のため、5月いっぱいまでご家族様も面会禁止とさせていただきます。詳しくは、みなとまでお問い合わせくださいませ。
            </p>
          </li>
          <li>
            <time class="time" datetime="2020-04-03">2020.04.03</time>
            <p>スタッフ募集中！！詳しくはお電話でご質問ください。</p>
          </li>
          <li class="disp-none" :class="{ dblock: isMore }">
            <time class="time" datetime="2018-06-03">2020.06.03</time>
            <p>
              『みなと』の<a href="http://blog.goo.ne.jp/0273863710">
                ブログ投稿
              </a>
              してます！！
            </p>
          </li>
        </ul>
        <div class="news-box__btn" :class="{ dnone: isMore }">
          <a @click="more">もっと詳しく見る</a>
        </div>
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
  },
  data() {
    return {
      isMore: false
    }
  },
  methods: {
    more() {
      this.isMore = true
    }
  }
}
</script>
