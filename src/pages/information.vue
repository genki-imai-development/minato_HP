<template>
  <div class="container information">
    <section class="title">
      <h1 class="title--title">施設案内</h1>
      <p class="title--description">INFORMATION</p>
    </section>
    <section class="information-table">
      <p class="information-table--text">設備案内</p>
      <div>
        <table>
          <tbody>
            <tr class="information-table--heading">
              <th>利用種別</th>
              <th>構造</th>
              <th>定員</th>
              <th>室数</th>
              <th>延べ床面積</th>
            </tr>
            <tr>
              <td class="information-table--kind">
                有料老人ホーム（住宅型）
              </td>
              <td data-label="構造">
                鉄骨造・平屋建て、自動火災通報設備<br />（スプリンクラー完備）
              </td>
              <td data-label="定員">12名</td>
              <td data-label="室数">10室（2人部屋1室）</td>
              <td data-label="延べ床面積">218.96㎡</td>
            </tr>
            <tr>
              <td class="information-table--kind">
                デイサービスセンター（通い型）
              </td>
              <td data-label="構造">
                鉄骨造・平屋建て、自動火災通報設備<br />（スプリンクラー完備）
              </td>
              <td data-label="定員">12名</td>
              <td data-label="室数">-</td>
              <td data-label="延べ床面積">167.87㎡（事務室含む）</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section class="information-image-list">
      <p class="information-image-list--text">お部屋案内</p>
      <div class="columns">
        <div class="column is-4 image-box">
          <div class="image-box-inner">
            <img src="@/assets/images/room01.jpg" />
            <p class="image-box-inner__text">
              デイルーム
            </p>
          </div>
        </div>
        <div class="column is-4 image-box">
          <div class="image-box-inner">
            <img src="@/assets/images/room02.jpg" />
            <p class="image-box-inner__text">
              居室
            </p>
          </div>
        </div>
        <div class="column is-4 image-box">
          <div class="image-box-inner">
            <img src="@/assets/images/room03.jpg" />
            <p class="image-box-inner__text">
              食堂・居間
            </p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4 image-box">
          <div class="image-box-inner">
            <img src="@/assets/images/room04.jpg" />
            <p class="image-box-inner__text">
              浴室
            </p>
          </div>
        </div>
        <div class="column is-4 image-box">
          <div class="image-box-inner">
            <img src="@/assets/images/room05.jpg" />
            <p class="image-box-inner__text">
              くつろぎ和空間
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
      title: '安中市磯部の介護施設 | ほほえみの家 みなと | 施設案内'
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
            '安中市磯部の介護施設 ほほえみの家 みなとのホームページです。ほほえみの家 施設案内を掲載しています。'
        }
      ]
    }
  }
}
</script>
