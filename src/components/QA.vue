<template>
  <div class="extra setnone" id="extra" style="display: block">
    <h6 class="title relative" id="hidden-title">
      <span>常见问题</span>
    </h6>
    <div style="padding-top:20px">
      <template v-for="(item,i) in arr">
        <div :key="'q'+i" :class="'question '+item.color">
          <p>用券还可以得奖励吗？</p>
        </div>
        <div :key="'a'+i" :class="'answer '+item.color">
          <p>注册后平台给的优惠券，是可以使用的。</p>
        </div>
      </template>
    </div>
  </div>
</template>
<style scoped>
.red {
  color: red;
}
</style>

<script>
export default {
  props: ['arr']
}
</script>
