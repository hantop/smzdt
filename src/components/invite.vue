<template>
  <div>
    <img src="http://h5.caiyu.in/dashboard/img/invite_bg.jpg" alt="">
    <img class="btn" src="http://h5.caiyu.in/dashboard/img/invite_btn.png" alt="">
  
    <router-link class="link" to="invite-rule">详细规则</router-link>
    <table cellspacing="0" cellpadding="0">
      <tr>
        <th>好友账号</th>
        <th>投资平台</th>
        <th>投资日期</th>
        <th>奖励</th>
      </tr>
      <tr style="display: none" id="none">
        <td colspan="4">暂无奖励</td>
      </tr>
    </table>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  img {
    display: block;
    width: 100%;
  }
  
  table {
    width: 96%;
    display: table;
    margin: 50px auto 20px;
  }
  
  table tbody {
    width: 100%;
    display: table;
  }
  
  
  tr td,
  tr th {
    font-size: 13px;
    text-align: center;
    color: #374259;
    padding: 16px 0px;
    border-bottom: 1px solid rgb(230, 230, 230);
    opacity: 0.7
  }
  
  tr th {
    padding: 10px 0;
  }
  
  tr th:nth-child(4),
  tr td:nth-child(4) {
    width: 50px;
  }
  
  .btn {
    width: 90%;
    margin: 20px auto;
    cursor: pointer
  }
  
  #btn {
    width: 90%;
    margin: 20px auto;
    cursor: pointer
  }
  
  a.link {
    font-size: 14;
    text-decoration: underline;
    color: rgb(150, 150, 150);
  }
</style>


