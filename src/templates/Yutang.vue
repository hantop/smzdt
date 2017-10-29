<template>
  <div>
      <post type="1"></post>
  </div>
</template>

<script>
  import Post from '@/components/Post'
  import { Indicator } from 'mint-ui'
  export default {
    data () {
      return {
        data: {},
        uid: encodeURIComponent(this.$route.query.uid),
        type: this.$route.query.type
      }
    },
    components: {
      Post
    },
    methods: {
      loadTop () {
      }
    },

    created: function () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      this.axios(`../../static/json/index.json?${Date.now()}`)
        .then((res) => {
          console.log(res)
          this.data = res.data
          Indicator.close()
        })
    }
  }

</script>
<style scoped>

</style>
