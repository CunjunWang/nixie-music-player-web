// Created by CunjunWang on 2019-05-25

import {playMode} from '../common/js/config'

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
  topList: {}
}

export default state
