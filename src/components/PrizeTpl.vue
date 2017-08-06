<template>
  <div>
  
    <div class="big_cell">
  
      <div class="title">
        我的返现
      </div>
      <div>
        <table cellspacing="0" cellpadding="0" class="table_1">
          <tr class="title">
            <td> 登记日期</td>
            <td> 平台</td>
            <td> 登记账号</td>
            <td> 返现状态</td>
          </tr>
          <tr v-for="(obj,i) in  data" :key="i" v-if="i<11||showall">
            <td>{{obj.createtime.substr(0,10)}}</td>
            <td>{{obj.pname}}{{obj.source == '1'?'（复）':''}}</td>
            <td>{{obj.mobile}}</td>
            <td>
              <a @click="showalert" :id="i" class="link blue">{{obj.status=='0'?'已登记':'已返现'}}</a>
            </td>
          </tr>
        </table>
        <div @click="showlist" class="load_more blue">{{showall?'收起':'查看'}}全部返现信息</div>
      </div>
  
    </div>
  
    <div class="big_cell">
  
      <div class="title">
        最新返现进度
        <p class="gray">规定时间未返现，将获得额外5元超时补贴</p>
  
      </div>
  
      <div>
        <table cellspacing="0" cellpadding="0" class="table_2" style="padding-bottom: 20px">
          <tr class="title">
            <td> 平台</td>
            <td> 返现时效</td>
            <td> 返现进度</td>
          </tr>
          <tr v-for="(v, i) in list" :key="i">
            <td>{{v.name}}</td>
            <td>{{v.time}}</td>
            <td>{{v.info}}</td>
          </tr>
        </table>
      </div>
  
    </div>
    <alertbox :obj="alert" v-on:hideself="hidealert" v-if="showbox"></alertbox>
  </div>
</template>
<script>
  import Alertbox from './Alertbox'
  import { toUrlQuery } from '../assets/js/tool'
  import { Indicator } from 'mint-ui'
  export default {
    data () {
      return {
        showbox: false,
        data: [],
        alert: {},
        showall: false

      }
    },
    components: {
      Alertbox
    },
    methods: {
      showalert (e) {
        const id = e.currentTarget.id
        this.alert = this.data[id]
        this.showbox = true
      },
      hidealert () {
        this.showbox = false
      },
      showlist () {
        this.showall = !this.showall
      }
    },
    created () {
      const _this = this
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      const body = {
        'url': '/CaiyuPartner/api/v1/invest/list',
        'data': {
          'uid': this.$route.params.uid
        }

      }
      fetch('/forward.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json, text/plain, */*'
        },
        body: toUrlQuery(body)
      }).then(function (res) {
        return res.json()
      })
        .then(function (data) {
          if (data.status === 0) {
            _this.data = data.data
          } else {
          }
        })
      fetch('../../static/json/prize.json').then(res => {
        return res.json()
      })
        .then(res => {
          _this.list = res
          Indicator.close()
        })
    }
  }
</script>

<style scoped>
  .pj_banner {
    padding: 15px 10px 0;
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
  
  .big_cell .load_more {
    text-align: center;
    font-size: 13px;
    padding: 0 20px 10px;
  }
  
  .table_1,
  .table_2 {
    display: table;
    width: 100%;
    padding-bottom: 6px;
  }
  
  .table_1 tbody,
  .table_2 tbody {
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
  .table_2 tr td {
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
</style>

