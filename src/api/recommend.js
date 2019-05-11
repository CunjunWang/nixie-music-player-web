// Created by CunjunWang on 2019-05-08

// import jsonp from '../common/js/jsonp'
// import {commonParameter, options} from './config'
// import {homeCarouselUrl} from './url'
import axios from 'axios'

// 获取推荐数据
export function getRecommend () {
  const url = '/api/getCarouselList'
  return axios.get(url).then((res) => {
    console.log('res:' + res)
    return Promise.resolve(res.data)
  })
}

export function getDiscList () {
  const url = '/api/getDiscList'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
