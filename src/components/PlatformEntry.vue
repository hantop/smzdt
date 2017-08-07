<template>
      <router-link :to="'/detail/'+data.pid+'/?uid='+uid">
  <div class="item_box">
    <div class="top">
      <div class="logo">
        <img width="100%" :src="data.logo" alt="">
      </div>
      <div class="right">
        <div class="r_top">
          <h5 class="namecn">{{data.title}}</h5>
          <span class="grade">{{data.grade}}</span>
          <span v-if="data.isfutou" class="re_invest">复投</span>
        </div>
        <p class="describe">{{data.desc}}</p>
      </div>
    </div>
    <div class="bottom">
      <div class="rate">
        <div class="red num">{{data.rate}}
          <span style="font-size: 1.2rem">%</span>
        </div>
        <div class="gray">活动最高年化</div>
      </div>
      <div class="money">
        <div class="red num">{{data.money}}
          <span style="font-size: 1.2rem">元</span>
        </div>
        <div class="gray">返现金额</div>
      </div>

        <img  class="to_detail" width="100%" :src="url" alt="">

    </div>
  </div>
        </router-link>
</template>
<script>
  export default {
    props: ['data', 'uid'],
    computed: {
      url () {
        switch (this.data.fanxiantype) {
          case '0':
            return '/static/img/qfx.png'
          case '1':
            return '/static/img/ljf.png'
          case '2':
            return '/static/img/cjf.png'
          case '3':
            return '/static/img/yqg.png'
        }
      }
    }
  }
</script>
<style scoped>
  .item_box {
    border-top: rgba(225, 225, 225, 1) 0.5px solid;
    padding: 0 1.5rem;
    padding-bottom: 1.8rem;
  }
  
  .top {
    padding: 2.2rem -0px;
  }
  
  .logo {
    width: 3.7rem;
    height: 3.7rem;
    border-radius: 0.4rem;
    float: left;
  }
  
  .right {
    margin-left: 4.4rem;
  }
  
  .namecn {
    font-size: 1.8rem;
    font-weight: bold;
    text-align: left;
    color: #374259;
    display: inline-block;
  }
  
  .grade {
    display: inline-block;
    height: 1.8rem;
    line-height: 1.8rem;
    border-radius: 0.2rem;
    background-color: rgba(242, 115, 40, 0.2);
    transform: skewX(-10deg);
    font-size: 1.3rem;
    text-align: center;
    color: #e76212;
    padding: 0 0.5rem;
  }
  
  .re_invest {
    display: inline-block;
    font-size: 1.3rem;
    text-align: center;
    color: #1273e9;
    padding: 0 0.5rem;
    transform: skewX(-10deg);
    border-radius: 0.2rem;
    height: 1.8rem;
    line-height: 1.8rem;
    background-color: rgba(18, 115, 233, 0.17);
  }
  
  .describe {
    font-size: 1.1rem;
    color: #9da3af;
  }
  
  .bottom {
    position: relative;
    height: 3.4rem;
  }
  
  .red {
    font-size: 2.3rem;
    height: 2.3rem;
    line-height: 2.3rem;
    font-weight: bold;
    color: #d85345;
  }
  
  .gray {
    font-size: 1.1rem;
    height: 1.1rem;
    line-height: 1.1rem;
    text-align: left;
    color: #9da3af;
  }
  
  .rate {
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .money {
    position: absolute;
    top: 0;
    left: 11.2rem;
  }
  
  .to_detail {
    position: absolute;
    right: 0.3rem;
    top: 0;
    width: 9rem;
    height: 3.4rem;
    background: none;
  }
</style>
