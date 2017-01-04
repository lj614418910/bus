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
        {
          "name" : "101",
          "direction" : true,
          "StationNumber" : 12,
          "NumCar" : 5,
          "Station" : [
            {"name":"甲站1","km":0},
            {"name":"甲站2","km":0.5},
            {"name":"甲站3","km":1.25},
            {"name":"甲站4","km":1.66},
            {"name":"甲站5","km":2.01},
            {"name":"甲站6","km":2.5},
            {"name":"甲站7","km":3.22},
            {"name":"甲站8","km":4},
            {"name":"甲站9","km":4.44},
            {"name":"甲站10","km":4.89},
            {"name":"甲站11","km":5.24},
            {"name":"甲站12","km":5.89}
          ]
        },
        {
          "name" : "102",
          "direction" : true,
          "StationNumber" : 12,
          "NumCar" : 5,
          "Station" : [
            {"name":"乙站1","km":0},
            {"name":"乙站2","km":0.4},
            {"name":"乙站3","km":1.05},
            {"name":"乙站4","km":1.6},
            {"name":"甲站5","km":1.99},
            {"name":"乙站5","km":2.4},
            {"name":"乙站6","km":2.77},
            {"name":"乙站7","km":3.00},
            {"name":"乙站8","km":4.54},
            {"name":"乙站9","km":4.88},
            {"name":"乙站10","km":5.22},
            {"name":"乙站11","km":5.6}
          ]
        },
        {
          "name" : "103",
          "direction" : true,
          "StationNumber" : 12,
          "NumCar" : 5,
          "Station" : [
            {"name":"丙站1","km":0},
            {"name":"甲站10","km":0.5},
            {"name":"丙站2","km":0.9},
            {"name":"丙站3","km":1.25},
            {"name":"丙站4","km":1.56},
            {"name":"丙站5","km":2.01},
            {"name":"丙站6","km":2.44},
            {"name":"丙站7","km":3.22},
            {"name":"丙站8","km":4},
            {"name":"丙站9","km":4.49},
            {"name":"丙站10","km":4.99},
            {"name":"乙站11","km":5.24}
          ]
        },
        {
          "name" : "104",
          "direction" : true,
          "StationNumber" : 13,
          "NumCar" : 5,
          "Station" : [
            {"name":"丁站1","km":0},
            {"name":"甲站10","km":0.44},
            {"name":"丁站2","km":0.88},
            {"name":"丁站3","km":1.33},
            {"name":"丁站4","km":1.77},
            {"name":"丁站5","km":2.30},
            {"name":"丁站6","km":2.88},
            {"name":"丁站7","km":3.22},
            {"name":"丁站8","km":3.66},
            {"name":"乙站9","km":4.22},
            {"name":"丁站9","km":4.54},
            {"name":"丁站10","km":4.89},
            {"name":"丁站11","km":5.34}
          ]
        },
        {
          "name" : "105",
          "direction" : true,
          "StationNumber" : 13,
          "NumCar" : 5,
          "Station" : [
            {"name":"戊站1","km":0},
            {"name":"戊站2","km":0.5},
            {"name":"戊站3","km":1.25},
            {"name":"戊站4","km":1.66},
            {"name":"戊站5","km":2.01},
            {"name":"乙站6","km":2.5},
            {"name":"戊站6","km":2.88},
            {"name":"丁站6","km":3.22},
            {"name":"戊站7","km":3.79},
            {"name":"戊站8","km":4},
            {"name":"戊站9","km":4.44},
            {"name":"戊站10","km":4.89},
            {"name":"丙站6","km":5.33}
          ]
        }
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
