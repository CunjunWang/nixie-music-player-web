// Created by CunjunWang on 2019-06-16

import jsonp from '../common/js/jsonp'
import {commonParameter, options} from './config'

export function getHotKey () {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParameter, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })

  return jsonp(url, data, options)
}
