<template lang="html">
  <div class="route">
    <div class="inquirei-box">
      <i class="icon-milestone"></i>
      <input class="route-input" type="text" placeholder="请输入线路名称(如101)">
      <div class="botton"><i class="icon-search"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    busLines: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .route
    width: 100%
    background: #fff
    .inquirei-box
      height: 38px
      text-align: center
      vertical-align:middle
      .icon-milestone
        font-size: 20px
        vertical-align: middle
        color: #3385ff
      .route-input
        box-sizing: border-box
        margin-top: 3px
        outline: none
        height: 32px
        width:220px
        font-size: 16px
        padding: 5px 10px
      .botton
        display: inline-block
        height:100%
        .icon-search
          padding: 10px
          font-size: 18px
          vertical-align: middle
          color: #3385ff


</style>
