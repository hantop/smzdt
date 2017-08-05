<template>
  <div>
  
    <div class="pj_banner">
      <img src="../assets//new_img/level_banner.png">
    </div>
  
    <div class="big_cell" style="margin-top: -8px">
  
      <div class="title">
        风控评级
        <span class="level orange">未评级</span>
  
      </div>
      <div>
        <table cellspacing="0" cellpadding="0" class="table_3">
          <tr>
            <td>2014年上线，运营时间超过3年</td>
            <td class="orange">+2</td>
          </tr>
          <tr>
            <td>2014年上线，运营时间超过3年</td>
            <td class="orange">+2</td>
          </tr>
          <tr>
            <td>2014年上线，运营时间超过3年</td>
            <td class="orange">+2</td>
          </tr>
  
        </table>
      </div>
  
    </div>
  
    <div class="big_cell">
  
      <div class="title">
        平台监控
  
      </div>
      <div>
        <table cellspacing="0" cellpadding="0" class="table_3">
          <tr>
            <td>网贷天眼评级</td>
            <td class="skyblue">正常</td>
          </tr>
          <tr>
            <td>网贷天眼评级</td>
            <td class="">-</td>
          </tr>
          <tr>
            <td>网贷天眼评级</td>
            <td class="red">异常</td>
          </tr>
  
        </table>
      </div>
  
    </div>
    <div class="big_cell">
  
      <div class="title">
        理财师评价
      </div>
      <div>
        <div class="content pingjia">
          <p>钱保姆成立于14年，注册资本1亿元，近期又获得了1亿元的战略融资，表现出了较强的资本实力。2月获得北京银行的存管资格，ICP证也拿到了，监管部门的硬性规定，差不多齐了。 </p>
          <p>平台累计用户超百万，成交金额超百亿，这反映出平台良好的发展态势。平台项目聚焦于车贷和供应链贷，但目前并未有可投标的。近期与资产管理公司合作推出新资产项目，项目披露信息尚可。借款企业承诺到期回购，华夏鑫航（厦门）担保有限公司提供担保。</p>
        </div>
      </div>
  
    </div>
    <div class="big_cell">
  
      <div class="title">
        引用资料
      </div>
      <div>
        <div class="content">
          <h5 class="relative">
            <i class="point"></i>
            <a style="margin-left: 10px" href="http://www.wdzj.com/dangan/trj/" class="openurl">投融家档案</a>
          </h5>
          <h5 class="relative">
            <i class="point"></i>
            <a style="margin-left: 10px" href="http://www.sohu.com/a/129408358_429979" class="openurl">投融家白皮书||汽车金融与个人信贷产品盛大发布</a>
          </h5>
          <h5 class="relative">
            <i class="point"></i>
            <a style="margin-left: 10px" href="http://finance.591hx.com/article/2017-06-27/0000664818s.shtml" class="openurl">投融家CEO胡德华获2017 中国互联网金融管理创新人物荣誉</a>
          </h5>
        </div>
      </div>
  
    </div>
  
  </div>
</template>
<script>
  export default {
    created () {
      console.log(window.g_data)
    }
  }
</script>


