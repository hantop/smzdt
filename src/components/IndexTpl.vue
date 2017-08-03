<template>
  <loadmore topDistance="40" :top-method="loadTop">
    <header>
      <div style="height:200px;background-color:skyblue">
        <swipe :auto="4000">
          <swipe-item>1</swipe-item>
          <swipe-item>2</swipe-item>
          <swipe-item>3</swipe-item>
        </swipe>
      </div>
  
    </header>
    <platform-list v-for="(obj, i) in objs" :key="i" :data="obj"></platform-list>
    <div style="margin-bottom:56px" class="nav_2">
      <a class="left" href="">
        <div class="p_head">
          <img src="http://img.caiyu.in/data/rank_finance_f4f9705f25f774f5.png" />
        </div>
        <div class="p_name">
          货基月收益排行
        </div>
        <div class="p_int">
          动态监测
        </div>
        <div class="p_line"></div>
        <div class="p_pri">
          4.4-5.8
          <span>%</span>
        </div>
        <div class="p_good">
          安全灵活
        </div>
      </a>
      <a class="right" href="">
        <div class="p_head">
          <img src="http://img.caiyu.in/data/rank_finance_00476b1ba7d272f5.png" />
        </div>
        <div class="p_name">
          银行理财产品优选
        </div>
        <div class="p_int">
          多个维度筛选
        </div>
        <div class="p_line"></div>
        <div class="p_pri">
          4.6-5.1
          <span>%</span>
        </div>
        <div class="p_good">
          保本浮动收益
        </div>
      </a>
    </div>
    <!--<div slot="top" class="mint-loadmore-top">
              <span v-show="topStatus === 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
              <span v-show="topStatus === 'loading'">Loading...</span>
            </div>-->
  
  </loadmore>
</template>

<script>
  import PlatformList from './PlatformList'
  // import { toUrlQuery } from '../assets/js/tool'
  import { Indicator, Swipe, SwipeItem, Loadmore } from 'mint-ui'
  export default {
    data () {
      return {
        topStatus: '',
        objs: [
          {
            'arr': [
              {
                'imgurl': 'http://h5test.caiyu.in/dashboard/img/logo_lcf.png',
                'name': '名称',
                'type': '上市',
                'score': 'A',
                'summary': 'lalalal',
                'percent': '12%',
                'top': '123',
                'min_limit': '32',
                'pid': '47'
              },
              {
                'imgurl': 'http://h5test.caiyu.in/dashboard/img/logo_lcf.png',
                'name': '名称',
                'type': '上市',
                'score': 'A',
                'summary': 'lalalal',
                'percent': '12%',
                'top': '123',
                'min_limit': '32',
                'pid': '47'
              },
              {
                'imgurl': 'http://h5test.caiyu.in/dashboard/img/logo_lcf.png',
                'name': '名称',
                'type': '上市',
                'score': 'A',
                'summary': 'lalalal',
                'percent': '12%',
                'top': '123',
                'min_limit': '32',
                'pid': '47'
              },
              {
                'imgurl': 'http://h5test.caiyu.in/dashboard/img/logo_lcf.png',
                'name': '名称',
                'type': '上市',
                'score': 'A',
                'summary': 'lalalal',
                'percent': '12%',
                'top': '123',
                'min_limit': '32',
                'pid': '47'
              }
            ],
            'type': 'adfasdfsdfasdf'
          },
          {
            'arr': [
              {
                'imgurl': 'http://h5test.caiyu.in/dashboard/img/logo_lcf.png',
                'name': '名称',
                'type': '上市',
                'score': 'A',
                'summary': 'lalalal',
                'percent': '12%',
                'top': '123',
                'min_limit': '32',
                'pid': '47'
              },
              {
                'imgurl': 'http://h5test.caiyu.in/dashboard/img/logo_lcf.png',
                'name': '名称',
                'type': '上市',
                'score': 'A',
                'summary': 'lalalal',
                'percent': '12%',
                'top': '123',
                'min_limit': '32',
                'pid': '47'
              },
              {
                'imgurl': 'http://h5test.caiyu.in/dashboard/img/logo_lcf.png',
                'name': '名称',
                'type': '上市',
                'score': 'A',
                'summary': 'lalalal',
                'percent': '12%',
                'top': '123',
                'min_limit': '32',
                'pid': '47'
              },
              {
                'imgurl': 'http://h5test.caiyu.in/dashboard/img/logo_lcf.png',
                'name': '名称',
                'type': '上市',
                'score': 'A',
                'summary': 'lalalal',
                'percent': '12%',
                'top': '123',
                'min_limit': '32',
                'pid': '47'
              }
            ],
            'type': 'adfasdfsdfasdf'
          },
          {
            'arr': [
              {
                'imgurl': 'http://h5test.caiyu.in/dashboard/img/logo_lcf.png',
                'name': '名称',
                'type': '上市',
                'score': 'A',
                'summary': 'lalalal',
                'percent': '12%',
                'top': '123',
                'min_limit': '32',
                'pid': '47'
              },
              {
                'imgurl': 'http://h5test.caiyu.in/dashboard/img/logo_lcf.png',
                'name': '名称',
                'type': '上市',
                'score': 'A',
                'summary': 'lalalal',
                'percent': '12%',
                'top': '123',
                'min_limit': '32',
                'pid': '47'
              },
              {
                'imgurl': 'http://h5test.caiyu.in/dashboard/img/logo_lcf.png',
                'name': '名称',
                'type': '上市',
                'score': 'A',
                'summary': 'lalalal',
                'percent': '12%',
                'top': '123',
                'min_limit': '32',
                'pid': '47'
              },
              {
                'imgurl': 'http://h5test.caiyu.in/dashboard/img/logo_lcf.png',
                'name': '名称',
                'type': '上市',
                'score': 'A',
                'summary': 'lalalal',
                'percent': '12%',
                'top': '123',
                'min_limit': '32',
                'pid': '47'
              }
            ],
            'type': 'adfasdfsdfasdf'
          }
        ]
      }
    },
    components: {
      PlatformList,
      Swipe,
      SwipeItem,
      Loadmore
    },
    methods: {
      // handleTopChange (status) {
      //   this.topStatus = status
      // },
      loadTop () {
        // this.$refs.loadmore.onTopLoaded()
        location.reload()
      }
    },

    created: function () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      setTimeout(function () {
        Indicator.close()
      }, 2000)
      // const data = {
      //   'url': '/CaiyuPartner/api/v1/invest/partner?uid=1c8091d23c104502b51bd9d0961d1705'
      // }

      // fetch('/forward.php', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //     'Accept': 'application/json, text/plain, */*'
      //   },
      //   body: toUrlQuery(data)

      // }).then(function (res) {
      //   return res.json()
      // })
      //   .then(function (res) {
      //     Indicator.close()
      //   })
    }
  }

