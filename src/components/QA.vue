<template>
  <div>
    <div :style="style" class="question">
      <p>{{question}}</p>
    </div>
    <div :style="style" class="answer">
      <p>{{answer}}</p>
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
    props: ['style', 'question', 'answer']
  }
</script>
