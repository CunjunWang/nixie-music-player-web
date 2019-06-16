<template>
  <div class="search-box">
    <i class="icon-search"></i>
    <!-- v-model: 双向绑定数据 -->
    <input class="box" :placeholder="placeholder" v-model="query">
    <i @click="clear" class="icon-dismiss" v-show="query"></i>
  </div>
</template>

<script>
  export default {
    props: {
      placeholder: {
        type: String,
        default: '搜索歌曲、歌手'
      }
    },
    data () {
      return {
        query: ''
      }
    },
    // 使用created hook去监听query变化, 而不是使用watch的理由:
    created () {
      this.$watch('query', (newQuery) => {
        this.$emit('query', newQuery)
      })
    },
    methods: {
      clear () {
        this.query = ''
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .search-box
    display flex
    align-items center
    box-sizing border-box
    width 100%
    padding 0 6px
    height 40px
    background $color-highlight-background

    .icon-search
      font-size 24px
      color $color-background

    .box
      flex 1
      margin 0 5px
      line-height 18px
      background $color-highlight-background
      color $color-text
      font-size $font-size-medium

      &::placeholder
        color $color-text-d

    .icon-dismiss
      font-size 16px
      color $color-background
</style>
