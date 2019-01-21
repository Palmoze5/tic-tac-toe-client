// 'use strict'

const config = require('../config')
const store = require('../store')
const ui = require('./ui.js')

const createGame = () => {
  createGameAPI()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const createGameAPI = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

const patchGame = function (index, letter, over) {
  const payload = {
    'game': {
      'cell': {
        'index': index,
        'value': letter
      },
      'over': over
    }
  }
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: payload
  })
}

const showAllGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  createGame,
  createGameAPI,
  patchGame,
  showAllGames
}
