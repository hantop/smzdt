<template>
  <div>
    <div class="alert">
      <h5 class="title tac">{{name}}名额登记</h5>
      <!-- <p class="title_message tac">lalala</p> -->
      <div class="message">
        <p v-if="data!='4'" class="text tac">
          为了追踪您的投资信息进行返现奖励请输入您将用于注册投资的手机号码：
        </p>
        <p v-if="data=='4'" class="text tac">
          请于24小时内登记投资手机号<br>并完成投资
        </p>
      </div>
      <p class="yellow tac">*该手机号码仅用于信息追踪</p>
      <input v-model="tel" class="alert_input tac" type="text" name="" id="" placeholder="请输入注册投资的手机号">
      <button @click="dowhat" class="btn_cyan">确定</button>
      <div style=" font-size: 12px;margin-top: 13px;  color: #777; text-align:center; ">您即将投资的是评级为 <router-link :to="'/riskscore/'+pid">{{score}}</router-link> 的平台</div>
      <div style=" font-size: 12px;margin-top: 4px;  color: #777; text-align:center; ">参与活动则表示同意 <a href="http://h5.caiyu.in/dashboard/agreement.html">返现协议与免责声明</a></div>
      <a @click="hideself" class="esc"></a>
    </div>
    <div class="mask"></div>
  
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tel: ''
      }
    },
    props: ['data', 'score', 'pid'],
    computed: {
      name () {
        switch (this.data) {
          case '0':
            return '首投'
          case '1':
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
        this.$emit('dowhat', this.tel)
      }
    }
  }
</script>

<style scoped>
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
    font-size: 16px;
  }
  
  .alert_input {
    margin: 25px 0;
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
