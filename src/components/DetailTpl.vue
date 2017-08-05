


<template>
  <div>
    <header>
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
        <coupon :data="item" v-for="(item, i) in items" :key="i" v-on:childClick="alertBox"></coupon>
        <h6 style="color: #909090;padding: 0 1.19444em;">
          <br>注意：
          <br> 已经通过财鱼管家注册的用户，可以直接去汇盈金服官网或app中投资。
          <br> ＊通过本页面进行注册的理财平台新用户有资格获得返现，首投满足奖励的条件与对应的奖励以本页面活动规则为准。
          <br> ＊符合条件的用户，财鱼管家将在7个工作日内会发放返现红包至财鱼管家“我的-提醒”页面中。
          <br> ＊禁止任何形式的刷单行为，如果发现（如同一IP刷单等），平台将不予结算。
          <br> ＊如果活动期间奖励规则变动，则以注册时间（且注册后24小时内完成投资）的奖励规则为准。
          <br>
        </h6>
      </div>
    </header>
    <section>
      <div class="delivery-order">
        <h6 class="title relative" id="see-delivery-order">
          <span class="benift-plan">投资晒单</span>
          <!--<span style="left:80px" class="title-right">共15人晒单</span>-->
          <a style="color:gray!important" class="toShare title-right">查看全部晒单
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
          <!--<div class="time relative">
                                                                                                    <h6>投资豆包金服90天标10000元</h6>
                                                                                                    <h6 class="appreciate" data-likenum="3" data-id="2724"><i class=""></i>点赞(<span>3</span>)</h6>
                                                                                                  </div>-->
        </div>
      </div>
      <div class="extra setnone" id="extra" style="display: block">
        <h6 class="title relative" id="hidden-title">
          <span>常见问题</span>
        </h6>
        <div style="padding-top:20px">
          <qa></qa>
        </div>
      </div>
    </section>
  
    <div class="fixed_button relative" id="fixed_button">
      <hr class="divider divider-horizontal divider-top">
      <a href="http://wpa.qq.com/msgrd?v=3&uin=3344813056&site=qq&menu=yes" class="kefu">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAMAAABEH1h2AAAAilBMVEUAAABvkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf/zcJnUAAAALXRSTlMA+u04AwWHIpcT0uO1zFlMHMCs3XhAMCgY9vO7sQrpmnEO2saSYqSdfVaQZ2Vehk0JAAAC0ElEQVRIx+1W2baiMBBMwiIggoi4oI7ifpf+/9+bIjLJBcOiZx5vvZBDUt2d6u4k7Bf/HaPLeZPmRHm6OV9Gr3GXbko1pO5yMDnbkAGbbJjnBzkP5/HSdxx/Gc/D/GGgPwL7zrGQb2OH/YATb+Xvu93NXiXlqtvIIOWtNJCsOgMfY8lJxmhb81kgOBfBbG7ZcvKEyXHHBhZ/sMAt105dGNIYu9PSoouhWLSmGuw8xsD3ODXAPR8TMTT801IE/hG2LQw+BBkgPjBlYeroG+kh0Rpsx6MWeA74a6LQxD5gASLfhdSKcIf48T08s6c5VIPvLXVgC/8uBJo+0WdEASY96oQHBwHR7ClnmMugGvUgQkvg08zeVZr0RR9d+DLQa6NYubToUS88GSlfNWVPIB/vp3PIljTFnxBdpKj9QHouRJNa7LBaMHs8hD62WYEodelJwU+oKBoEVOaprDAFO5Rbnw+jz+Vet7bqtMljS7Nh9NkjQ5OR7lMZTDCMHkjt/nWuDd8AxmIYXcjMA5My/ogkUO98GJ0jU6qCWdWg7BU6qxqYqZCnw4NX3sfKEFmvSLeo4tDeDypxm5biS0OVuG/tvfp5VWVzZ5Z7aujAk/uC3VXZ7PXeo8q2KtqAAUV2uCVpeU0ck/3B2jEgaG4z0nnntmoZixlhqZZh6yrvuuooUg2bmOmJatgFVVWnah629HHxbWJ/6+NiS7rmATsKEFShDqu1ZQh9rQ4rlkOgyGYahex+dVQK64kt9FGZwUHBTIio8v/FavhakxZ7Q7RnZqizNrF+uK5Ue9BiCGC+ZWuX1NHNVo6zytxj7ZIq0nbn/Vcku0kBWtB3QbMvDD5YFyLz8yBiQMxle7Sj43ECNjJw2vXQzU8j4MKhKIbdMD/M2K7s0xTst5ClYE9WL/OcsxDnxzv5umMv47Mm/ssQlfh7n71PV+/kt4L/fIuqpHPYL+r4C8IzA842MxsYAAAAAElFTkSuQmCC">
        <span>客服</span>
      </a>
      <a>
        <span class="btn-join xjoin join_f" data-status="1">参与活动</span>
      </a>
    </div>
  
  </div>
</template>
<style scoped src="../assets/css/detail.css"></style>
<script>
  import { Indicator, MessageBox } from 'mint-ui'
  import coupon from './coupon'
  export default {
    created: function () {
      const _this = this
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })

      fetch('/static/detail.json').then(res => {
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
        items: []
      }
    },
    components: {
      coupon
    },
    methods: {
      alertBox () {
        MessageBox.prompt('为了追踪您的投资信息进行返现奖励请输入您将用于注册投资的手机号码：', '首投登记').then(({ value, action }) => {
          alert(value + '====123====' + action)
        })
        // MessageBox({
        //   title: '首投登记',
        //   message: '为了追踪您的投资信息进行返现奖励请输入您将用于注册投资的手机号码：',
        //   confirmButtonText: '去投资',
        //   confirmButtonHighlight: 'true',
        //   showCancelButton: 'true',
        //   cancelButtonText: '再想想',
        //   showInput: 'true',
        //   inputType: 'tel',
        //   inputPlaceholder: '请输入注册投资的手机号'
        // }).then(({ value, action }) => {
        //   alert(value + '====123====' + action)
        // })
      }
    }
  }
</script>

