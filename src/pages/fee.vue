<template>
  <div class="container fee">
    <section class="title">
      <h1 class="title--title">料金表</h1>
      <p class="title--description">FEE TABLE</p>
    </section>
    <section class="fee-table">
      <p class="fee-table--text">料金表（1割の方の場合）</p>
      <div>
        <table>
          <tbody>
            <tr class="fee-table--heading">
              <th>料金種別</th>
              <th>項目</th>
              <th>料金単価</th>
              <th>備考</th>
            </tr>
            <tr>
              <td class="fee-table--kind" rowspan="5">
                基本料金
              </td>
              <td class="fee-table--item">
                要介護1
              </td>
              <td data-label="料金単価">
                1167円/日
              </td>
              <td class="table__note disp-large" data-label="備考" rowspan="5">
                <p class="table__note--text">
                  ①本利用料はサービス提供時間が7時間以上9時間未満の場合です。<br /><br />②送迎料金は基本料金に含まれます。<br /><br />③おむつ代は別途自己負担となります。
                </p>
              </td>
            </tr>
            <tr>
              <td class="fee-table--item">
                要介護2
              </td>
              <td data-label="料金単価">
                1300円/日
              </td>
            </tr>
            <tr>
              <td class="fee-table--item">
                要介護3
              </td>
              <td data-label="料金単価">
                1438円/日
              </td>
            </tr>
            <tr>
              <td class="fee-table--item">
                要介護4
              </td>
              <td data-label="料金単価">
                1576円/日
              </td>
            </tr>
            <tr>
              <td class="fee-table--item">
                要介護5
              </td>
              <td data-label="料金単価">
                1713円/日
              </td>
            </tr>
            <tr class="disp-small">
              <td class="fee-table--item">
                備考
              </td>
              <td class="table__note--text">
                ①本利用料はサービス提供時間が7時間以上9時間未満の場合です。<br /><br />②送迎料金は基本料金に含まれます。<br /><br />③おむつ代は別途自己負担となります。
              </td>
            </tr>
            <tr>
              <td class="fee-table--kind">その他</td>
              <td class="fee-table--item">昼食代(税別)</td>
              <td data-label="料金単価">480円/日</td>
              <td class="disp-large">おやつ代として50円 別途</td>
              <td class="disp-small">※おやつ代として50円 別途</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section class="fee-addition-list">
      <p class="fee-addition-list--title">加算</p>
      <ul>
        <li class="fee-addition-list--text">
          ・入浴介助加算： 50円（実施した場合）
        </li>
        <li class="fee-addition-list--text">
          ・サービス提供体制加算（I）ロ： 12円/回
        </li>
        <li class="fee-addition-list--text">
          ・介護職員処遇改善加算 Ⅱ： 利用料金の4.3%
        </li>
        <li class="fee-addition-list--text">
          ・介護職員等特定処遇改善加算 Ⅱ： 利用料金の1.0%
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '安中市磯部の介護施設 | ほほえみの家 みなと | 料金表'
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
            '安中市磯部の介護施設 ほほえみの家 みなとのホームページです。料金表を掲載しています。'
        }
      ]
    }
  }
}
</script>
