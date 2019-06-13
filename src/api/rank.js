// Created by CunjunWang on 2019-06-13

import jsonp from '../common/js/jsonp'
import {commonParameter, options} from './config'

export function getTopList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  const data = Object.assign({}, commonParameter, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })
  return jsonp(url, data, options)
}