</script>
<style scoped>
  /*两个的*/
  
  .nav_2 {
    width: 100%;
    margin-bottom: 20px;
    padding-top: -1px;
    display: block;
    position: relative;
    overflow: hidden;
  }
  
  .nav_2 a {
    width: 50vw;
    height: 34.6vw;
    position: relative;
    display: block;
    background-color: white;
    border: inset 1px solid red;
  }
  
  .nav_2 .left {
    float: left;
    /*left: -0.5px;*/
  }
  
  .nav_2 .right {
    float: right;
    /*right: -0.5px;*/
  }
  
  .nav_2 a .p_head {
    width: 9.3vw;
    height: 9.3vw;
    border-radius: 10px;
    border: 1px solid rgb(230, 230, 230);
    position: absolute;
    top: 2.1vw;
    left: 1.86vw;
    overflow: hidden;
  }
  
  .nav_2 a .p_head img {
    width: 100%;
  }
  
  .nav_2 a .p_name {
    height: 4.5vw;
    line-height: 4.5vw;
    font-size: 4.26vw;
    position: absolute;
    top: 3vw;
    left: 12.5vw;
    color: rgb(98, 110, 130);
    width: 36vw;
    /*设置宽度*/
    white-space: nowrap;
    /*设置不折行*/
    -o-text-overflow: ellipsis;
    /*兼容opera*/
    text-overflow: ellipsis;
    /*这就是省略号喽*/
    overflow: hidden;
    /*设置超过的隐藏*/
  }
  
  .nav_2 a .p_int {
    height: 3.2vw;
    line-height: 3.2vw;
    font-size: 3vw;
    position: absolute;
    color: rgba(98, 110, 130, .7);
    top: 8.2vw;
    left: 12.5vw;
    width: 36vw;
    /*设置宽度*/
    white-space: nowrap;
    /*设置不折行*/
    -o-text-overflow: ellipsis;
    /*兼容opera*/
    text-overflow: ellipsis;
    /*这就是省略号喽*/
    overflow: hidden;
    /*设置超过的隐藏*/
  }
  
  
  
  /*下面的部分*/
  
  .nav_2 a .p_pri {
    width: 100%;
    text-align: center;
    font-size: 9.6vw;
    position: absolute;
    top: 16.8vw;
    color: #eb6a60;
    font-weight: 700;
    line-height: initial;
  }
  
  .nav_2 a .p_pri span {
    font-size: 24px;
  }
  
  .nav_2 a .p_good {
    width: 100%;
    text-align: center;
    font-size: 3.2vw;
    position: absolute;
    top: 27.5vw;
    color: #eb6a60;
    font-weight: 800;
  }
  
  .nav_2 a .p_line {
    width: 44.1vw;
    height: 1px;
    background-color: rgb(230, 230, 230);
    position: absolute;
    top: 13.9vw;
    left: 2.1vw;
  }
</style>
