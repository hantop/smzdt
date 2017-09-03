<template>
  <div>
  
    <div class="pj_banner">
      <img src="../assets//new_img/level_banner.png">
    </div>
  
    <div class="big_cell" style="margin-top: -8px">
  
      <div class="title">
        风控评级
        <span class="level orange">{{grade.score}}</span>
  
      </div>
      <div>
        <table cellspacing="0" cellpadding="0" class="table_3">
          <tr :key="i" v-for="(v, k, i) in grade.list">
            <td>{{k}}</td>
            <td class="orange">{{v}}</td>
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
          <tr :key="i" v-for="(v, k, i) in monitor">
            <td>{{k}}</td>
            <td :class="v=='-'?'':v=='正常'?'skyblue':'red'">{{v=='-'?'-':v=='正常'?'正常':'异常'}}</td>
          </tr>
  
        </table>
      </div>
  
    </div>
    <div v-if="comment.length > 0" class="big_cell">
  
      <div class="title">
        理财师评价
      </div>
      <div>
        <div class="content pingjia">
          <p :key="i" v-for="(v, i) in comment">{{v}} </p>
        </div>
      </div>
  
    </div>
    <div class="big_cell">
  
      <div class="title">
        引用资料
      </div>
      <div>
        <div class="content">
          <h5 :key="i" v-for="(v, k, i) in link" class="relative">
            <i class="point"></i>
            <a style="margin-left: 10px" :href="v" class="openurl">{{k}}</a>
          </h5>
        </div>
      </div>
  
    </div>
  
  </div>
</template>
<script>
  import $ from 'jquery'
  import { Indicator } from 'mint-ui'
  function statEvent (active, type) {
    $.ajax({
      type: 'POST',
      url: '/ajax.php',
      dataType: 'json',
      data: {
        func: 'submitAccessStat',
        data: {
          'active': active,
          'type': type
        }
      }
    })
  }
  statEvent('新什么值得投', '风控评级页')

  export default {
    data () {
      return {
        grade: {},
        monitor: {},
        comment: [],
        link: {}
      }
    },
    created: function () {
      statEvent('新什么值得投', '风控评级' + this.$route.params.pid)
      const _this = this
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      document.setTitle = function (t) {
        document.title = t
        var i = document.createElement('iframe')
        i.src = '//m.baidu.com/favicon.ico'
        i.style.display = 'none'
        i.onload = function () {
          setTimeout(function () {
            i.remove()
          }, 9)
        }
        document.body.appendChild(i)
      }
      document.setTitle('风控评级')
      $.ajax({
        type: 'GET',
        url: '../../static/json/riskscore/riskscore_' + _this.$route.params.pid + '.json?' + Date.now(),
        dataType: 'json',
        success: function (res) {
          _this.grade = res.grade
          _this.monitor = res.monitor
          _this.comment = res.comment
          _this.link = res.link
          Indicator.close()
        }
      })
      setTimeout(function () {
        Indicator.close()
      }, 1500)
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

