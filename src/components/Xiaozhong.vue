<template>
  <div>
    <h4 class="list_title">
      <img src="../assets/new_img/list_title.png" alt="">
      <p>平台高收益和风险并存</p>
      <p>请根据自身风险承受能力谨慎考察后投资</p>
    </h4>
    <platform-entry v-for="(obj,i) in data" :key="i" :data="obj"></platform-entry>
  </div>
</template>
<script>
  import { Indicator } from 'mint-ui'
  import PlatformEntry from './PlatformEntry'
  export default {
    data () {
      return {
        data: []
      }
    },
    components: {
      PlatformEntry
    },
    created () {
      const _this = this
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })

      fetch('../../static/json/xiaozhong.json').then(res => {
        return res.json()
      })
        .then(res => {
          _this.data = res
          Indicator.close()
        })
    }
  }
</script>
<style scoped>
  .list_title {
    border-top: 7px solid #ebebeb;
    text-align: center;
    padding: 0.9rem 0px;
  }
  
  .list_title p {
    font-size: 1rem;
    color: #9da3af;
  }
  
  .list_title img {
    height: 2rem;
    padding: 10px;
  }
</style>
