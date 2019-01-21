'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./games-tictactoe/events.js')

$(() => {
  authEvents.addHandlers()
  gameEvents.addGameHandlers()
})
