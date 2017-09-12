<template>
  <div class="extra setnone" id="extra" style="display: block">
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
  </div>
</template>
<style scoped src="../assets/css/base.css"></style>
<style scoped src="../assets/css/q_a.css"></style>
<style scoped>
  .rule_box {
    padding-left: 12vw;
    position: relative;
    padding-bottom: 6vw;
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
    border-bottom: 2px solid #5f89da!important;
    color: #5f89da!important;
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
    color: #fff!important;
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
        open: null,
        btntype: true,
        defaulttel: '',
        result: false
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
        // if (!this.open) {
        //   Toast({
        //     message: '活动尚未开始，请稍候',
        //     position: 'middle',
        //     duration: 1000
        //   })
        //   return
        // }
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
