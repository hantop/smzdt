<template>
  <div>
    <div class="alert">
  
      <h5 v-if="!result" class="title tac">{{name}}名额登记</h5>
      <h5 v-if="result" class="title tac">恭喜您登记成功
        <br>获得返现名额</h5>
      <!-- <p class="title_message tac">lalala</p> -->
      <div v-if="!result" class="message">
        <p class="text tac">
          请输入您计划用于投资平台的手机号
        </p>
      </div>
      <div v-if="result" class="message">
        <p class="text2 tac">
          请使用手机号{{tel}}
          <br>注册{{pname}}平台，并按活动规则投资，即可获得返现。
        </p>
      </div>
      <!-- <p class="yellow tac">*该手机号码仅用于信息追踪</p> -->
      <input v-if="!result" v-model="tel" class="alert_input tac" type="text" @focus="tel=''" name="" id="" placeholder="请输入注册投资的手机号">
      <div v-show="!hideCoupon" v-if="hascoupon" style="padding-top:12px;margin-bottom:38px">
        <h5 class="coupon_title tac">返现成功时将提现以下代金券</h5>
        <div @click="usecoupon=!usecoupon" class="coupon_box">
          <span  class="coupon_btn" :class="usecoupon?'':'coupon_btn_false'" ></span>
          <div class="box_top">
            <div class="box_top_left">
              <i>￥</i><span>{{cashCoupon.money}}</span>
            </div>
            <div class="box_top_right">
              <h5>现金券</h5>
              <p>参与返现活动即可提现</p>
            </div>
          </div>
          <div class="box_btm">
            <p>{{cashCoupon.start.substr(0,10)}} 至 {{cashCoupon.end.substr(0,10)}}</p>
          </div>
        </div>
  
      </div>
      <button @click="dowhat" :class="ischecked?'':'disable'" class="btn_cyan">{{!result?'确定':'正在跳转至'+pname+'...'}}</button>
      <!-- <div v-if="!result" style=" font-size: 12px;margin-top: 13px;  color: #777; text-align:center; ">您即将投资的是评级为
                                                  <router-link :to="'/riskscore/'+pid">{{score}}</router-link> 的平台</div> -->
      <div v-if="!result" class="agree">
        <span @click="ischecked=!ischecked" class="coupon_btn2" :class="ischecked?'':'coupon_btn2_false'" ></span>
        同意 
        <a href="http://h5.caiyu.in/dashboard/agreement.html">&nbsp;返现协议与免责声明</a>
      </div>
      <a v-if="!result" @click="hideself" class="esc"></a>
    </div>
    <div class="mask"></div>
  
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tel: this.defaulttel,
        ischecked: false,
        usecoupon: true
      }
    },
    props: ['data', 'score', 'pid', 'defaulttel', 'result', 'pname', 'cashCoupon', 'hideCoupon'],
    computed: {
      name () {
        switch (this.data) {
          case '0':
            return '首投'
          case '1':
            return '复投'
          case '5':
            return '复投'
          case '4':

            return '超级返'
        }
      },
      hascoupon () {
        if (this.cashCoupon.id) {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      hideself () {
        this.$emit('hideself')
      },
      dowhat () {
        if (!this.ischecked || this.result) return
        this.$emit('dowhat', { 'tel': this.tel, 'usecoupon': this.usecoupon })
      }
    }
  }
</script>

<style scoped>
  @font-face {
    font-family: 'WeChatNum';
    src: url('/static/font/WeChatNum.ttf')
  }
  
  .coupon_btn {
    width: 23px;
    height: 23px;
    position: absolute;
    display: block;
    top: 7px;
    right: 7px;
    background: url('/static/img/sprite.png') no-repeat;
    background-position: 0 0;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .coupon_btn2 {
    width: 22px;
    height: 22px;
    position: relative;
    display: block;
    background: url(/static/img/sprite.png) no-repeat;
    background-position: 0 -69px;
    background-size: cover;
    top: 2px;
  }
  
  .coupon_btn_false {
    background-position: 0 -23px;
  }
  .coupon_btn2_false {
    background-position: 0 -46px;
  }
  
  .box_top {
    display: flex;
    padding: 16px 0;
    /*height: 86px;*/
    border-bottom: dashed 0.5px #ffe1b5;
    position: relative;
  }
  
  .box_top::before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    content: '';
    height: 10px;
    width: 10px;
    position: absolute;
    display: block;
    bottom: -5px;
    left: -5px;
    background: #fff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: solid 0.5px #ffe1b5;
  }
  
  .box_top::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    content: '';
    height: 10px;
    width: 10px;
    position: absolute;
    display: block;
    bottom: -5px;
    right: -5px;
    background: #fff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: solid 0.5px #ffe1b5;
  }
  
  .box_top_left {
    text-align: center;
    height: 38px;
    line-height: 38px;
    margin: 0 10px;
  }
  
  .box_top_left i {
    position: relative;
    font-weight: 500;
    font-style: normal;
    font-size: 15px;
    font-weight: 500;
    color: #d85345;
  }
  
  .box_top_left span {
    font-family: 'WeChatNum';
    font-size: 38px;
    color: #d85345;
  }
  
  .box_top_right h5 {
    font-size: 13px;
    font-weight: 600;
    color: #947548;
  }
  
  .box_top_right p {
    margin-top: 4px;
    font-size: 10px;
    color: #d5b991;
  }
  
  .box_btm {
    display: flex;
    justify-content: center;
    padding: 0 10px;
    align-items: center;
  }
  
  .box_btm p {
    font-size: 10px;
    color: #d6ba91;
    margin: 4px 0;
  }
  
  .box_btm a {
    border-radius: 100px;
    font-size: 28px;
    font-weight: 500;
    height: 54px;
    line-height: 54px;
    text-decoration: none;
    padding: 0 20px;
  }
  
  .coupon_box {
    width: 250px;
    background-color: #fffbf5;
    border: solid 0.5px #fee4be;
    position: relative;
  }
  
  .coupon_box::before {
    display: block;
    position: absolute;
    content: '';
    width: 5px;
    height: 100%;
    background-color: #fff;
    top: 0;
    left: -6px;
    z-index: 99;
  }
  
  .coupon_box::after {
    display: block;
    position: absolute;
    content: '';
    width: 5px;
    height: 100%;
    background-color: #fff;
    top: 0;
    right: -6px;
    z-index: 99;
  }
  
  .coupon_title {
    font-size: 13px;
    color: #9199ac;
    margin-bottom: 10px;
  }
  
  .alert_input {
    margin-bottom: 20px;
  }
  
  .text2 {
    font-size: 14px;
    margin-top: 4px;
  }
  
  
  .agree {
    font-size: 12px;
    margin-top: 10px;
    color: rgb(119, 119, 119);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .yellow {
    font-size: 12px;
    color: #e8be3f;
    position: absolute;
    bottom: 184px;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    width: 100%;
  }
  
  .text {
    font-size: 12px;
  }
  
  
  .alert {
    border-radius: 2px;
    margin: 0 auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    background-color: #fff;
    padding: 15px;
    width: 280px;
    min-height: 175px;
    padding-top: 34px;
    padding-bottom: 10px;
  }
  
  .title {
    font-size: 18px;
    font-weight: 600;
    color: #2a3242;
  }
  
  .message {
    font-size: 24px;
    font-weight: 500;
    color: #2b3242;
    padding-top: 0px;
    padding-bottom: 10px;
  }
  
  .mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .7;
    background: #000;
    z-index: 5;
  }
  
  .esc {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    width: 17px;
    height: 17px;
    background: url('../assets/new_img/esc_icon.png') no-repeat;
    background-size: contain;
    background-origin: content-box;
    padding: 12px 15px 5px 5px;
  }
  
  .bottom_message {
    color: #9199ac;
    font-size: 13px;
    padding-bottom: 5px;
    transform: translateY(10px);
  }
  
  .title_message {
    font-size: 13px;
    color: #9199ac;
  }
  
  .message_box {
    padding-bottom: 30px;
    position: relative;
  }
  
  .message_box:not(:last-of-type)::before {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    border-left: solid 1px #e1e1e1;
    left: -12px;
    top: 12px;
  }
  
  .message_box h6::before {
    content: '';
    display: block;
    position: absolute;
    left: -15px;
    width: 7px;
    height: 7px;
  
    background-color: #d8d8d8;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    top: 6px;
  }
  
  .message_box.done h6::before {
    background-color: #37c2c7;
  }
  
  .message_box.doing h6::before {
    background-color: #37c2c7;
    box-shadow: 0 0 0px 3px rgba(37, 182, 187, .22);
  }
  
  .message_box.done::before {
    border-color: #36c2c7;
  }
  
  .message_box h6 {
    font-size: 13px;
    color: #2b3242;
  }
  
  .message_box p {
    font-size: 13px;
    color: #9199ac;
  }
</style>
