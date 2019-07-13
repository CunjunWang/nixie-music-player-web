// Created by CunjunWang on 2019-05-08

import {commonParameter} from './config'
import axios from 'axios'

// 获取推荐数据
export function getRecommend () {
  const url = '/api/getCarousel'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getDiscList () {
  const url = '/api/getDiscList'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongList (disstid) {
  const url = '/api/getCdInfo'
  const data = Object.assign({}, {disstid})
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
