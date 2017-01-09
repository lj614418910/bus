<template>
  <div id="app">
    <div class="wrapper">
      <v-header :site="site"></v-header>
      <div class="tab">
        <div class="tab-item">
          <router-link to="/route">线路</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/where">去哪儿</router-link>
        </div>
      </div>
    </div>
    <router-view :busLines="busLines"></router-viem>
  </div>
</template>

<script type="text/ecmascript-6">
import header from 'components/header/header.vue';

const ERR_OK = 0;

export default {
  name: 'app',
  components: {
    'v-header': header
  },
  data() {
    return {
      busLines: [
      ],
      site: "哈尔滨"
    }
  },
  created() {
    // this.$http.get('/api/busLines').then((response) => {
    //   response = response.body;
    //   if (response.errno === ERR_OK) {
    //     this.busLines = response.data.busLines;
    //     this.site = response.data.cityName;
    //   };
    // });
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrapper
    width: 100%
    background: #3385ff
    overflow: hidden
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      .tab-item
        flex: 1
        text-align: center
        a
          position: relative
          display:block
          font-size: 14px
          color: #ededed
          &.active
            color: #fff
            font-weight: 500
            &:after
              position:absolute
              display: inline-block
              font-size:0
              left: 0
              content: " "
              width:100%
              border-bottom: 2px solid #fff
              bottom: 0




</style>
