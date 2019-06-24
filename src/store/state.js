// Created by CunjunWang on 2019-05-25

import {playMode} from '../common/js/config'
import {loadFavorite, loadPlay, loadSearch} from '../common/js/cache'

const state = {
  singer: {},
  // 是否正在播放
  playing: false,
  // 是否全屏
  fullScreen: false,
  // 播放列表
  playList: [],
  // 歌曲列表
  sequenceList: [],
  // 播放模式
  mode: playMode.sequence,
  // 当前播放歌曲index
  currentIndex: -1,
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state
