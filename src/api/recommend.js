// Created by CunjunWang on 2019-05-08

import jsonp from '../common/js/jsonp'
import {commonParameter, options} from './config'
import {homeCarouselUrl} from './url'

// 获取推荐数据
export function getRecommend () {
  const data = Object.assign({}, commonParameter, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(homeCarouselUrl, data, options)
}
