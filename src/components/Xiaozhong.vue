<template>
  <div>
    <platform-list :data="data"></platform-list>
  </div>
</template>
<script>
  import { Indicator } from 'mint-ui'
  import PlatformList from './PlatformList'
  export default {
    data () {
      return {
        data: {}
      }
    },
    components: {
      PlatformList
    },
    created () {
      const _this = this
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })

      fetch('../../static/xiaozhong.json').then(res => {
        return res.json()
      })
        .then(res => {
          _this.data.data = res
          console.log(_this.data)

          Indicator.close()
        })
    }
  }
</script>
