<template>
  <div>
    <a :href="'http://h5.caiyu.in/dashboard/invite.html?uid='+uid">
      <img src="../assets/new_img/invite_icon_2.png" class="invite_btn">
    </a>
    <loadmore topDistance="40" :top-method="loadTop">
      <header>
        <div class="smzdtgg">
          <div class="gg" data-url="http://h5.caiyu.in/smzdt/invite/tuhao.html">
            <a href="http://h5.caiyu.in/smzdt/invite/tuhao.html?uid=fae67dbbfae348f2aeef882b2d6ba521">
              <img src="http://sns.91caiyu.com/data/upload/2017/1025/17/59f0548a10c8574bcd86.png">
            </a>
          </div>
          <div class="gg" data-url="http://h5.9f.cn/download/cygjhd1">
            <a href="http://h5.9f.cn/download/cygjhd1?uid=fae67dbbfae348f2aeef882b2d6ba521">
              <img src="http://sns.91caiyu.com/data/upload/2017/1025/17/59f054c8b4bec783baec.png">
            </a>
          </div>
        </div>
      </header>
      <!-- <platform-entry v-for="(obj,i) in data.platforms.today.data" :key="i" :uid="uid" :data="obj" :ad="true"></platform-entry> -->
      <post type="0"></post>
    </loadmore>
  </div>
</template>

<script>
  import PlatformEntry from '@/components/PlatformEntry'
  import Post from '@/components/Post'
  import { Indicator, Loadmore } from 'mint-ui'
  export default {
    data () {
      return {
        data: {},
        uid: encodeURIComponent(this.$route.query.uid),
        type: this.$route.query.type
      }
    },
    components: {
      PlatformEntry,
      Loadmore,
      Post
    },
    methods: {
      loadTop () {
        // location.reload()
        console.log(this)
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
  .invite_btn {
    position: fixed;
    width: 80px;
    right: -3.5px;
    top: 55%;
    padding: 2px;
    cursor: pointer;
    z-index: 3;
  }

  .nav {
    text-align: center;
    padding: 0.8rem;
  }

  .entry {
    overflow: hidden;
    margin-bottom: 2.4rem;
  }

  .entry img {
    height: 7rem;
    vertical-align: middle;
  }

  .total_money {
    font-size: 1.65rem;
    font-weight: 500;
    color: #374259;
    margin-bottom: 0.3rem;
  }

  .org {
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    color: #ea6e24;
  }

  .speed {
    font-size: 1.3rem;
    color: #0076ff;
    display: inline-block;
    margin-bottom: 1.4rem;
    position: relative;
  }

  .speed::after {
    content: "";
    background: url("../assets/new_img/arrow.png") no-repeat;
    position: absolute;
    right: -1.5rem;
    top: 0.31rem;
    height: 1.3rem;
    width: 1.3rem;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .smzdtgg {
    margin: 0.75rem;
    display: flex;
    justify-content: space-between;
  }
  .gg {
    flex: none;
    width: 17.62rem;
    border-radius: 1.5px;
  }
</style>
