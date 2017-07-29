<template>
  <a class="xjoin join_s">
    <div class="xshadow xshadow2 xjoin join_s">
      <div class="xitem_box xitem_box2 xjoin join_s">
        <h5 class="xh5 xjoin join_s">{{data.title}}</h5>
        <div class="xmoney xmoney2 xjoin join_s">返现
          <span class=" xjoin join_s">data.money</span>元</div>
        <p v-if="text" style="color: #e64d3f;position: relative;top: -2px;">{{text}}</p>
        <p class="xjoin join_s">投资收益:{{money1}}元，合计收益{{money2}}元</p>
        <div class="xbottom xjoin join_s">
          <b style="position: relative">{{percent1}}
            <span class="xfz9 xjoin join_s">官网收益率</span>
          </b>
          <span class="xjoin join_s xfz11">%</span>
          <img class=" xjoin join_s xarrow" src="./img/arrow.png" alt="">
          <b style="position: relative">{{percent2}}
            <span class="xfz9 xjoin join_s">活动收益率</b>
          </span>
          <span class="xfz11 xjoin join_s">%</span>
        </div>
        <div class="xjoin join_s xbottom_right">
          <div class="xjoin join_s">去复投</div>
          <p class="xjoin join_s"> (已有77人选择)</p>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
  export default {
    props: ['data']
  }
</script>

