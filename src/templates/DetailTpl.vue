<template>
  <div style="background-color: #EFEFF0;">

    <header>
      <a :href="'http://h5.caiyu.in/dashboard/invite.html?uid='+uid">
        <img src="/img/invite_icon_2.old.png" class="invite_btn">
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
        <div v-if="data.hasfutou == true" class="btntype">
          <p :class="btntype?'btn_active':''" @click="btntype=true" class="btn_left">首投奖励</p>
          <p :class="btntype?'':'btn_active'" @click="btntype=false" class="btn_right">复投奖励</p>
        </div>
        <router-link class="top_speed" :to="'/prize/'+encodeURIComponent(uid)">查看最新奖励进度 ></router-link>
        <p class="tac attention">请根据自身风险承受能力谨慎考察后投资</p>
        <coupon :fi="status.first" :se="status.second" :su="status.super" :props="item" v-for="(item, i) in items" :key="i" v-if="showlisttype?item.fanlitype !=1 &&item.fanlitype !=5:item.fanlitype ==1||item.fanlitype ==5" v-on:childClick="alertBox"></coupon>
        <h6 v-show="btntype" style="color: #909090;padding: 0 1.19444em;">
          <br v-if="data.shoutoutext.topspecilarule.length>0">
          <li v-for="(item,i) in data.shoutoutext.topspecilarule" :key="i" class="red">{{item}}</li>
          <br v-if="data.shoutoutext.topspecilarule.length>0">
          <li v-if="data.shoutoutext.rule">特别说明：</li>
          <li v-for="(item,i) in data.shoutoutext.midspecilarule" :key="i" class="red">{{item}}</li>
          <li v-for="(item,i) in data.shoutoutext.grayspecilarule" :key="i">{{item}}</li>
          <li v-for="(item,i) in data.shoutoutext.btmspecilarule" :key="i" class="red">{{item}}</li>
          <li style="margin-top:10px">如有疑问可以添加财鱼管家活动群329792128 进行咨询</li>
        </h6>
        <h6 v-show="!btntype" style="color: #909090;padding: 0 1.19444em;">
          <br v-if="data.futoutext.topspecilarule.length>0">
          <li v-for="(item,i) in data.futoutext.topspecilarule" :key="i" class="red">{{item}}</li>
          <br v-if="data.futoutext.topspecilarule.length>0">
          <li v-if="data.futoutext.rule">复投规则：</li>
          <li v-for="(item,i) in data.futoutext.midspecilarule" :key="i" class="red">{{item}}</li>
          <li v-for="(item,i) in data.futoutext.grayspecilarule" :key="i">{{item}}</li>
          <li v-for="(item,i) in data.futoutext.btmspecilarule" :key="i" class="red">{{item}}</li>

        </h6>
      </div>
      <a class="qa_rule" href="/dashboard/qa.html">查看常见问题 ></a>

    </header>
    <section>

      <div class="extra setnone" id="extra" style="display: block;text-align:center">
        <h6 style="text-align:left" class="title relative" id="hidden-title">
          <span>奖励攻略</span>
        </h6>

        <div style="text-align:left;color: #909090;padding: 0 1.19444em; font-size: 13px">
          <div class="rule_box">
            <h5>1.登记手机号后，通过财鱼管家完成平台注册</h5>
            <li v-if="data.process[0]">只有通过财鱼管家注册的平台账号才能参加奖励活动。</li>
            <li v-for="(item,i) in data.processdata.first" :key="i">{{item}}</li>
          </div>
          <div class="rule_box rule_box2">
            <h5>2.完成投资</h5>
            <li v-if="data.process[1]">平台账号注册成功后，请在48小时内前往平台完成投资，超时将无法奖励。</li>
            <li v-if="data.process[2]">如果活动过程中奖励规则出现变化，以登记时的奖励规则为准。</li>
            <li v-for="(item,i) in data.processdata.second" :key="i">{{item}}</li>
          </div>
          <div class="rule_box rule_box3">
            <h5>3.等待发放奖励</h5>
            <li v-if="data.process[3]">奖励一般会在7个工作日内直接发放至财鱼管家app“我的红包”中。</li>
            <li v-if="data.process[4]">已登记过的手机号请不要在其他财鱼账号上再次登记，否则可能无法收到奖励。</li>
            <li v-for="(item,i) in data.processdata.third" :key="i">{{item}}</li>
          </div>
        </div>
        <router-link class="speed" :to="'/prize/'+encodeURIComponent(uid)">查看最新奖励进度 ></router-link>

        <!--<div class="receive-gift relative btn-receive" data-canuser="0" id="btn-receive">
                                                                                                                                                                                                                                      <a class="toPrize">已参加，我要兑奖</a>
                                                                                                                                                                                                                                      <hr class="divider divider-horizontal divider-top">
                                                                                                                                                                                                                                    </div>-->
      </div>
      <div class="delivery-order">
        <h6 class="title relative" id="see-delivery-order">
          <span class="benift-plan">投资晒单</span>
          <!--<span style="left:80px" class="title-right">共15人晒单</span>-->
          <a :href="'https://sns.91caiyu.com/index.php?app=h5&mod=topic&act=index&name=' + encodeURIComponent(data.title + '奖励') + '&uid=' + uid" style="color:gray!important" class="toShare title-right">查看全部晒单
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
                <!--<h4 class="tips"><span class="tips_icon">投资收益</span><span class="reward_tips">20%年化+350元奖励+100元新手红包</span></h4>-->
              </div>
            </div>

          </div>
          <div class="content">
            <h5 class="center">#钱保姆奖励#</h5>
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
      <!--<div class="extra setnone" id="extra" style="display: block">
                        <h6 class="title relative" id="hidden-title">
                          <span>常见问题</span>
                        </h6>
                        <div style="padding-top:20px">
                          <div v-for="(v, k, i) in data.specialqa" :key="i">
                            <div class="question">
                              <p>{{k}}</p>
                            </div>
                            <div class="answer">
                              <p>{{v}}</p>
                            </div>
                          </div>
                        </div>
                      </div>-->
      <div style=" font-size: 12px;margin-top: 13px; margin-bottom: 13px; color: #777; text-align:center; ">参与活动则表示同意
        <a href="http://h5.caiyu.in/dashboard/agreement.html">奖励协议与免责声明</a>
      </div>
    </section>

    <div class="fixed_button relative" id="fixed_button">
      <hr class="divider divider-horizontal divider-top">
      <a href="http://wpa.qq.com/msgrd?v=3&uin=3344813056&site=qq&menu=yes" class="kefu">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAMAAABEH1h2AAAAilBMVEUAAABvkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf/zcJnUAAAALXRSTlMA+u04AwWHIpcT0uO1zFlMHMCs3XhAMCgY9vO7sQrpmnEO2saSYqSdfVaQZ2Vehk0JAAAC0ElEQVRIx+1W2baiMBBMwiIggoi4oI7ifpf+/9+bIjLJBcOiZx5vvZBDUt2d6u4k7Bf/HaPLeZPmRHm6OV9Gr3GXbko1pO5yMDnbkAGbbJjnBzkP5/HSdxx/Gc/D/GGgPwL7zrGQb2OH/YATb+Xvu93NXiXlqtvIIOWtNJCsOgMfY8lJxmhb81kgOBfBbG7ZcvKEyXHHBhZ/sMAt105dGNIYu9PSoouhWLSmGuw8xsD3ODXAPR8TMTT801IE/hG2LQw+BBkgPjBlYeroG+kh0Rpsx6MWeA74a6LQxD5gASLfhdSKcIf48T08s6c5VIPvLXVgC/8uBJo+0WdEASY96oQHBwHR7ClnmMugGvUgQkvg08zeVZr0RR9d+DLQa6NYubToUS88GSlfNWVPIB/vp3PIljTFnxBdpKj9QHouRJNa7LBaMHs8hD62WYEodelJwU+oKBoEVOaprDAFO5Rbnw+jz+Vet7bqtMljS7Nh9NkjQ5OR7lMZTDCMHkjt/nWuDd8AxmIYXcjMA5My/ogkUO98GJ0jU6qCWdWg7BU6qxqYqZCnw4NX3sfKEFmvSLeo4tDeDypxm5biS0OVuG/tvfp5VWVzZ5Z7aujAk/uC3VXZ7PXeo8q2KtqAAUV2uCVpeU0ck/3B2jEgaG4z0nnntmoZixlhqZZh6yrvuuooUg2bmOmJatgFVVWnah629HHxbWJ/6+NiS7rmATsKEFShDqu1ZQh9rQ4rlkOgyGYahex+dVQK64kt9FGZwUHBTIio8v/FavhakxZ7Q7RnZqizNrF+uK5Ue9BiCGC+ZWuX1NHNVo6zytxj7ZIq0nbn/Vcku0kBWtB3QbMvDD5YFyLz8yBiQMxle7Sj43ECNjJw2vXQzU8j4MKhKIbdMD/M2K7s0xTst5ClYE9WL/OcsxDnxzv5umMv47Mm/ssQlfh7n71PV+/kt4L/fIuqpHPYL+r4C8IzA842MxsYAAAAAElFTkSuQmCC">
        <span>客服</span>
      </a>
      <a @click="alertBox('0')">
        <span class="btn-join xjoin join_f" :class="status.first?'':'disabled'" data-status="1">{{status.first ? '参与首投活动' : '首投活动已抢光，敬请等待下期'}}</span>
      </a>
    </div>
    <messagebox :cashCoupon="cashCoupon" :pname="data.title" v-if="alert" @dowhat="doajax" @hideself="hidealert" :score="data.grade" :hideCoupon="hideCoupon" :data="type" :pid="pid" :result="result" :defaulttel="defaulttel"></messagebox>
  </div>
