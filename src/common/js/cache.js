// Created by CunjunWang on 2019-06-17
// 操作local storage

import storage from 'good-storage'

const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = 15

function insertArray (arr, val, compare, maxLength) {
  const index = arr.findIndex(compare)
  if (index === 0) {
    return
  }
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(val)
  if (maxLength && arr.length > maxLength) {
    arr.pop()
  }
}

// 把query插入到当前搜索历史, 并保存到localStorage
export function saveSearch (query) {
  let currentSearch = storage.get(SEARCH_KEY, [])
  insertArray(currentSearch, query, (item) => {
    return item === query
  }, SEARCH_MAX_LENGTH)
  storage.set(SEARCH_KEY, currentSearch)
  return currentSearch
}

export function loadSearch () {
  return storage.get(SEARCH_KEY, [])
}
