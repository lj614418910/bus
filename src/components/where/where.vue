<template lang="html">
  <div class="where">
    <div class="input-box">
      <div class="input-wrapper">
        <div class="border-1px">
          <i class="icon-radio-checked mil1"></i>
          <input class="where-input" id="origin" type="text" placeholder="起点">
        </div>
        <div class="border-1px">
          <i class="icon-radio-checked mil2"></i>
          <input class="where-input" id="destination" type="text" placeholder="终点">
        </div>
      </div>
      <div class="arrow">
        <i class="icon-long-arrow-down"></i><i class="icon-long-arrow-up"></i>
      </div>
    </div>
    <ul class="where-lists">
      <li class="where-list border-1px" v-for = "(oli, index) in list">
        <div class="diamond" :class="{'reverse':list[index].changeLine === false}"></div>
        <div class="where-list-wrapper" @click="selectLine(oli)">
          <div class="origin-name">
            从:{{oli.origin}}
            <span>({{oli.originLine}}路)</span>
          </div>
          <div class="direction-name">
            到:{{oli.direction}}
            <span>({{oli.directionLine}}路)</span>
          </div>
        </div>
        <div class="changeLine" v-if="list[index].changeLine">
          <i class="icon-sync"></i><span>{{oli.transferStop}}</span>
        </div>
        <div class="delete" @click="listDelete(index)">
          <i class="icon-cross"></i>
        </div>
      </li>
    </ul>
    <div class="line-details">
      <lineDetails :list="selectedLine" ref="details" ></lineDetails >
    </div>
  </div>
</template>

<script>
import lineDetails from './lineDetails.vue';
export default {
  components: {
    lineDetails
  },
  data() {
    return {
      list: [
        {
          "origin": "丁2",
          "originLine" : "104",
          "direction": "戊9",
          "directionLine" : "105",
          "changeLine" : true,
          "transferStop": "丁6",
          "line" : [
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
              ],
              "bus":[
                {"name": "丁车1", "afterStation":"甲站10", "direction":true},
                {"name": "丁车2", "afterStation":"丁站3", "direction": true},
                {"name": "丁车3", "afterStation":"丁站5", "direction": true},
                {"name": "丁车4", "afterStation":"丁站8", "direction": false},
                {"name": "丁车5", "afterStation":"丁站9", "direction": false}
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
              ],
              "bus":[
                {"name": "戊车1", "afterStation":"戊站3", "direction":false},
                {"name": "戊车2", "afterStation":"戊站4", "direction": true},
                {"name": "戊车3", "afterStation":"戊站6", "direction": true},
                {"name": "戊车4", "afterStation":"戊站9", "direction": false},
                {"name": "戊车5", "afterStation":"戊站10", "direction": false}
              ]
            },
          ]
        },
        {
          "origin": "乙2",
          "originLine" : "102",
          "direction": "乙9",
          "directionLine": "102",
          "changeLine" : false,
          "transferStop": undefined,
          "line": [
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
              ],
              "bus": [
                {"name": "乙车1", "afterStation":"乙站3", "direction":false},
                {"name": "乙车2", "afterStation":"乙站4", "direction": true},
                {"name": "乙车3", "afterStation":"乙站7", "direction": false},
                {"name": "乙车4", "afterStation":"乙站8", "direction": true},
                {"name": "乙车5", "afterStation":"乙站10", "direction": true}
              ]
            }
          ]
        }
      ],
      selectedLine: {}
    }
  },
  methods : {
    listDelete(index) {
      this.list.splice(index,1)
    },
    selectLine(olist){
      this.selectedLine = olist;
      this.$refs.details.show()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .where
    width: 100%
    background: #fff
    .input-box
      position:relative
      display: flex
      align-items: center;
      height: 88px
      width:80%
      margin: 0 auto
      .input-wrapper
        box-sizing: border-box
        flex: 1
        .border-1px
          border-1px(rgba(7,17,27,0.1))
          .icon-radio-checked
            font-size: 14px
            vertical-align: middle
            &.mil1
              color: #00aa00
            &.mil2
              color: #ff0088
          .where-input
            outline: none
            height: 32px
            font-size: 16px
            padding: 5px 10px
      .arrow
        font-size:24px
        padding: 30px 4px
        .icon-long-arrow-down
          padding: 0px 1px
          color: #3385ff
        .icon-long-arrow-up
          padding: 0px 1px
          color: #999
    .where-lists
      width: 100%
      .where-list
        display: flex
        box-sizing: border-box
        width: 96%
        margin: 0 auto
        border-1px(rgba(7,17,27,0.1))
        padding:10px 0px 10px 10px
        .diamond
          display: inline-block
          vertical-align: middle
          height: 55px
          width: 7px
          background : #00aa00
          &.reverse
            background : #3385ff
        .where-list-wrapper
          flex: 1
          padding:3px
          height: 55px
          box-sizing: border-box
          .origin-name,.direction-name
            padding: 5px
            font-size:14px
            color: #555666
            span
              color: #bbb
        .changeLine
          .icon-sync
            color:#3385ff
            padding:2px
            line-height: 55px
            vertical-align: middle
          span
            vertical-align: middle
            font-size:14px
            padding:0px 10px 0px 4px
            color: #3385ff
        .delete
          flex:0 0 28px
          text-align:center
          .icon-cross
            font-size:14px
            line-height: 59px
            color: #444



</style>
