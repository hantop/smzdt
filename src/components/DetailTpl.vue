


<template>
  <div style="background-color: #EFEFF0;">
  
    <header>
      <a :href="'http://h5.caiyu.in/dashboard/invite.html?uid='+uid">
        <img src="../assets/new_img/invite_icon_2.png" class="invite_btn">
      </a>
      <router-link style="display: block;" :to="'/riskscore/'+this.$route.params.pid">
        <div class="xbox">
          <img :src="data.logo" class="xlogo" alt="">
          <div class="xright">
            <div class="xtitle">
              <span class="xspan1">{{data.title}}</span>
              <span v-for="(item,index) in data.tag" :key="index" class="xspan2">{{item}}</span>
            </div>
            <p class="xtext">{{data.desc}}</p>
            <p class="xtext2">首投综合年化收益率可达{{data.rate}}</p>
            <span class="xfengkong">
              <span class="xfengkong_span1">风控指标：{{data.grade}}</span>
              <span class="xfengkong_span2">平台监控：{{data.detectlevel}}</span>
            </span>
          </div>
        </div>
      </router-link>
      <div class="xcoupon">
        <coupon :status="status" :props="item" v-for="(item, i) in items" :key="i" v-on:childClick="alertBox"></coupon>
        <h6 style="color: #909090;padding: 0 1.19444em;">
          <br>注意：
          <li> 已经通过财鱼管家注册的用户，可以直接去{{data.title}}官网或app中投资。</li>
          <li> ＊通过本页面进行注册的理财平台新用户有资格获得返现，首投满足奖励的条件与对应的奖励以本页面活动规则为准。</li>
          <li> ＊符合条件的用户，财鱼管家将在7个工作日内会发放返现红包至财鱼管家“我的-提醒”页面中。</li>
          <li> ＊禁止任何形式的刷单行为，如果发现（如同一IP刷单等），平台将不予结算。</li>
          <li> ＊如果活动期间奖励规则变动，则以注册时间（且注册后24小时内完成投资）的奖励规则为准。</li>
          <li v-for="(item,i) in data.specilarule" :key="i" class="red">{{item}}</li>
        </h6>
      </div>
    </header>
    <section>
      <div class="delivery-order">
        <h6 class="title relative" id="see-delivery-order">
          <span class="benift-plan">投资晒单</span>
          <!--<span style="left:80px" class="title-right">共15人晒单</span>-->
          <a :href="'https://sns.91caiyu.com/index.php?app=h5&mod=topic&act=index&name=' + encodeURIComponent(data.title + '返现') + '&uid=' + uid" style="color:gray!important" class="toShare title-right">查看全部晒单
            <i></i>
          </a>
          <hr class="divider divider-horizontal divider-bottom">
        </h6>
        <div style="display: none" class="item clearfix">
          <div class="userinfo clearfix relative">
            <div class="left avatar">
              <img src="https://sns.91caiyu.com/data/upload/avatar/2e/7e/c0/original_100_100.jpg?v1499411863" alt="avatar">
            </div>
            <div class="right info">
              <div class="info_top clearfix">
                <h4 class="left" style="font-weight:600;">城市猎人</h4>
                <h6 class="right"></h6>
              </div>
              <div class="info_bottom">
                <!--<h4 class="tips"><span class="tips_icon">投资收益</span><span class="reward_tips">20%年化+350元返现+100元新手红包</span></h4>-->
              </div>
            </div>
  
          </div>
          <div class="content">
            <h5 class="center">#钱保姆返现#</h5>
          </div>
          <div class="screenshot">
            <ul class="clearfix">
              <li class="left thumb relative">
                <img class="_thumb thumb-img" src="https://sns.91caiyu.com/data/upload/2017/0704/18/595b6e996b9c359bc104.jpg" alt="thumb">
  
              </li>
              <li class="left thumb relative">
                <img class="_thumb thumb-img" src="https://sns.91caiyu.com/data/upload/2017/0704/18/595b6e996bdfb184f56c.jpg" alt="thumb">
  
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="extra setnone" id="extra" style="display: block;">
        <h6 class="title relative" id="hidden-title">
          <span>活动规则说明</span>
        </h6>
        <div style="color: #909090;padding: 0 1.19444em; font-size: 13px">
          1.点击活动按钮，在平台活动页面注册账号。注册成功后在24小时内投资活动标的。
          <br> 2.投资成功后，7个工作日内，将会在财鱼管家app“我的-提醒”中收到返现红包。
          <br> 3.务必注意，在通过本活动页面注册的理财平台账户才有效，通过其他渠道进行的注册与投资行为无效。
          <br> 4.如果中间奖励规则变动，则已注册时间（且在注册后24小时内完成投资）的奖励规则为准。
          <br>5.如有疑问可以添加财鱼管家活动群467258481 进行咨询。
          <br> 温馨提示：财鱼管家展示不同的理财产品供用户选择，不同的理财产品将承受不同的风险，投资前请仔细考虑平台新用等各方面因素。
          <br>
        </div>
        <!--<div class="receive-gift relative btn-receive" data-canuser="0" id="btn-receive">
                        <a class="toPrize">已参加，我要兑奖</a>
                        <hr class="divider divider-horizontal divider-top">
                      </div>-->
      </div>
      <div class="extra setnone" id="extra" style="display: block">
        <h6 class="title relative" id="hidden-title">
          <span>常见问题</span>
        </h6>
        <div style="padding-top:20px">
          <div v-for="(v, k, i) in data.specialqa" :key="i">
            <div class="question">
              <p class="red">{{k}}</p>
            </div>
            <div class="answer">
              <p class="red">{{v}}</p>
            </div>
          </div>
          <div class="question">
            <p>用券还可以得奖励吗？</p>
          </div>
          <div class="answer">
            <p>注册后平台给的优惠券，是可以使用的。</p>
          </div>
          <div class="question">
            <p>可以投资新手标吗？</p>
          </div>
          <div class="answer">
            <p>可以的。</p>
          </div>
          <div class="question">
            <p>投资号码和注册财鱼的号码是否要求一致？</p>
          </div>
          <div class="answer">
            <p>从财鱼管家APP中参加活动，两者号码可以不一致。</p>
          </div>
          <div class="question">
            <p>一个平台能投几个方案？</p>
          </div>
          <div class="answer">
            <p>每个平台只有首次投资是能获得返现的。</p>
          </div>
          <div class="question">
            <p>投资之后要交单（登记）吗？</p>
          </div>
          <div class="answer">
            <p>不需要。投资后会按活动规定的时间进行返现。如超时未收到返现，可以在活动QQ群（467258481）联系客服查询。</p>
          </div>
          <div class="question">
            <p>同一设备、同一IP、同一财鱼管家账号能用不同手机号在同一平台注册投资吗？</p>
          </div>
          <div class="answer">
            <p>同一个账号，同一IP，同一设备，只能在同一个平台投资返利一次。</p>
          </div>
          <div class="question">
            <p>投资金额或期限大于方案规定的可以返现吗？</p>
          </div>
          <div class="answer">
            <p>是可以返现的。</p>
          </div>
        </div>
      </div>
    </section>
  
    <div class="fixed_button relative" id="fixed_button">
      <hr class="divider divider-horizontal divider-top">
      <a href="http://wpa.qq.com/msgrd?v=3&uin=3344813056&site=qq&menu=yes" class="kefu">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAMAAABEH1h2AAAAilBMVEUAAABvkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf/zcJnUAAAALXRSTlMA+u04AwWHIpcT0uO1zFlMHMCs3XhAMCgY9vO7sQrpmnEO2saSYqSdfVaQZ2Vehk0JAAAC0ElEQVRIx+1W2baiMBBMwiIggoi4oI7ifpf+/9+bIjLJBcOiZx5vvZBDUt2d6u4k7Bf/HaPLeZPmRHm6OV9Gr3GXbko1pO5yMDnbkAGbbJjnBzkP5/HSdxx/Gc/D/GGgPwL7zrGQb2OH/YATb+Xvu93NXiXlqtvIIOWtNJCsOgMfY8lJxmhb81kgOBfBbG7ZcvKEyXHHBhZ/sMAt105dGNIYu9PSoouhWLSmGuw8xsD3ODXAPR8TMTT801IE/hG2LQw+BBkgPjBlYeroG+kh0Rpsx6MWeA74a6LQxD5gASLfhdSKcIf48T08s6c5VIPvLXVgC/8uBJo+0WdEASY96oQHBwHR7ClnmMugGvUgQkvg08zeVZr0RR9d+DLQa6NYubToUS88GSlfNWVPIB/vp3PIljTFnxBdpKj9QHouRJNa7LBaMHs8hD62WYEodelJwU+oKBoEVOaprDAFO5Rbnw+jz+Vet7bqtMljS7Nh9NkjQ5OR7lMZTDCMHkjt/nWuDd8AxmIYXcjMA5My/ogkUO98GJ0jU6qCWdWg7BU6qxqYqZCnw4NX3sfKEFmvSLeo4tDeDypxm5biS0OVuG/tvfp5VWVzZ5Z7aujAk/uC3VXZ7PXeo8q2KtqAAUV2uCVpeU0ck/3B2jEgaG4z0nnntmoZixlhqZZh6yrvuuooUg2bmOmJatgFVVWnah629HHxbWJ/6+NiS7rmATsKEFShDqu1ZQh9rQ4rlkOgyGYahex+dVQK64kt9FGZwUHBTIio8v/FavhakxZ7Q7RnZqizNrF+uK5Ue9BiCGC+ZWuX1NHNVo6zytxj7ZIq0nbn/Vcku0kBWtB3QbMvDD5YFyLz8yBiQMxle7Sj43ECNjJw2vXQzU8j4MKhKIbdMD/M2K7s0xTst5ClYE9WL/OcsxDnxzv5umMv47Mm/ssQlfh7n71PV+/kt4L/fIuqpHPYL+r4C8IzA842MxsYAAAAAElFTkSuQmCC">
        <span>客服</span>
      </a>
      <a @click="alertBox(status.first)">
        <span class="btn-join xjoin join_f" :class="status.first?'':'disabled'" data-status="1">{{status.first?'参与首投活动':'首投活动已抢光，敬请等待下期'}}</span>
      </a>
    </div>
  
  </div>
