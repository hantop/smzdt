<template>
  <div v-title="'土豪大额专区'" class="tuhao" style="padding-bottom:50px">
    <img class="bg" src="../assets/new_img/tuhao_bg.jpg" alt="">
    <div v-for="(v, k, i) in data" :key="i">
      <h4 class="list_title">
        <img class="logo" :src="v.logo" alt="">{{k}}
      </h4>
      <coupon v-for="(obj,i) in v.list" :key="i" :props="obj"></coupon>
    </div>
    <button class="btn_blue fix">邀请好友投资</button>
  </div>
</template>
<script>
  import { Indicator } from 'mint-ui'
  import coupon from './coupon'
  import $ from 'jquery'
  export default {
    data () {
      return {
        data: []
      }
    },
    components: {
      coupon
    },
    created () {
      const _this = this
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      $.ajax({
        type: 'GET',
        url: '../../static/json/tuhao.json?' + Date.now(),
        dataType: 'json',
        success: function (res) {
          _this.data = res
          Indicator.close()
        }
      })
      // fetch('../../static/json/tuhao.json').then(res => {
      //   return res.json()
      // })
      //   .then(res => {
      //     _this.data = res
      //     Indicator.close()
      //   })
    }
  }
</script>
<style>
  .tuhao .bg {
    display: block;
    width: 100%;
  }
  
  .tuhao .logo {}
  
  .tuhao .list_title {
    text-align: center;
    padding: 0.9rem 0px;
    position: relative;
    color: #434343;
    font-weight: 600;
    font-size: 22px;
  }
  
  .tuhao .list_title img {
    height: 28px;
    position: relative;
    left: -4px;
    top: -2px;
  }
  
  .tuhao .fix {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }
  
  .tuhao .xbottom {
    display: none!important;
  }
  
  .tuhao .xitem_box>p {
    font-size: 18px!important;
    font-weight: 700!important;
    text-align: center!important;
    color: #000!important;
    transform: translateY(4px)!important;
  }
</style>

