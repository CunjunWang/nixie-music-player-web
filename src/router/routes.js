// Created by CunjunWang on 2019-05-11
const config = require('../api/config')

const express = require('express')
const apiRoutes = express.Router()
const axios = require('axios')

apiRoutes.get('/getCarouselList', function (req, res) {
  const url = `${config.HOST_LOCAL_DEV_ENV}${config.RECOMMEND_API_PATH}/carousel`
  axios.get(url).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

apiRoutes.get('/getDiscList', function (req, res) {
  const url = `${config.HOST_LOCAL_DEV_ENV}${config.RECOMMEND_API_PATH}/discList`
  axios.get(url).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})

module.exports = apiRoutes
