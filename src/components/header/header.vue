<template>
  <div class="header">
    <div class="title">
      {{title}}
    </div>
    <div class="site">
      {{this.site}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "蓝天公交"
    }
  },
  props: {
    site: String
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    position:relative
    color: #fff
    font-size: 0
    text-align: center
    .title
      display: inline-block
      margin: 12px 5px
      font-size: 19px
      font-weight: 500
      text-shadow: 3px 3px 6px rgba(99,99,99,0.6)
    .site
      display: inline-block
      font-size: 14px


</style>
