<template>
  <router-link :to="'/detail/'+data.pid+'/?uid='+uid">
    <div class="item_box">
      <img v-if="ad" class="ad" src="data:image/png;base64,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" alt="">
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
          <div class="gray">奖励金额</div>
        </div>

        <img class="to_detail" width="100%" :src="url" alt="">

      </div>
    </div>
  </router-link>
</template>
<script>
  export default {
    props: ['data', 'uid', 'ad'],
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
    position: relative;
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
    position: relative;
    top: -3px;
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
    position: relative;
    top: -3px;
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
  .ad {
    height: 2.9vw;
    position: absolute;
    right: 5.5vw;
    top: 7.8vw;
  }
</style>
