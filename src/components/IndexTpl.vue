<template>
  <div>
    <a :href="'http://h5.caiyu.in/dashboard/invite.html?uid='+uid">
      <img src="../assets/new_img/invite_icon_2.png" class="invite_btn">
    </a>
    <loadmore topDistance="40" :top-method="loadTop">
      <header>
        <div style="height:200px;background-color:skyblue">
          <swipe :auto="4000">
            <swipe-item>1</swipe-item>
            <swipe-item>2</swipe-item>
            <swipe-item>3</swipe-item>
          </swipe>
        </div>
        <div class="nav">
          <div class="entry">
            <router-link :to="'/tuhao/?uid='+uid">
              <img style="float: left" src="../assets/new_img/tuhao_entry.png" alt="">
            </router-link>
            <router-link :to="'/xiaozhong/?uid='+uid">
              <img style="float: right" src="../assets/new_img/xiaozhong_entry.png" alt="">
            </router-link>
          </div>
          <p class="total_money">
            已返现到账
            <span class="num org">{{data.totalmoney}}</span>元
          </p>
          <router-link :to="'/prize/'+uid" class="speed">查看最新返现进度</router-link>
        </div>
      </header>
      <platform-list v-for="(obj, i) in data.platforms" :uid="uid" :key="i" :data="obj"></platform-list>
  
      <!--<div slot="top" class="mint-loadmore-top">
                            <span v-show="topStatus === 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
                            <span v-show="topStatus === 'loading'">Loading...</span>
                          </div>-->
  
    </loadmore>
  </div>
</template>

<script>
  import PlatformList from './PlatformList'
  // import { toUrlQuery } from '../assets/js/tool'
  import { Indicator, Swipe, SwipeItem, Loadmore } from 'mint-ui'
  import $ from 'jquery'
  export default {
    data () {
      return {
        topStatus: '',
        data: {},
        uid: encodeURIComponent(this.$route.query.uid)
      }
    },
    components: {
      PlatformList,
      Swipe,
      SwipeItem,
      Loadmore
    },
    methods: {
      loadTop () {
        location.reload()
      }
    },

    created: function () {
      const _this = this
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      $.ajax({
        type: 'GET',
        url: '../../static/json/index.json',
        dataType: 'json',
        success: function (res) {
          _this.data = res
          Indicator.close()
        }
      })
    }
  }

</script>
<style scoped>
  .invite_btn {
    position: fixed;
    width: 80px;
    right: -3.5px;
    top: 55%;
    padding: 2px;
    cursor: pointer;
    z-index: 99999;
  }
  
  .nav {
    text-align: center;
    padding: 0.8rem;
  }
  
  .entry {
    overflow: hidden;
    margin-bottom: 2.4rem;
  }
  
  .entry img {
    height: 7rem;
    vertical-align: middle;
  }
  
  .total_money {
    font-size: 1.65rem;
    font-weight: 500;
    color: #374259;
    margin-bottom: 0.3rem;
  }
  
  .org {
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    color: #ea6e24;
  }
  
  .speed {
    font-size: 1.3rem;
    color: #0076ff;
    display: inline-block;
    margin-bottom: 1.4rem;
    position: relative;
  }
  
  .speed::after {
    content: '';
    background: url('../assets/new_img/arrow.png') no-repeat;
    position: absolute;
    right: -1.5rem;
    top: 0.31rem;
    height: 1.3rem;
    width: 1.3rem;
    -webkit-background-size: cover;
    background-size: cover;
  }
</style>
