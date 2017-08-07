
<template>
  <a v-on:click="promptShow">
    <div class="xshadow" :class="'xshadow'+data.fanlitype">
      <div class="xitem_box" :class="'xitem_box'+data.fanlitype">
        <h5 class="xh5">{{data.title}}</h5>
        <div class="xmoney" :class="'xmoney'+data.fanlitype">返现<span class="num spa">{{data.fanlimoney}}</span>元<span v-if="data.fanlitype=='4'" class="item">{{data.jiaxi.jiaxititle}}</span></div>
        <p v-if="data.fanlitype=='1'" style="color: #e64d3f;position: relative;top: -2px;">{{data.futoudesc}}</p>
        <p>{{data.fanlimoneydesc}}</p>
        <div class="xbottom">
          <b style="position: relative">{{data.baserate|formatMoney(1)}}<span class="xfz9">官网收益率</span></b><span 
          class="xfz11">%</span><img class="xarrow" src="../assets/img/arrow.png" alt=""><b 
          style="position: relative">{{data.fanlirate|formatMoney(1)}}<span class="xfz9 ">活动收益率</span></b><span 
          class="xfz11">%</span>
        </div>
        <div class="xbottom_right">
          <div v-if="data.fanlitype!='4'">{{fanxian}}</div>
          <div v-if="data.fanlitype=='4'&&qiang">参与超级返</div>
          <div v-if="data.fanlitype=='4'&&!qiang">{{this.h}}:{{this.m}}:{{this.s}}</div>
          <p v-if="data.fanlitype!='4'"> (已有{{data.fanlipeople}}人选择)</p>
          <p v-if="data.fanlitype=='4'&&qiang">(先到先得)</p>
          <p v-if="data.fanlitype=='4'&&!qiang">即刻开始</p>
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
        data: this.props,
        qiang: false,
        timeout: null,
        clock: null,
        s: null,
        m: null,
        h: null
        // status: this.status
      }
    },
    props: ['props', 's', 'f', 'su'],
    created () {
      const _this = this
      if (this.data.fanlitype === '4') {
        this.timeout = parseInt((Date.parse(this.data.fanlistart) - Date.now()) / 1000)
        if (this.timeout > 60) {
          this.s = this.timeout % 60
          this.m = parseInt(this.timeout / 60)
          if (this.m > 60) {
            this.h = parseInt(this.m / 60)
            console.log(this.h)
            this.m = this.m % 60
            if (this.h < 10) this.h = '0' + this.h
          } else {
            this.h = '00'
            if (this.m < 10) this.m = '0' + this.m
          }
        } else {
          this.s = this.timeout
          if (this.s < 10) this.s = '0' + this.s
          this.h = '00'
          this.m = '00'
        }
        _this.clock = setInterval(function () {
          _this.timeout--
        }, 1000)
      }
    },
    watch: {
      timeout (val) {
        if (val <= 0) {
          clearInterval(this.clock)
          this.qiang = true
        }
        this.s--
        if (this.s < 0) {
          this.s = 59
          this.m--
          if (this.m < 0) {
            this.m = 59
            this.h--
            if (this.h < 0) this.h = '00'
            if (this.h < 10) this.h = '0' + this.h
          }
          if (this.m < 10) this.m = '0' + this.m
        }
        if (this.s < 10) this.s = '0' + this.s
      }
    },
    methods: {
      promptShow (e) {
        if (this.qiang) {
          this.$emit('childClick', '5')
        }
        this.$emit('childClick', this.data.fanlitype)
      }
    },
    computed: {
      fanxian () {
        return this.data.fanlistatus ? '参与返现' : '参与返现'
      }

    },
    filters: {
      formatMoney
    }
  }
</script>
<style scoped>
  .xitem_box1 {
    background: url('../assets/new_img/yellow_bg.png');
    background-size: contain;
    width: 92vw;
    height: 49vw;
    margin: 0 auto;
    position: relative;
  }
  .xshadow1 {
    background: url('../assets/new_img/yellow_shadow.png')no-repeat center bottom;
    background-size: contain;
    margin: 0 auto;
    padding-bottom: 20px;
  }
  
  .xmoney1 {
    color: #FF9115;
    font-size: 11.2vw;
    font-weight: 600;
    text-align: center;
    line-height: 16vw;
  }
  
  .xshadow0 {
    background: url(../assets/new_img/shadow.png) no-repeat center bottom;
    background-size: contain;
    margin: 0 auto;
    padding-bottom: 20px;
  }
  
  .xitem_box0 {
    background: url(../assets/new_img/detail_item_bg.png);
    width: 92vw;
    height: 49vw;
    background-size: contain;
    margin: 0 auto;
    position: relative;
  }
  
  .xmoney0 {
    font-size: 11.2vw;
    font-weight: 600;
    color: #e64d3f;
    text-align: center;
    line-height: 16vw;
  }
  .xshadow4 {
    margin: 0 auto;
    padding-bottom: 20px;
  }
  
  .xitem_box4 {
    background: url(../assets/new_img/coupon_f_bg.png);
    width: 92vw;
    height: 43.6vw;
    background-size: contain;
    margin: 0 auto;
    position: relative;
  }
  
  .xmoney4 {
    font-size: 10.2vw;
    font-weight: 600;
    color: #ea6e24;
    text-align: center;
    line-height: 16vw;
    transform: translateX(-16vw);
  }
  .xmoney4 span.spa {
    font-size: inherit;
    vertical-align: inherit;
  }
  .xitem_box4 .xbottom_right{
    position: absolute;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    right: 6.5vw;
    top: 31.5vw;
    line-height: normal;
    width: 24vw;
  }
  .xmoney4 .item{
    font-size: 5.5vw;
    transform: translateY(2px);
    position: absolute;
    right: -11vw;
    top: 2.5vw;
  }
  .xitem_box4 .xbottom_right div {
    height: 5.2vw;
    font-size: 4vw;
    font-weight: 600;
    color: #ea6e24;
    width: 24vw;
  }
  
  .xitem_box4 .xbottom_right p {
    height: 3.7vw;
    font-size: 2.7vw;
    font-weight: 500;
    color: #ea6e24;
  }
  .xitem_box4 .xbottom{
    position: absolute;
    bottom: 1.6vw;
    height: 14vw;
    font-size: 5.5vw;
    font-weight: 400;
    color: #ffffff;
    left: 8vw;
    line-height: 14vw;
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
  
  
  .xbottom_right {
    position: absolute;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    right: 8vw;
    top: 36.5vw;
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
  
  
  .xbottom {
    position: absolute;
    bottom: 2vw;
    height: 14vw;
    font-size: 5.5vw;
    font-weight: 400;
    color: #ffffff;
    left: 8vw;
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
    top: 6.5vw;
    line-height: normal;
    left: 0.5vw;
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


