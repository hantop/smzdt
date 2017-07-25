<template>
  <div class="recommend-list recommend" data-reactid="65">
    <div class="title relative" style="text-align:center" data-reactid="66">
      <span style="font-size: 1em;color: #374259; margin-left:0" data-reactid="68">{{data.type}}</span>
    </div>
    <div class="line" data-reactid="69"></div>
  
    <platform-entry v-for="(obj,i) in data.arr" :key="i" :data="obj"></platform-entry>
  
  </div>
</template>
<script>
import PlatformEntry from './PlatformEntry'
export default {
  props: ['data'],
  // data () {
  //   return {
  //     data: {}
  //   }
  // },

  components: {
    PlatformEntry
  }
  // computed: {
  //   objs: data.objs,
  //   type: data.type
  // }

}
</script>
