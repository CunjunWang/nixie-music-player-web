<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot" :class="{active: currentPageIndex === index}"
            v-for="(item, index) in dots" :key="index"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {addClass} from '../../common/js/dom'

  export default {
    name: 'slider',
    // 设置组件属性, 外部可以控制
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      }
    },
    data () {
      return {
        dots: [],
        currentPageIndex: 0
      }
    },
    mounted () {
      // 保证dom完成渲染, 加个延时
      // 浏览器通常是17ms刷新一次
      setTimeout(() => {
        this._setSliderWidth(false)
        this._initDots()
        this._initSlider()

        if (this.autoPlay) {
          this._play()
        }
      }, 20)
      // 监听窗口大小改变事件
      // 若改变了, 重新计算轮播图尺寸,
      // 防止出现改变窗口尺寸后图片轮播尺寸错误
      window.addEventListener('resize', () => {
        // slider初始化之前什么都不做
        if (!this.slider || !this.slider.enabled) {
          return
        }
        clearTimeout(this.resizeTimer)
        this.resizeTimer = setTimeout(() => {
          if (this.slider.isInTransition) {
            this._onScrollEnd()
          } else {
            if (this.autoPlay) {
              this._play()
            }
          }
          this.refresh()
        }, 60)
      })
    },
    activated () {
      this.slider.enable()
      let pageIndex = this.slider.getCurrentPage().pageX
      this.slider.goToPage(pageIndex, 0, 0)
      this.currentPageIndex = pageIndex
      if (this.autoPlay) {
        this._play()
      }
    },
    deactivated () {
      this.slider.disable()
      clearTimeout(this.timer)
    },
    beforeDestroy () {
      this.slider.disable()
      clearTimeout(this.timer)
    },
    methods: {
      refresh () {
        if (this.slider) {
          this._setSliderWidth(true)
          this.slider.refresh()
        }
      },
      _setSliderWidth (isResize) {
        this.children = this.$refs.sliderGroup.children
        let width = 0
        let sliderWidth = this.$refs.slider.clientWidth
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          addClass(child, 'slider-item')
          child.style.width = sliderWidth + 'px'
          width += sliderWidth
        }

        if (this.loop && !isResize) {
          width += 2 * sliderWidth
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      },
      _initSlider () {
        this.slider = new BScroll(
          this.$refs.slider,
          {
            scrollX: true,
            scrollY: false,
            momentum: false,
            snap: {
              loop: this.loop,
              threshold: 0.3,
              speed: 400
            }
          }
        )
        this.slider.on('scrollEnd', this._onScrollEnd)
        this.slider.on('touchend', () => {
          if (this.autoPlay) {
            this._play()
          }
        })
        this.slider.on('beforeScrollStart', () => {
          if (this.autoPlay) {
            clearTimeout(this.timer)
          }
        })
      },
      _onScrollEnd () {
        // let pageIndex = this.slider.getCurrentPage().pageX
        this.currentPageIndex = this.slider.getCurrentPage().pageX
        // 每次自动轮播前要clear一次
        // 场景: 用户手动拖动了一下轮播, 由于timer机制会跳到上一张图再轮播回来
        if (this.autoPlay) {
          this._play()
        }
      },
      _initDots () {
        this.dots = new Array(this.children.length)
      },
      _play () {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.slider.next()
        }, this.interval)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slider
    min-height 1px

    .slider-group
      position relative
      overflow hidden
      white-space nowrap

      .slider-item
        float left
        box-sizing border-box
        overflow hidden
        text-align center

        a
          display block
          width 100%
          overflow hidden
          text-decoration none

        img
          display block
          width 100%

    .dots
      position absolute
      right 0
      left 0
      bottom 12px
      text-align center
      font-size 0

      .dot
        display inline-block
        margin 0 4px
        width 8px
        height 8px
        border-radius 50%
        background $color-text-l

        &.active
          width 20px
          border-radius 5px
          background $color-text-ll
</style>
