<template>
  <div style="background-color: #EFEFF0;">
  
    <header>
      <a :href="'http://h5.caiyu.in/dashboard/invite.html?uid='+uid">
        <img src="/img/invite_icon_2.png" class="invite_btn">
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
            <p class="xtext2">{{data.ratedesc}}</p>
  
            <span class="xfengkong">
              <span class="xfengkong_span1">风控指标：{{data.grade}}</span>
              <span class="xfengkong_span2">平台监控：{{data.detectlevel}}</span>
            </span>
          </div>
        </div>
      </router-link>
      <div class="xcoupon">
        <p class="tac attention">请根据自身风险承受能力谨慎考察后投资</p>
        <coupon :fi="status.first" :se="status.second" :su="status.super" :props="item" v-for="(item, i) in items" :key="i" v-on:childClick="alertBox"></coupon>
        <h6 style="color: #909090;padding: 0 1.19444em;">
          <br v-if="data.topspecilarule.length>0">
          <li v-for="(item,i) in data.topspecilarule" :key="i" class="red">{{item}}</li>
          <li v-if="data.rule[0]">注意：</li>
          <li v-for="(item,i) in data.midspecilarule" :key="i" class="red">{{item}}</li>
          <li v-for="(item,i) in data.grayspecilarule" :key="i">{{item}}</li>
          <li v-if="data.rule[1]"> ＊已经通过财鱼管家注册的用户，可以直接去{{data.title}}官网或app中投资。</li>
          <li v-if="data.rule[2]"> ＊通过本页面进行注册的理财平台新用户有资格获得返现，首投满足奖励的条件与对应的奖励以本页面活动规则为准。</li>
          <li v-if="data.rule[3]"> ＊符合条件的用户，财鱼管家将在7个工作日内会发放返现红包至财鱼管家“我的-提醒”页面中。</li>
          <li v-if="data.rule[4]"> ＊禁止任何形式的刷单行为，如果发现（如同一IP刷单等），平台将不予结算。</li>
          <li v-if="data.rule[5]"> ＊如果活动期间奖励规则变动，则以注册时间（且注册后24小时内完成投资）的奖励规则为准。</li>
          <li v-for="(item,i) in data.btmspecilarule" :key="i" class="red">{{item}}</li>
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
        <div v-if="data.description.length>0" style="color: #909090;padding: 0 1.19444em; font-size: 13px">
          <li v-for="(item,i) in data.description" :key="i">{{item}}</li>
        </div>
        <div v-else style="color: #909090;padding: 0 1.19444em; font-size: 13px">
          <li>1.点击活动按钮，在平台活动页面注册账号。注册成功后在24小时内投资活动标的。</li>
          <li> 2.投资成功后，7个工作日内，将会在财鱼管家app“我的-提醒”中收到返现红包。</li>
          <li> 3.务必注意，在通过本活动页面注册的理财平台账户才有效，通过其他渠道进行的注册与投资行为无效。</li>
          <li> 4.如果中间奖励规则变动，则已注册时间（且在注册后24小时内完成投资）的奖励规则为准。</li>
          <li>5.如有疑问可以添加财鱼管家活动群467258481 进行咨询。</li>
          <li> 温馨提示：财鱼管家展示不同的理财产品供用户选择，不同的理财产品将承受不同的风险，投资前请仔细考虑平台新用等各方面因素。</li>
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
          <div v-if="data.qa[0]">
            <div class="question">
              <p>用券还可以得奖励吗？</p>
            </div>
            <div class="answer">
              <p>注册后平台给的优惠券，是可以使用的。</p>
            </div>
          </div>
          <div v-if="data.qa[1]">
            <div class="question">
              <p>可以投资新手标吗？</p>
            </div>
            <div class="answer">
              <p>可以的。</p>
            </div>
          </div>
          <div v-if="data.qa[2]">
            <div class="question">
              <p>投资号码和注册财鱼的号码是否要求一致？</p>
            </div>
            <div class="answer">
              <p>从财鱼管家APP中参加活动，两者号码可以不一致。</p>
            </div>
          </div>
          <div v-if="data.qa[3]">
            <div class="question">
              <p>一个平台能投几个方案？</p>
            </div>
            <div class="answer">
              <p>每个平台只有首次投资是能获得返现的。</p>
            </div>
          </div>
          <div v-if="data.qa[4]">
            <div class="question">
              <p>投资之后要交单（登记）吗？</p>
            </div>
            <div class="answer">
              <p>不需要。投资后会按活动规定的时间进行返现。如超时未收到返现，可以在活动QQ群（467258481）联系客服查询。</p>
            </div>
          </div>
          <div v-if="data.qa[5]">
            <div class="question">
              <p>同一设备、同一IP、同一财鱼管家账号能用不同手机号在同一平台注册投资吗？</p>
            </div>
            <div class="answer">
              <p>同一个账号，同一IP，同一设备，只能在同一个平台投资返利一次。</p>
            </div>
          </div>
          <div v-if="data.qa[6]">
            <div class="question">
              <p>投资金额或期限大于方案规定的可以返现吗？</p>
            </div>
            <div class="answer">
              <p>是可以返现的。</p>
            </div>
          </div>
        </div>
      </div>
      <div style=" font-size: 12px;margin-top: 13px; margin-bottom: 13px; color: #777; text-align:center; ">参与活动则表示同意
        <a href="http://h5.caiyu.in/dashboard/agreement.html">返现协议与免责声明</a>
      </div>
    </section>
  
    <div class="fixed_button relative" id="fixed_button">
      <hr class="divider divider-horizontal divider-top">
      <a href="http://wpa.qq.com/msgrd?v=3&uin=3344813056&site=qq&menu=yes" class="kefu">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAMAAABEH1h2AAAAilBMVEUAAABvkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf/zcJnUAAAALXRSTlMA+u04AwWHIpcT0uO1zFlMHMCs3XhAMCgY9vO7sQrpmnEO2saSYqSdfVaQZ2Vehk0JAAAC0ElEQVRIx+1W2baiMBBMwiIggoi4oI7ifpf+/9+bIjLJBcOiZx5vvZBDUt2d6u4k7Bf/HaPLeZPmRHm6OV9Gr3GXbko1pO5yMDnbkAGbbJjnBzkP5/HSdxx/Gc/D/GGgPwL7zrGQb2OH/YATb+Xvu93NXiXlqtvIIOWtNJCsOgMfY8lJxmhb81kgOBfBbG7ZcvKEyXHHBhZ/sMAt105dGNIYu9PSoouhWLSmGuw8xsD3ODXAPR8TMTT801IE/hG2LQw+BBkgPjBlYeroG+kh0Rpsx6MWeA74a6LQxD5gASLfhdSKcIf48T08s6c5VIPvLXVgC/8uBJo+0WdEASY96oQHBwHR7ClnmMugGvUgQkvg08zeVZr0RR9d+DLQa6NYubToUS88GSlfNWVPIB/vp3PIljTFnxBdpKj9QHouRJNa7LBaMHs8hD62WYEodelJwU+oKBoEVOaprDAFO5Rbnw+jz+Vet7bqtMljS7Nh9NkjQ5OR7lMZTDCMHkjt/nWuDd8AxmIYXcjMA5My/ogkUO98GJ0jU6qCWdWg7BU6qxqYqZCnw4NX3sfKEFmvSLeo4tDeDypxm5biS0OVuG/tvfp5VWVzZ5Z7aujAk/uC3VXZ7PXeo8q2KtqAAUV2uCVpeU0ck/3B2jEgaG4z0nnntmoZixlhqZZh6yrvuuooUg2bmOmJatgFVVWnah629HHxbWJ/6+NiS7rmATsKEFShDqu1ZQh9rQ4rlkOgyGYahex+dVQK64kt9FGZwUHBTIio8v/FavhakxZ7Q7RnZqizNrF+uK5Ue9BiCGC+ZWuX1NHNVo6zytxj7ZIq0nbn/Vcku0kBWtB3QbMvDD5YFyLz8yBiQMxle7Sj43ECNjJw2vXQzU8j4MKhKIbdMD/M2K7s0xTst5ClYE9WL/OcsxDnxzv5umMv47Mm/ssQlfh7n71PV+/kt4L/fIuqpHPYL+r4C8IzA842MxsYAAAAAElFTkSuQmCC">
        <span>客服</span>
      </a>
      <a @click="alertBox('0')">
        <span class="btn-join xjoin join_f" :class="status.first?'':'disabled'" data-status="1">{{status.first?'参与首投活动':'首投活动已抢光，敬请等待下期'}}</span>
      </a>
    </div>
    <messagebox v-if="alert" @dowhat="doajax" @hideself="hidealert" :score="data.grade" :data="type" :pid="pid"></messagebox>
  </div>
