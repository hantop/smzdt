<template>
  <div>
    <header>
      <router-link style="display: block;" :to="'/riskscore/'+this.$route.params.pid">
        <div class="xbox">
          <img :src="platform_logo" class="xlogo" alt="">
          <div class="xright">
            <div class="xtitle">
              <span class="xspan1">{{platform_name}}</span>
              <span class="xspan2">{{platform_type}}</span>
            </div>
            <p class="xtext">{{platform_text}}</p>
            <p class="xtext2">首投综合年化收益率可达{{platform_percent}}%</p>
            <span class="xfengkong">
              <span class="xfengkong_span1">风控指标：{{riskscore}}级</span>
              <span class="xfengkong_span2">平台监控：{{monitor?'正常':'异常'}}</span>
            </span>
          </div>
        </div>
      </router-link>
      <div class="xcoupon">
        <coupon></coupon>
        <take-care></take-care>
      </div>
    </header>
    <section>
      <yutang></yutang>
      <qa></qa>
  
    </section>
  
    <div class="fixed_button relative" id="fixed_button">
      <hr class="divider divider-horizontal divider-top">
      <a href="http://wpa.qq.com/msgrd?v=3&uin=3344813056&site=qq&menu=yes" class="kefu">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAMAAABEH1h2AAAAilBMVEUAAABvkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf9vkf/zcJnUAAAALXRSTlMA+u04AwWHIpcT0uO1zFlMHMCs3XhAMCgY9vO7sQrpmnEO2saSYqSdfVaQZ2Vehk0JAAAC0ElEQVRIx+1W2baiMBBMwiIggoi4oI7ifpf+/9+bIjLJBcOiZx5vvZBDUt2d6u4k7Bf/HaPLeZPmRHm6OV9Gr3GXbko1pO5yMDnbkAGbbJjnBzkP5/HSdxx/Gc/D/GGgPwL7zrGQb2OH/YATb+Xvu93NXiXlqtvIIOWtNJCsOgMfY8lJxmhb81kgOBfBbG7ZcvKEyXHHBhZ/sMAt105dGNIYu9PSoouhWLSmGuw8xsD3ODXAPR8TMTT801IE/hG2LQw+BBkgPjBlYeroG+kh0Rpsx6MWeA74a6LQxD5gASLfhdSKcIf48T08s6c5VIPvLXVgC/8uBJo+0WdEASY96oQHBwHR7ClnmMugGvUgQkvg08zeVZr0RR9d+DLQa6NYubToUS88GSlfNWVPIB/vp3PIljTFnxBdpKj9QHouRJNa7LBaMHs8hD62WYEodelJwU+oKBoEVOaprDAFO5Rbnw+jz+Vet7bqtMljS7Nh9NkjQ5OR7lMZTDCMHkjt/nWuDd8AxmIYXcjMA5My/ogkUO98GJ0jU6qCWdWg7BU6qxqYqZCnw4NX3sfKEFmvSLeo4tDeDypxm5biS0OVuG/tvfp5VWVzZ5Z7aujAk/uC3VXZ7PXeo8q2KtqAAUV2uCVpeU0ck/3B2jEgaG4z0nnntmoZixlhqZZh6yrvuuooUg2bmOmJatgFVVWnah629HHxbWJ/6+NiS7rmATsKEFShDqu1ZQh9rQ4rlkOgyGYahex+dVQK64kt9FGZwUHBTIio8v/FavhakxZ7Q7RnZqizNrF+uK5Ue9BiCGC+ZWuX1NHNVo6zytxj7ZIq0nbn/Vcku0kBWtB3QbMvDD5YFyLz8yBiQMxle7Sj43ECNjJw2vXQzU8j4MKhKIbdMD/M2K7s0xTst5ClYE9WL/OcsxDnxzv5umMv47Mm/ssQlfh7n71PV+/kt4L/fIuqpHPYL+r4C8IzA842MxsYAAAAAElFTkSuQmCC">
        <span>客服</span>
      </a>
      <a>
        <span class="btn-join xjoin join_f" data-status="1">参与活动</span>
      </a>
    </div>
  
    </b>
  </div>
</template>
<style scoped src="../assets/css/base.css"></style>
<style scoped src="../assets/css/detail.css"></style>
<script>
export default {
  created () {
    fetch('/forward.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json, text/plain, */*'
      },
      body: 'url=/CaiyuPartner/api/v1/invest/platform/valid&data[pid]=' + this.$route.params.pid

    }).then(function (res) {
      return res.json()
    })
      .then(function (data) {
        console.log(data)
        console.log(data.code)
      })
  }
}
</script>

