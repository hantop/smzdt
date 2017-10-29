<template>
  <a class="post" :class="type==0?'type0':''" href="/yutang.html">
    <div class="content">
      <p>【微活动】#人人爱家# #人人爱家返现活动# 恒丰银行存管，中欧国际集团1亿美元B轮融资，浙江投融协会会员。首投年化可达21%~36%。评级B级，返现金已预存，活动入口详见</p>
      <img v-if="true" src="http://image.zhangxinxu.com/image/study/s/s256/mm1.jpg" alt="">
    </div>
    <div class="author_info" :class="type==1?'type1':''">
      <img src="" alt="">
      <h5>自然研究院</h5>
      <span>15小时前发布</span>
    </div>
    <div v-if="type==0" class="btm">
      <div><img class="icon" src="../assets/svg/share.svg" alt=""><span>45</span></div>
      <div><img class="icon" src="../assets/svg/share.svg" alt=""><span>45</span></div>
      <div><img class="icon" src="../assets/svg/share.svg" alt=""><span>45</span></div>
    </div>
  </a>
</template>
<script>
  export default {
    props: ['type', 'uid', 'ad'],
    computed: {

    }
  }
</script>
<style scoped>
  .post {
    padding: 1.7rem;
    padding-bottom: 0;
    display: block;
  }
  .type0{
    border-bottom: 7px solid #efeff0;
    padding-bottom: 1.7rem;
  }
  .type1{
    border-bottom: .5px solid #d5d5d5;
    padding-bottom: 1.5rem;
  }
  .content {
    display: flex;
    margin-bottom: 2rem;
  }
  .content p {
    flex: 1;
    font-size: 1.55rem;
    text-align: justify;
    color: #374259;
  }
  .content img {
    flex: none;
    width: 9rem;
    height: 9rem;
    border-radius: 0.5px;
    border: solid 0.5px rgba(0, 0, 0, 0.08);
    margin-left: 1.5rem;
    object-fit: cover;
  }
  .author_info {
    display: flex;
    align-items: center;
  }
  .author_info img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #d8d8d8;
  }
  .author_info h5 {
    font-size: 1.2rem;
    color: #777f91;
    margin-left: 0.7rem;
  }
  .author_info span {
    font-size: 1rem;
    color: #a8b0c2;
    margin-left: 0.7rem;
    position: relative;
    top: 0.2rem;
  }
  .btm {
    display: flex;
    margin-top: 2rem;
  }
  .btm div {
    display: flex;
    width: 7rem;
  }
  .btm span {
    font-size: 1.3rem;
    font-weight: 500;
    color: #eb4b6b;
  }
  .icon {
    height: 1.6rem;
    margin-right: 0.7rem;
  }
</style>
