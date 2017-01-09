<template lang="html">
  <div class="route">
    <div class="inquirei-box border-1px">
      <i class="icon-milestone"></i>
      <input class="route-input" type="text" placeholder="请输入线路名称(如101)">
      <div class="botton"><i class="icon-search"></i></div>
    </div>
    <ul class="lists">
        <li class="list border-1px" v-for = "(oli, index) in list" @click="showDetail(index)">
          <div class="list-wrapper">
            <div class="list-title">
              <div class="diamond" :class="{'reverse':list[index].direction === false}"></div>
              <div class="bus-lines">
                {{list[index].name}}路
              </div>
            </div>
            <div class="origin">
              始: {{ list[index].direction ? list[index].Station[0].name : list[index].Station[list[index].StationNumber - 1].name }}
            </div>
            <div class="destination">
              终: {{ list[index].direction ? list[index].Station[list[index].StationNumber - 1].name : list[index].Station[0].name}}
            </div>
          </div>

          <div class="delete" @click="listDelete(index)">
            <i class="icon-cross"></i>
          </div>
        </li>
    </ul>
    <transition name="fade">
      <div v-show="detailShow" class="detail">
        <div class="detail-wrapper clearfix">
          <ul>
            <li class="show-li" v-for = "(showLi, i) in showList.Station">
              <div class="station">
                <div class="bus-1" v-if = "positiveBus(i)">
                  <i class='icon-arrow-long-down'></i><i class="icon-bus" v-for = "(bus1, $i) in showList.Station[i].positive.length"></i>
                </div>
                <div class="stationName">
                  {{showLi.name}}
                </div>
                <div class="bus-2" v-if = "reserveBus(i)">
                  <i class="icon-bus" v-for = "(bus2, $i) in showList.Station[i].reserve.length"></i><i class='icon-arrow-long-up'></i>
                </div>
              </div>
              <div class="line-wrapper" v-if = "i != (showList.StationNumber-1)">
                <div class="line" >
                  |
                </div>
                <div class="km" >
                  {{(showList.Station[i+1].km - showLi.km).toFixed(2)}}km
                </div>
                <div class="line" >
                  |
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="detail-close" @click="hideDetail">
          <i class='icon-cross'></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    busLines: {
      type: Array
    }
  },
  data() {
    return {
      list : [{
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
        ],
        bus:[
          {"name": "甲车1", "afterStation":"甲站4", "direction":false},
          {"name": "甲车2", "afterStation":"甲站5", "direction": true},
          {"name": "甲车3", "afterStation":"甲站7", "direction": false},
          {"name": "甲车4", "afterStation":"甲站9", "direction": true},
          {"name": "甲车5", "afterStation":"甲站12", "direction": false}
        ]
      },
      {
        "name" : "102",
        "direction" : false,
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
        bus:[
          {"name": "乙车1", "afterStation":"乙站3", "direction":false},
          {"name": "乙车2", "afterStation":"乙站4", "direction": true},
          {"name": "乙车3", "afterStation":"乙站7", "direction": false},
          {"name": "乙车4", "afterStation":"乙站8", "direction": true},
          {"name": "乙车5", "afterStation":"乙站10", "direction": true}
        ]
      }],
      detailShow: false,
      showList : {

      }
    }
  },
  methods : {
    listDelete(index) {
        this.list.splice(index,1)
    },
    showDetail(index) {
      this.showList = this.list[index];
      this.showList.bus = this.list[index].bus;
      this.showList.reserve = this.showList.bus.filter((item) => item.direction === false);
      this.showList.positive = this.showList.bus.filter((item) => item.direction === true);
      this.detailShow = true;
    },
    hideDetail() {
      this.showList = {};
      this.detailShow = false;
    },
    positiveBus(i){
      this.showList.Station[i].positive = []
      this.showList.positive.forEach((item) => {
        if(item.afterStation === this.showList.Station[i].name){
          this.showList.Station[i].positive.push(item);

        }
      })
      if(this.showList.Station[i].positive.length === 0){
        return false
      }
      return true
    },
    reserveBus(i){
      this.showList.Station[i].reserve = []
      this.showList.reserve.forEach((item) => {
        if(item.afterStation === this.showList.Station[i].name){
          this.showList.Station[i].reserve.push(item);

        }
      })
      if(this.showList.Station[i].reserve.length === 0){
        return false
      }
      return true
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
      position:relative
      display: flex
      align-items: center;
      height: 38px
      width:80%
      margin: 0 auto
      border-1px(rgba(7,17,27,0.1))
      .icon-milestone
        font-size: 20px
        padding: 10px
        vertical-align: middle
        color: #3385ff
      .route-input
        box-sizing: border-box
        margin-top: 3px
        outline: none
        height: 32px
        flex: 1
        font-size: 16px
        padding: 5px 10px
      .botton
        display: inline-block
        .icon-search
          padding: 10px
          vertical-align: middle
          font-size: 18px
          color: #3385ff
    .lists
      width: 100%
      .list
        display: flex
        box-sizing: border-box
        width: 96%
        margin: 0 auto
        border-1px(rgba(7,17,27,0.1))
        padding:10px 0px 10px 10px
        .list-wrapper
          flex: 1
          .list-title
            margin: 4px 0px 6px 0px
            font-size: 0px
            .diamond
              display: inline-block
              vertical-align: middle
              height: 15px
              width: 7px
              background : #00aa00
              &.reverse
                background : #cc0000
            .bus-lines
              display: inline-block
              vertical-align: middle
              margin-left: 5px
              font-size: 17px
              font-weight: 500
          .origin, .destination
            font-size: 12px
            margin: 4px 2px
            font-weight: 300
            color: #888888
        .delete
          flex:0 0 28px
          text-align:center
          .icon-cross
            font-size:14px
            line-height: 59px
            color: #444
    .detail
      position: fixed
      z-index:100
      top: 0
      left: 0
      width: 100%
      height:100%
      overflow: auto
      transition: all 0.5s
      backdrop-filter: blur(10px)
      opacity: 1
      background: rgba(7,17,27,0.8)
      &.fade-enter, &.fade-leave-active
        opacity: 0
        background: rgba(7,17,27,0)
      .detail-wrapper
        min-height: 100%
        width: 100%
        font-size: 12px
        ul
          margin-top: 36px
          padding-bottom: 72px
          .show-li
            font-size: 0px
            text-align: center
            .station
              padding: 7px 0px
              .bus-1,.bus-2
                display: inline-block
                vertical-align: middle
                margin: 0px 5px
                font-size: 18px
              .bus-1
                color:#FFFF66
              .bus-2
                color:#990033
              .stationName
                display: inline-block
                margin: 0px 2px
                font-size: 18px
                color: #3385ff
                vertical-align: middle
            .line-wrapper
              position: relative
              .km
                padding: 3px
                font-size: 12px
                color: #bb0
              .line
                color: rgba(255,255,255,0.4)
                padding: 2px 0px
                font-size: 25px
      .detail-close
        position: relative
        box-sizing: border-box
        width: 32px
        height: 32px
        margin: -64px auto 0 auto
        clear: both
        padding: 4px
        font-size: 24px
        .icon-cross
          color: rgba(255,255,255,0.4)
</style>
