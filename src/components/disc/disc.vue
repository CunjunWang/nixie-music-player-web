<template>
  <transition appear name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from '../../components/music-list/music-list'
  import {mapGetters} from 'vuex'
  import {getSongList} from '../../api/recommend'
  import {STATUS_OK} from '../../api/config'
  import {createSong, isValidMusic, processSongsUrl} from '../../common/js/song'

  export default {
    computed: {
      title () {
        return this.disc.discName
      },
      bgImage () {
        return this.disc.imageUrl
      },
      ...mapGetters([
        'disc'
      ])
    },
    data () {
      return {
        songs: []
      }
    },
    created () {
      this._getSongList()
    },
    methods: {
      _getSongList () {
        if (!this.disc.discId) {
          this.$router.push('/recommend')
          return
        }
        getSongList(this.disc.discId).then((res) => {
          console.log(res)
          if (res.status === STATUS_OK) {
            processSongsUrl(this._normalizeSongs(res.data.songList)).then((songs) => {
              this.songs = songs
            })
          }
        })
      },
      _normalizeSongs (list) {
        let ret = []
        list.forEach((musicData) => {
          if (isValidMusic(musicData)) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stulus">
  .slider-enter-active, .slider-leave-active
    transition all 0.3s

  .slider-enter, .slider-leave-to
    transform translate3d(100%, 0, 0)

</style>
