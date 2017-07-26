<template>
  <div class="bg-white" data-reactid="103">
    <div class="recommend-list" data-reactid="104">
      <div class="recommend-list-item relative" data-reactid="233">
        <div class="touch-effect setnone" data-reactid="234"></div>
        <div class="title-container relative" data-reactid="236">
          <div data-reactid="237">
            <img height="30" :src="data.imgurl" /> {{data.name}}
          </div>
          <div class="relative tag-container" data-reactid="239">
            <span data-reactid="240">{{data.type}}</span>
          </div>
          <div class="score-container" data-reactid="241">
            <span data-reactid="242">{{data.score}}级</span>
          </div>
        </div>
        <h5 data-reactid="244">{{data.summary}}</h5>
        <div class="content-container relative" data-reactid="245">
          <div class="content" data-reactid="246">
            <h1 data-reactid="247">{{data.percent}}</h1>
            <h6 data-reactid="248">预期年化收益率</h6>
          </div>
          <div class="content relative" data-reactid="249">
            <h1 class="bewrite" data-reactid="250">
              <font data-reactid="251">最</font>
              <font data-reactid="252">高</font>
              <font style="font-size:1.75em;" data-reactid="253">{{data.top}}</font>
              <font data-reactid="256">元</font>
            </h1>
            <h6 data-reactid="257">首次投资返现</h6>
            <hr class="divider divider-vertical divider-left" data-reactid="258" />
          </div>
          <div class="content relative" data-reactid="259">
            <h2 data-reactid="260">{{data.min_limit}}天起投</h2>
          </div>
        </div>
        <div class="line" data-reactid="261"></div>
        <div class="button-container" data-reactid="262">
          <router-link :to="'/detail/'+data.pid" class="toDetail btn btn-blue button">去返现</router-link>
        </div>
        <div class="item-seperator" data-reactid="264"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // data () {
  //   return {
  //     data: data
  //   }
  // },
  props: ['data']

}
</script>
