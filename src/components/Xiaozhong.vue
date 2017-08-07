<template>
  <div>
    <h4 class="list_title">
      <p>平台高收益和风险并存</p>
      <p>请根据自身风险承受能力谨慎考察后投资</p>
    </h4>
    <platform-entry v-for="(obj,i) in data" :key="i" :uid="uid" :data="obj"></platform-entry>
  </div>
</template>
<script>
  import { Indicator } from 'mint-ui'
  import PlatformEntry from './PlatformEntry'
  import $ from 'jquery'
  export default {
    data () {
      return {
        data: [],
        uid: this.$route.query.uid
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
      document.setTitle('小众高反平台')
      $.ajax({
        type: 'GET',
        url: '../../static/json/xiaozhong.json',
        dataType: 'json',
        success: function (res) {
          _this.data = res
          Indicator.close()
        }
      })
    }
  }
</script>
<style scoped>
  .list_title {
    /*border-top: 7px solid #ebebeb;*/
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