</template>
<style scoped src="../assets/css/base.css"></style>
<style scoped src="../assets/css/q_a.css"></style>

<style scoped src="../assets/css/detail.css"></style>
<style>
  .attention {
    margin: 0;
    font-size: 3.5vw;
    -webkit-transform: translateY(-1vw);
    transform: translateY(-1vw);
    color: gray;
    font-weight: 400;
    margin: 0;
    font-size: 3.5vw;
    -webkit-transform: translateY(-1vw);
    transform: translateY(-7.5px);
    color: gray;
    font-weight: 400;
    height: 11px;
    opacity: .5;
    font-size: 11px;
    color: #374259;
    margin-bottom: 2px;
    line-height: 11px;
  }
</style>

<script>
  import messagebox from './messagebox'
  import { Indicator, Toast } from 'mint-ui'
  // import { toUrlQuery } from '../assets/js/tool'
  import $ from 'jquery'
  import coupon from './coupon'
  function statEvent (active, type) {
    $.ajax({
      type: 'POST',
      url: '/ajax.php',
      dataType: 'json',
      data: {
        func: 'submitAccessStat',
        data: {
          'active': active,
          'type': type
        }
      }
    })
  }
  statEvent('新什么值得投', '详情页')
  export default {
    created () {
      statEvent('新什么值得投详情页', this.$route.params.pid)
      const _this = this
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      document.setTitle = function (t) {
        document.title = t
        var i = document.createElement('iframe')
        i.src = '//m.baidu.com/favicon.ico'
        i.style.display = 'none'
        i.onload = function () {
          setTimeout(function () {
            i.remove()
          }, 9)
        }
        document.body.appendChild(i)
      }
      document.setTitle('活动详情')
      let ten = Date.parse(new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate() + ' 10:00:00')
      let date = Date.now()
      this.open = (date > ten)
      $.ajax({
        type: 'POST',
        url: '/forward.php',
        data: {
          'url': '/CaiyuPartner/api/v1/invest/platform/valid',
          'data': {
            'pid': this.$route.params.pid
          }
        },
        dataType: 'json',
        success: function (res) {
          if (res.status === '0' || res.status === 0) {
            _this.status.first = res.data.first
            _this.status.second = res.data.second
            _this.status.super = res.data.super
            Indicator.close()
          }
        }
      })
      $.ajax({
        type: 'GET',
        url: '/static/json/detail/detail_' + _this.$route.params.pid + '.json?' + Date.now(),
        dataType: 'json',
        success: function (res) {
          _this.data = res.platform
          _this.items = res.tasklist
        }
      })
      setTimeout(function () {
        Indicator.close()
      }, 1500)
    },
    data () {
      return {
        data: {},
        items: [],
        uid: this.$route.query.uid,
        pid: this.$route.params.pid,
        status: {
          first: null,
          second: null,
          super: null
        },
        type: null,
        alert: null,
        login: this.$route.query.caiyu_islogin,
        open: null
      }
    },
    computed: {
      fanxianurl () {
        let str = this.data.fanxianurl
        if (str.indexOf('?') !== -1) {
          return str + '&u_id=' + this.uid
        } else {
          return str + '?u_id=' + this.uid
        }
      }
    },
    components: {
      coupon,
      messagebox
    },
    methods: {
      hidealert () {
        this.alert = false
      },
      alertBox (val) {
        const _this = this
        if (this.login === 0 || this.login === '0' || this.login === false || this.login === 'false') {
          if (navigator.userAgent.match('iphone') || navigator.userAgent.match('Iphone') || navigator.userAgent.match('iPhone')) {
            location.href = 'kopak://commitPhoneViewController'
            return
          } else if (navigator.userAgent.match('android') || navigator.userAgent.match('Android')) {
            location.href = 'kopak://caiyu/userCheckMobilePage'
            return
          }
        }
        switch (val) {
          case '0':
            if (!this.status.first) {
              Toast({
                message: '活动已满',
                position: 'middle',
                duration: 1000
              })
              return
            }
            break
          case '1':
            if (!this.status.second) {
              Toast({
                message: '活动已满',
                position: 'middle',
                duration: 1000
              })
              return
            }
            break
          case '4':
            if (!this.status.super) {
              Toast({
                message: '活动已满',
                position: 'middle',
                duration: 1000
              })
              return
            }
            break
          case '44':
            if (val) {
              Toast({
                message: '活动尚未开始，请稍候',
                position: 'middle',
                duration: 1000
              })
              return
            }
            break
        }
        if (!this.open) {
          Toast({
            message: '活动尚未开始，请稍候',
            position: 'middle',
            duration: 1000
          })
          return
        }
        this.type = val
        this.alert = true
        statEvent('新什么值得投', '详情页弹窗')
        statEvent('新什么值得投', '详情页弹窗' + _this.$route.params.pid)
      },
      doajax (tel) {
        const _this = this
        let uuid
        if (!_this.$route.query.uid) {
          uuid = ''
        } else {
          uuid = decodeURIComponent(_this.$route.query.uid)
        }
        let code
        if (!_this.$route.query.code) {
          code = ''
        } else {
          code = _this.$route.query.code
        }
        $.ajax({
          type: 'POST',
          url: '/forward.php',
          data: {
            'url': '/CaiyuPartner/api/v1/invest/register',
            'data': {
              'pid': _this.$route.params.pid,
              'mobile': tel,
              'uid': uuid,
              'source': _this.type,
              'code': code
            }
          },
          dataType: 'json',
          success: function (res) {
            if (res.status === 0 || res.status === '0') {
              statEvent('新什么值得投', '详情页登记成功')
              statEvent('新什么值得投详情页登记', _this.$route.params.pid)
              if (_this.type === 1 || _this.type === '1' || _this.type === 5 || _this.type === '5') {
                _this.alert = false
                Toast({
                  message: '登记成功，请前往该平台投资即可',
                  position: 'middle',
                  duration: 1000
                })
              } else {
                _this.alert = false
                location.href = _this.fanxianurl
              }
            } else {
              Toast({
                message: res.msg,
                position: 'middle',
                duration: 1000
              })
            }
          }
        })
      }
    }
  }
</script>
