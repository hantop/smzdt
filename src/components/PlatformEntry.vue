<template>
  <div class="item_box">
    <div class="top">
      <div class="logo">
        <img width="100%" src="../assets/img/logo_jfqb.png" alt="">
      </div>
      <div class="right">
        <div class="r_top">
          <h5 class="namecn">PPmoney</h5>
          <span class="grade">AAAA</span>
          <span class="re_invest">复投</span>
        </div>
        <p class="describe">浙商银行资金存管，注册资本5000w元</p>
      </div>
    </div>
    <div class="bottom">
      <div class="rate">
        <div class="red num">7.50<span style="font-size: 1.2rem">%</span>
        </div>
        <div class="gray">活动最高年化</div>
      </div>
      <div class="money">
        <div class="red num">100~800<span style="font-size: 1.2rem">元</span>
        </div>
        <div class="gray">返现金额</div>
      </div>
      <router-link :to="'/detail/'+data.pid" class="to_detail">
        <img width="100%" src="../assets/new_img/ljf.png" alt="">
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['data']
  }
</script>
<style scoped>
  .item_box {
    border-top: rgba(225, 225, 225, .4) .5px solid;
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