</template>
<style scoped src="../assets/css/base.css"></style>
<style scoped src="../assets/css/q_a.css"></style>

<style scoped src="../assets/css/detail.css"></style>
<script>
  import { Indicator, MessageBox } from 'mint-ui'
  import { toUrlQuery } from '../assets/js/tool'
  import coupon from './coupon'
  export default {
    created: function () {
      const _this = this
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      console.log(this.uid)
      const body = {
        'url': '/CaiyuPartner/api/v1/invest/platform/valid',
        'data': {
          'pid': this.$route.params.pid
        }

      }
      fetch('/forward.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json, text/plain, */*'
        },
        body: toUrlQuery(body)
      }).then(res => {
        return res.json()
      })
        .then(res => {
          if (res.status === '0' || res.status === 0) {
            _this.status.first = res.data.first
            _this.status.second = res.data.second
            _this.status.super = res.data.super
          }
        })
      fetch(`/static/json/detail/detail_${_this.$route.params.pid}.json`).then(res => {
        return res.json()
      })
        .then(res => {
          _this.data = res.platform
          _this.items = res.tasklist
          window.g_data = '234'
          Indicator.close()
        })
    },
    data () {
      return {
        data: {},
        items: [],
        uid: this.$route.query.uid,
        status: {
          first: null,
          second: null,
          super: null
        }
      }
    },
    components: {
      coupon
    },
    methods: {
      alertBox (val) {
        console.log(val)
        if (val === '0' || !val) return
        MessageBox.prompt('为了追踪您的投资信息进行返现奖励请输入您将用于注册投资的手机号码：', '首投登记').then(({ value, action }) => {
          alert(value + '====123====' + action)
        })
      }
    }
  }
</script>

