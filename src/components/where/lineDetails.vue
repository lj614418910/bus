<template lang="html">
  <transition name="show">
    <div v-show="showFlag" class="oline">
      <div class="oline-wrapper">
        <div class="oline-title">
          <i class="icon-chevron-left" @click="hide()"></i>
        </div>
        <div class="oline-content">
          
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  props: {
    list: {
      type: Object
    }
  },
  data(){
    return {
      showFlag: false
    }
  },
  methods: {
    show() {
      this.showFlag = true;
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$el, {
            click: true
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    hide() {
      this.showFlag = false;
    },
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .oline
    position fixed
    left: 0
    top: 0
    bottom 0
    z-index 30
    width 100%
    background #ffffff
    &.show-enter-active, &.show-leave-active {
      transition: all 0.2s linear
      transform translate3d(0, 0, 0)
    }
    &.show-enter, &.show-leave-active {
      opacity: 0
      transform translate3d(100%, 0, 0)
    }
    .oline-wrapper
      .oline-title
        font-size: 26px
        margin: 10px 0px
        .icon-chevron-left
          padding: 10px 12px
</style>
