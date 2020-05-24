<template>
  <div class="container schdule">
    <section class="title">
      <p class="title--title">スケジュール</p>
      <p class="title--description">SCHEDULE</p>
    </section>
    <section class="schedule-box">
      <p class="oneday--text">デイサービスの1日</p>
      <div class="schedule-table">
        <img class="image01 disp-large" src="@/assets/images/schdule01.jpg" />
        <img class="image02 disp-large" src="@/assets/images/schdule02.jpg" />
        <table>
          <tbody>
            <tr>
              <th><span>8:30</span></th>
              <td>
                <p class="schedule-box--title">お出迎え</p>
                <p class="schedule-box--text">ご機嫌を伺います</p>
              </td>
            </tr>
            <tr>
              <th><span>9:00</span></th>
              <td>
                <p class="schedule-box--title">バイタルチェック</p>
                <p class="schedule-box--text">血液・体温・血中酸素</p>
              </td>
            </tr>
            <tr>
              <th><span>10:00</span></th>
              <td>
                <p class="schedule-box--title">ティータイム</p>
                <p class="schedule-box--text">温かいお茶をどうぞ</p>
              </td>
            </tr>
            <tr>
              <th><span>10:30</span></th>
              <td>
                <p class="schedule-box--title">ご入浴</p>
                <p class="schedule-box--text">気持ち良いですよ</p>
              </td>
            </tr>
            <tr>
              <th><span>12:30</span></th>
              <td>
                <p class="schedule-box--title">ランチタイム</p>
                <p class="schedule-box--text">美味しいと言われています</p>
              </td>
            </tr>
            <tr>
              <th><span>14:00</span></th>
              <td>
                <p class="schedule-box--title">レクリエーション</p>
                <p class="schedule-box--text">歌やゲームを楽しみます</p>
              </td>
            </tr>
            <tr>
              <th><span>15:00</span></th>
              <td>
                <p class="schedule-box--title">おやつ</p>
                <p class="schedule-box--text">みなとでは無料です</p>
              </td>
            </tr>
            <tr>
              <th><span>16:30</span></th>
              <td>
                <p class="schedule-box--title">お帰り</p>
                <p class="schedule-box--text">お疲れ様でした</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '安中市磯部の介護施設 | ほほえみの家 みなと | デイサービスの1日'
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
            '安中市磯部の介護施設 ほほえみの家 みなとのホームページです。デイサービスの1日をご紹介しています。'
        }
      ]
    }
  }
}
</script>