<style scoped>
  .pj_banner {
    padding: 15px 6px 0;
    background-color: #fff;
  }
  
  .pj_banner img {
    display: block;
    width: 100%
  }
  
  .big_cell {
    background-color: #fff;
    padding: 0 15px;
    margin-top: 10px;
  }
  
  .big_cell>.title {
    padding: 12px 0 10px;
    position: relative;
    font-weight: bold;
    font-size: 15px;
    border-bottom: 1px solid rgb(220, 220, 220);
  }
  
  .big_cell>.title span {
    float: right;
  }
  
  .big_cell>.title p {
    font-weight: normal;
    font-size: 12px;
  }
  
  
  
  .table_1,
  .table_2,
  .table_3 {
    display: table;
    width: 100%;
    padding-bottom: 6px;
  }
  
  .table_1 tbody,
  .table_2 tbody.table_3 {
    display: table;
    width: 100%;
  }
  
  .table_1 .link {
    color: #289cf5 !important;
    text-decoration: underline;
  }
  
  .table_1 .link_done {
    color: #374259 !important;
    text-decoration: underline;
  }
  
  .table_1 .title {
    font-weight: 400 !important;
    font-size: 12.5px;
    opacity: 0.7;
  }
  
  .table_1 tr td,
  .table_2 tr td,
  .table_3 tr td {
    text-align: center;
    font-size: 12.5px;
    padding: 8px 0;
  }
  
  .table_1 tr td:nth-child(1) {
    width: 20%;
  }
  
  .table_1 tr td:nth-child(2) {
    width: 25%;
  }
  
  .table_1 tr td:nth-child(2) {
    width: 25%;
  }
  
  .table_1 tr td:nth-child(4) {
    width: 20%;
  }
  
  .table_2 td {
    background: #FBFBFB;
    border-right: 1px solid #DCDCDC;
    border-bottom: 1px solid #DCDCDC;
    padding: 12px 5px !important;
    vertical-align: middle;
  }
  
  .table_2 tr td:first-child {
    border-left: 1px solid #DCDCDC;
  }
  
  .table_3 tr td:first-child {
    text-align: left;
  }
  
  .table_3 tr:first-child td {
    padding-top: 14px;
  }
  
  .table_3 tr td:last-child {
    text-align: right;
  }
</style>
<style scoped>
  .font_weight {
    font-weight: 700;
  }
  
  .title2 {
    color: #343434;
    padding-left: 1rem;
    font-size: .9125em;
    height: 3rem;
    line-height: 3rem;
  }
  
  .title2>i {
    display: inline-block;
    width: 1.25em;
    height: 1.25em;
    vertical-align: text-top;
    background-size: 100% 100%;
  }
  
  {
    border-top: .625em solid #f0f0f0;
    background: #fff;
  }
  
  .title i {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAV1BMVEUAAABsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOVsmOWl/qMPAAAAHHRSTlMA8ArSXUmAQSfz6NnLZOM7GRAGp3JXUvu2kkU1fPPVKwAAAK5JREFUSMft1rsOwyAMQFEDKQQCJKRJn/7/7ywRCn0swUwduAsS0mEwiyE2d+eBlfWA3CiwuFNWimEFmzTWMIlVzNYxRmXzU6kRNJVxE09gZCYQWWONNdZYY439Jbv8MHGXJfVfzKwcSnszEx+pYC5dhP4w/sEMT8zRJmmBzjSi54ktxA9YE5vUYWFnNrIhkCcpcXOK4Gxk+2J4W7rCnN8YKI3kWFp6qV3zik3KvwBfOOwcLSWXCwAAAABJRU5ErkJggg==);
  }
  
  .content {
    padding: .875em 1.9375em;
    font-size: 12.5px;
  }
  
  .content h5 {
    margin-bottom: .875rem;
    text-indent: -1em;
  }
  
  .content h5 i.point {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAGFBMVEUAd9EAd9EAd9EAd9EAd9EAd9EAAAAAd9H478M7AAAAB3RSTlPdgfnFCgkAkn5dJwAAACtJREFUCNdjSBVQEE1gcC4vL3ZgEC8vLxdgYAeSDAzqQFIBwoaIQ9RA1AMAbFENeXgEETQAAAAASUVORK5CYII=);
    display: inline-block;
    width: .35em;
    height: .35em;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: 6px;
    position: absolute;
  }
  
  .content h5 span {
    text-decoration: underline;
    color: #0079ce;
    padding-left: 1em;
  }
  
  p {
    text-indent: 2em;
    font-size: 14px;
  }
  
  .openurl {
    font-size: 12.5px;
  }
</style>

