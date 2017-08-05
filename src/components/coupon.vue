
<template>
  <a v-on:click="promptShow">
    <div :style="shadow" :class="hasshadow?'xshadow':''">
      <div class="xitem_box">
        <h5 class="xh5 ">{{data.title}}</h5>
        <div class="xmoney">返现
          <span>{{data.fanlimoney}}</span>元</div>
        <p v-if="data.fanlitype=='1'" style="color: #e64d3f;position: relative;top: -2px;">{{data.text}}</p>
        <p>{{data.fanlimoneydesc}}</p>
        <div class="xbottom">
          <b style="position: relative">{{data.baserate|formatMoney(1)}}
            <span class="xfz9">官网收益率</span>
          </b>
          <span class="xfz11">%</span>
          <img class="xarrow" src="../assets/img/arrow.png" alt="">
          <b style="position: relative">{{data.fanlirate|formatMoney(1)}}
            <span class="xfz9 ">活动收益率</span>
          </b>
          <span class="xfz11">%</span>
        </div>
        <div class="xbottom_right">
          <div>{{fanxian}}</div>
          <p> (已有{{data.fanlipeople}}人选择)</p>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
  import { formatMoney } from '../assets/js/tool'
  export default {
    data () {
      return {
        data: this.data,
        hasshadow: false,
        shadow: ''

      }
    },
    props: ['data'],
    methods: {
      promptShow () {
        this.$emit('childClick')
      }
    },
    computed: {
      fanxian () {
        return this.data.fanlistatus ? '去返现' : '已结束'
      }
    },
    filters: {
      formatMoney
    },
    created () {
      switch (this.data.fanlitype) {
        case '0':
          this.bg = '/static/img/detail_item_bg.png'
          this.shadow = 'background: url(/static/img/shadow.png) no-repeat center bottom;'
          this.hasshadow = true
          break
        case '1':
          this.bg = '/static/img/yellow_bg.png'
          this.shadow = 'background: url(/static/img/yellow_shadow.png) no-repeat center bottom;'
          this.hasshadow = true
          break
        case '4':
          this.data.bg = '/static/img/.png'
          break

      }
    }
  }

</script>
<style scoped>
  .xshadow {
  
    background-size: contain;
    margin: 0 auto;
    padding-bottom: 20px;
  }
  
  .xitem_box {
    background: url(../assets/img/detail_item_bg.png);
    width: 92vw;
    height: 49vw;
    background-size: contain;
    margin: 0 auto;
    position: relative;
  }
  
  .xmoney {
    font-size: 11.2vw;
    font-weight: 600;
    color: #e64d3f;
    text-align: center;
    line-height: 16vw;
  }
  
  .xmoney span {
    font-size: 16vw;
    vertical-align: bottom;
  }
  
  .xitem_box>p {
    font-size: 3.2vw;
    text-align: center;
    color: #374259;
  }
  
  .xbottom {
    position: absolute;
    bottom: 1.1vw;
    height: 14vw;
    font-size: 7.8vw;
    font-weight: 500;
    color: #ffffff;
    left: 2vw;
    line-height: 14vw;
  }
  
  .xbottom_right {
    position: absolute;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    right: 9vw;
    top: 36vw;
    line-height: normal;
  }
  
  .xbottom_right div {
    height: 5.2vw;
    font-size: 4vw;
  }
  
  .xbottom_right p {
    height: 3.7vw;
    font-size: 2.7vw;
    opacity: 0.9;
  }
  
  body {
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif !important;
    display: none;
    background-color: #f0f0f0;
  }
  
  .xbottom {
    position: absolute;
    bottom: 2vw;
    height: 14vw;
    font-size: 5.5vw;
    font-weight: 400;
    color: #ffffff;
    left: 10vw;
    line-height: 14vw;
  }
  
  header {
    padding-bottom: .25em;
    position: relative;
    border-bottom: 9.5px solid #f0f0f0;
    background: rgb(239, 239, 240);
  }
  
  .xh5 {
    width: auto;
    font-size: 4vw;
    text-align: left;
    color: #374259;
    margin-bottom: 2vw;
    position: relative;
    top: 2vw;
    margin-left: 5vw;
  }
  
  .xfengkong span {
    border-radius: 2px;
    height: 18px !important
  }
  
  b {
    font-weight: 400
  }
  
  .xfz11 {
    font-size: 5.5vw;
  }
  
  .xfz9 {
    font-size: 2.3vw;
    font-weight: 500;
    position: absolute;
    top: 5.5vw;
    line-height: normal;
    left: 0vw;
    right: -5em;
  }
  
  .xarrow {
    width: 9vw;
    height: 4.5vw;
    vertical-align: middle;
    /*margin-left: 8vw;*/
    margin: 0 4vw;
  }
</style>


