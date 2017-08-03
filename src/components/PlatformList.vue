<template>
  <div>
    <h4 class="list_title">
      <img src="../assets/new_img/list_title.png" alt="">
    </h4>
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
<style scoped>
  .list_title {
    border-top: 7px solid #ebebeb;
    text-align: center;
    padding: 0.9rem 0px;
  }
  
  .list_title img {
    height: 2rem;
  }
</style>
