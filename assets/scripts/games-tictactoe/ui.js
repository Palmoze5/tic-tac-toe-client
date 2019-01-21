const store = require('../store.js')

const hideAuthMessage = () => {
  setTimeout(() => {
    $('#auth-messages').hide()
  }, 3000)
}

const createGameSuccess = function (data) {
  $('.game-board').show()
  $('#games-played').hide()
  $('#game-message').show()
  $('#game-message').text('Who will win? Play to find out!')
  $('#game-message').css('background-color', '#8fff90')
  console.log('createGameSuccess!')
  store.game = data.game
}

const createGameFailure = function () {
  $('#message').text('Create Game Failed - Try Again')
  $('#message').css('background-color', '#ff91A3')
}
// Get Games
const getGamesSuccess = function (data) {
  $('#game-message').text('Total Games for User ' + store.user.id + ': ' + data.games.length).css('font-weight', 'bold')
  $('#games-played').show()
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

const onShowAllGamesSuccess = function (response) {
  $('#games-played-message').show()
  $('#games-played-message').text('Games Played: ' + response.games.length)
  $('#games-played-message').css('background-color', '#8fff90')
  $('#games-played-message').css('text-align', 'center')
  store.game = response.game
  // $('#auth-messages').show()
  // $('#auth-messages').addClass('success')
  // $('#auth-messages').text('Sign Up successful')
  // hideAuthMessage()
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  // $('#sign-up').addClass('success')
  console.log('onShowAllGamesSuccess. Success is : ', response)
}

const onShowAllGamesFailure = function (error) {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Error on Sign Up. Please, try again.')
  hideAuthMessage()
  // $('#sign-up').removeClass()
  console.log('onShowAllGamesFailure. Error is : ', error)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  getGamesSuccess,
  getGamesFailure,
  updateGameSuccess,
  updateGameFailure,
  onShowAllGamesSuccess,
  onShowAllGamesFailure
}
