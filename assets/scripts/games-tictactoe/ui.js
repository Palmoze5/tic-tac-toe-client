const store = require('../store.js')

<<<<<<< HEAD
const onBoxClickSuccess = function (event) {
  $('#box').text('Next player turn')
  store.user = event.user
  // $('#box').removeClass()
  // // $('#sign-up').hide()
  // // $('#sign-in').hide()
  // $('#sign-up').addClass('success')
  console.log('onBoxClickSuccess OK Data is : ', event)
=======
const createGameSuccess = function (data) {
  $('.game-board').show()
  $('#scores').show()
  $('#game-id').text('Game ID: ' + data.game.id)
  $('#game-message').show()
  $('#game-message').text('New Game Started!')
  $('#game-message').css('background-color', '#8fff90')
  store.game = data.game
>>>>>>> game
}

const createGameFailure = function () {
  $('#message').text('Create Game Failed - Try Again')
  $('#message').css('background-color', '#ff91A3')
}
// Get Games
const getGamesSuccess = function (data) {
  $('#games-list').text('Total Games for User ' + store.user.id + ': ' + data.games.length).css('font-weight', 'bold')
  store.game = data.game
}

const getGamesFailure = function () {
  $('#message').text('Getting Games Failed - Try Again')
  $('#message').css('background-color', '#ff91A3')
}
// change password messages
const updateGameSuccess = function (data) {
  $('#message').text('Game Updated Successfully')
  $('#message').css('background-color', '#8fff90')
  store.game = data.game
}

const updateGameFailure = function () {
  $('#message').text('Game Update Failed - Try Again')
  $('#message').css('background-color', '#ff91A3')
}
module.exports = {
  createGameSuccess,
  createGameFailure,
  getGamesSuccess,
  getGamesFailure,
  updateGameSuccess,
  updateGameFailure
}