</template>
<style scoped src="../assets/css/base.css"></style>
<style scoped src="../assets/css/q_a.css"></style>

<style scoped src="../assets/css/detail.css"></style>
<style scoped>
  .qa_rule {
    margin: 0 auto;
    display: block;
    margin-top: 10px;
    text-align: center;
  }

  .rule_box {
    padding-left: 12vw;
    position: relative;
    padding-bottom: 6vw;
  }
  .top_speed{
    font-size: 1.4rem;
    /* background-color: #36bcc1; */
    display: block;
    text-align: center;
    transform: translateY(-2vw);
    margin-bottom: 1vw;
  }
  .rule_box::after {
    content: '';
    height: 100%;
    width: 1px;
    border-left: 1px solid #4e92df;
    position: absolute;
    left: 5.4vw;
    top: 3vw;
  }

  .rule_box3::after {
    border-left: none;
  }

  .rule_box h5 {
    font-size: 1.2em;
    font-weight: 600;
    position: relative;
    margin-bottom: 2vw;
  }

  .rule_box h5::after {
    content: '1';
    display: block;
    position: absolute;
    left: -10vw;
    width: 5vw;
    height: 5vw;
    background-color: #4e92df;
    border-radius: 50%;
    padding: 1vw;
    text-align: center;
    line-height: 5vw;
    color: #fff;
    z-index: 2;
    top: -0.5vw;
  }

  .rule_box2 h5::after {
    content: '2'
  }

  .rule_box3 h5::after {
    content: '3'
  }

  .btntype {
    display: flex;
    width: 100%;
    transform: translateY(-1vw);
    padding: 0 5%;
    margin-bottom: 4vw;
  }

  .btntype p {
    flex: 1;
    text-align: center;
    border-bottom: 1px solid #cdcdcd;
    color: #666;
    padding-bottom: 2vw;
  }

  .btn_active {
    border-bottom: 2px solid #5f89da !important;
    color: #5f89da !important;
  }

  .xfengkong::after {
    content: " ";
    display: inline-block;
    height: 16px;
    width: 16px;
    border-width: 2px 2px 0 0;
    border-color: #c8c8cd;
    border-style: solid;
    -webkit-transform: matrix(.71, .71, -.71, .71, 0, 0);
    transform: matriX(.71, .71, -.71, .71, 0, 0);
    position: absolute;
    right: 20px;
    top: 50%;
  }

  .speed {
    font-size: 1.4rem;
    background-color: #36bcc1;
    display: inline-block;
    position: relative;
    color: #fff !important;
    padding: .4rem 1.3em;
    border-radius: 5rem;
    font-weight: 700;
    margin: 1rem auto .1rem;
  }

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
  import messagebox from '@/components/messagebox'
  import { Indicator, Toast } from 'mint-ui'
  // import { toUrlQuery } from '../assets/js/tool'
  import $ from 'jquery'
  import coupon from '@/components/coupon'

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
            'pid': this.$route.params.pid,
            'uid': this.uid
          }
        },
        dataType: 'json',
        success: function (res) {
          if (res.status === '0' || res.status === 0) {
            _this.status.first = res.data.first
            _this.status.second = res.data.second
            _this.status.super = res.data.super
            _this.defaulttel = res.data.mobile
            _this.cashCoupon = res.data.cashCoupon || {}
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
        open: null,
        btntype: true,
        defaulttel: '',
        result: false,
        cashCoupon: {},
        couponid: '',
        hideCoupon: false
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
      },
      showlisttype () {
        return this.btntype
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
        this.result = false
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
        switch (val.fanlitype) {
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
        // if (!this.open) {
        //   Toast({
        //     message: '活动尚未开始，请稍候',
        //     position: 'middle',
        //     duration: 1000
        //   })
        //   return
        // }
        this.type = val.fanlitype
        this.alert = true
        this.hideCoupon = val.hideCoupon
        statEvent('新什么值得投', '详情页弹窗')
        statEvent('新什么值得投', '详情页弹窗' + _this.$route.params.pid)
      },
      doajax (val) {
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
        let couponid = ''
        if (val.usecoupon && this.cashCoupon.id) {
          console.log(1)
          couponid = this.cashCoupon.id
        }
        $.ajax({
          type: 'POST',
          url: '/forward.php',
          data: {
            'url': '/CaiyuPartner/api/v1/invest/register',
            'data': {
              'pid': _this.$route.params.pid,
              'mobile': val.tel,
              'uid': uuid,
              'source': _this.type,
              'code': code,
              'couponid': couponid
            }
          },
          dataType: 'json',
          success: function (res) {
            if (res.status === 0 || res.status === '0') {
              statEvent('新什么值得投', '详情页登记成功')
              statEvent('新什么值得投详情页登记', _this.$route.params.pid)
              _this.cashCoupon = {}
              if (_this.type === 1 || _this.type === '1' || _this.type === 5 || _this.type === '5') {
                _this.alert = false
                Toast({
                  message: '登记成功，请前往该平台投资即可',
                  position: 'middle',
                  duration: 1000
                })
              } else {
                _this.result = true
                setTimeout(function () {
                  _this.alert = false
                  const that = _this
                  if (that.pid === '6568') {
                    location.href = 'https://m.minaiw.com/wap/index.php?ctl=new_registerw&pt=146'
                  } else {
                    location.href = _this.fanxianurl
                  }
                }, 4000)
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
