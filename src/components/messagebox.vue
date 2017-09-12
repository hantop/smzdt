<template>
  <div>
    <div class="alert">

      <h5 v-if="!result" class="title tac">{{name}}名额登记</h5>
      <h5 v-if="result" class="title tac">恭喜您登记成功<br>获得返现名额</h5>
      <!-- <p class="title_message tac">lalala</p> -->
      <div v-if="!result" class="message">
        <p class="text tac">
          请输入您计划用于投资平台的手机号
        </p>
      </div>
      <div v-if="result" class="message">
        <p class="text2 tac">
          请使用手机号{{tel}}<br>注册{{pname}}平台，并按活动规则投资，即可获得返现。
        </p>
      </div>
      <!-- <p class="yellow tac">*该手机号码仅用于信息追踪</p> -->
      <input v-if="!result" v-model="tel" class="alert_input tac" type="text" @focus="tel=''" name="" id="" placeholder="请输入注册投资的手机号">
      <div v-if="!result" class="agree"><input v-model="ischecked" type="checkbox">同意
        <a href="http://h5.caiyu.in/dashboard/agreement.html">返现协议与免责声明</a>
      </div>
      <button @click="dowhat" :class="ischecked?'':'disable'" class="btn_cyan bbbtn">{{!result?'确定':'正在跳转至'+pname+'...'}}</button>
      <!-- <div v-if="!result" style=" font-size: 12px;margin-top: 13px;  color: #777; text-align:center; ">您即将投资的是评级为
          <router-link :to="'/riskscore/'+pid">{{score}}</router-link> 的平台</div> -->
      <a v-if="!result" @click="hideself" class="esc"></a>
    </div>
    <div class="mask"></div>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        tel: this.defaulttel,
        ischecked: true
      }
    },
    props: ['data', 'score', 'pid', 'defaulttel', 'result', 'pname'],
    computed: {
      name () {
        switch (this.data) {
          case '0':
            return '首投'
          case '1':
            return '复投'
          case '5':
            return '复投'
          case '4':

            return '超级返'
        }
      }
    },
    methods: {
      hideself () {
        this.$emit('hideself')
      },
      dowhat () {
        if (!this.ischecked || this.result) return
        this.$emit('dowhat', this.tel)
      }
    }
  }
</script>

<style scoped>
  .text2 {
    font-size: 14px;
    margin-top: 4px;
  }

  .bbbtn {
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0;
  }

  .agree {
    font-size: 12px;
    margin-top: 4px;
    color: rgb(119, 119, 119);
    text-align: center;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    margin: 10px 0;
  }

  .yellow {
    font-size: 12px;
    color: #e8be3f;
    position: absolute;
    bottom: 184px;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    width: 100%;
  }

  .text {
    font-size: 12px;
  }

  .alert_input {
    margin: 4px 0;
  }

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
    height: 236px;
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
    min-height: 36px;
    padding-top: 10px;
    padding-bottom: 10px;
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

  .message_box:not(:last-of-type)::before {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    border-left: solid 1px #e1e1e1;
    left: -12px;
    top: 12px;
  }

  .message_box h6::before {
    content: '';
    display: block;
    position: absolute;
    left: -15px;
    width: 7px;
    height: 7px;

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
