<template>
  <div>
    <div class="alert">
      <h5 class="title tac">返现进度</h5>
      <p class="title_message tac">{{obj.pnamecn}} {{obj.source == '1'?'复投':'首投'}}</p>
      <div class="message">
        <div class="message_box done">
          <h6>已登记，正前往投资</h6>
          <p>
            {{obj.createtime.substr(0,10)}}
            <br> 登记手机号：{{obj.mobile}}
          </p>
        </div>
        <div v-if="obj.status=='0'" class="message_box">
          <h6>等待平台确认</h6>
          <p>
            一般0-7个工作日会确认
          </p>
        </div>
        <div v-if="obj.status=='1'" class="message_box done">
          <h6>平台已确认投资</h6>
          <p>
            {{obj.updatetime.substr(0,10)}}
          </p>
        </div>
        <div class="message_box" :class="obj.status=='1'?'done':''">
          <h6>{{obj.status=='0'?'符合返现要求，发放返现':'符合返现要求，返现已发放'}}</h6>
          <p v-if="obj.status!='0'">
            登记手机号：{{obj.mobile}}
          </p>
        </div>
      </div>
      <button @click="hideself" class="btn_cyan">确定</button>
      <p v-if="cui" class="bottom_message tac">返现太慢？
        <a @click="cuidan">点此催单</a>
      </p>
      <p v-if="!cui" class="bottom_message tac">已催单，运营小妹辛苦处理中
      </p>
      <a @click="hideself" class="esc"></a>
    </div>
    <div class="mask"></div>
  
  </div>
</template>
<script>
  import $ from 'jquery'
  // import { toUrlQuery } from '../assets/js/tool'
  export default {
    data () {
      return {
        cui: this.obj.reminder === 0 || this.obj.reminder === '0'
      }
    },
    props: ['obj'],
    methods: {
      hideself () {
        this.$emit('hideself')
      },
      cuidan () {
        const _this = this
        $.ajax({
          type: 'POST',
          url: '/forward.php',
          data: {
            'url': '/CaiyuPartner/api/v1/invest/reminder',
            'data': {
              'uid': _this.$route.params.uid,
              'id': _this.obj.id
            }
          },
          dataType: 'json',
          success: function (res) {
            if (res.status === 0) {
              _this.$emit('cuifalse')
              _this.cui = false
            } else {
            }
          }
        })
        // fetch('/forward.php', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //     'Accept': 'application/json, text/plain, */*'
        //   },
        //   body: toUrlQuery(body)
        // }).then(function (res) {
        //   return res.json()
        // })
        //   .then(function (data) {
        //     if (data.status === 0) {
        //       _this.cui = false
        //     } else {
        //     }
        //   })
      }
    }
  }
</script>

<style scoped>
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
    padding: 25px 20px 15px;
    min-height: 36px;
    padding-left: 42px;
    padding-bottom: 5px;
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
  
  .message_box:not(:first-of-type)::before {
    content: '';
    display: block;
    position: absolute;
    height: 88.5px;
    border-left: solid 1px #e1e1e1;
    left: -12px;
    top: -80px;
  }
  
  .message_box h6::before {
    content: '';
    display: block;
    position: absolute;
    left: -15px;
    width: 7px;
    height: 7px;
    z-index: 33;
  
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
