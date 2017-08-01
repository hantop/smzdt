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
  
      <ul style="margin: -4px 0 0 0" class="ad_2">
        <li class="b">
          <ul style="margin: 0;padding: 5px 0" class="app">
            <li>
              <a style="    text-align: center;height: 26px;margin-top: 7px;line-height: 26px;border-right: solid 0.5px #e6e6e6;" click-type="smzdt" href="/tou/index.php?&lt;?php echo extendParams(); ?&gt;">
                <img src="../assets/image/dash_2.png" />什么值得投 </a>
            </li>
            <li>
              <a style="    text-align: center;height: 26px;margin-top: 7px;line-height: 26px;" click-type="lchb" href="./tool.html">
                <img src="../assets/image/dash_1.png" />理财小工具 </a>
            </li>
          </ul>
        </li>
      </ul>
      <ul style="display:none" class="ad_1 yutang">
        <li class="a">
          <a href="https://sns.91caiyu.com/index.php?app=h5&amp;mod=index&amp;act=index&amp;uid=&lt;?php echo $uid;?&gt;">
            <span class="a_1" style="font-weight:bold;font-size: 24px;top: 6px ">鱼塘</span>
            <span class="a_2" style="color: #e97433;opacity: 1;font-size:14px;top: 41px">掰扯理财的社区
              <span class="mrcx">(每日财讯已移到这里啦)</span>
            </span>
            <img src="../assets/image/image_test.png" class="a_3" /> </a>
        </li>
      </ul>
      <div id="react-html-container">
        <div data-reactroot="" data-reactid="1" data-react-checksum="-1466343117">
          <div class="bg-white" data-reactid="64">
            <platform-list v-for="(obj, i) in objs" :key="i" :data="obj"></platform-list>
          </div>
  
          <div class="title relative" style="text-align:center;padding: 0.55em 0.79167em;background-color: white;margin-bottom:1px" data-reactid="66">
            <span style="font-size: 1em;color: #374259; margin-left:0" data-reactid="68">理财精选</span>
          </div>
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
        </div>
      </div>
    </header>
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
