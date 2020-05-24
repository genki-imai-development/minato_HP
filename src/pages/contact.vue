<template>
  <div class="container contact">
    <section class="title">
      <p class="title--title">お問い合わせ</p>
      <p class="title--description">CONTACT</p>
    </section>
    <section class="contact-table">
      <div>
        <table>
          <tbody>
            <tr>
              <td class="contact-table--kind">
                住所
              </td>
              <td class="contact-table--item">
                〒370-0127 群馬県安中市磯部3丁目3番地19
              </td>
            </tr>
            <tr>
              <td class="contact-table--kind">
                電話番号
              </td>
              <td class="contact-table--item">
                027-386-3710
              </td>
            </tr>
            <tr>
              <td class="contact-table--kind">
                FAX
              </td>
              <td class="contact-table--item">
                minato@ray.ocn.ne.jp
              </td>
            </tr>
            <tr>
              <td class="contact-table--kind">
                お電話受付時間
              </td>
              <td class="contact-table--item">
                8時30分から17時30分
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
      title: '安中市磯部の介護施設 | ほほえみの家 みなと | お問い合わせ'
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
            '安中市磯部の介護施設 ほほえみの家 みなとのホームページです。お問い合わせ情報を掲載しています。'
        }
      ]
    }
  }
}
</script>
