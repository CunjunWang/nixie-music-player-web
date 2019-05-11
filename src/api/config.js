// Created by CunjunWang on 2019-05-08

const config = {
  commonParameter: {
    g_tk: 1928093487,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'jsonp'
  },
  options: {
    param: 'jsonpCallback',
    prefix: 'jp'
  },
  // host and api path
  HOST_LOCAL_DEV_ENV: 'http://localhost:9588',
  RECOMMEND_API_PATH: '/recommend',
  // response status
  RESPONSE_STATUS_KEY: 'status',
  RESPONSE_STATUS_VALUE_OK: 1,
  RESPONSE_STATUS_VALUE_ERR: 0
}

module.exports = config
