const store = require('../store.js')
const createGame = require('../games-tictactoe/api')
// const gameEvents = require('../auth/api.js')

const hideAuthMessage = () => {
  setTimeout(() => {
    $('#auth-messages').hide()
  }, 3000)
}

const onSignUpSuccess = function (data) {
  $('#auth-messages').show()
  $('#auth-messages').addClass('success')
  $('#auth-messages').removeClass('failure')
  $('#auth-messages').text('Sign Up successful')
  hideAuthMessage()
  $('#sign-up').hide()
}

const onSignUpFailure = function () {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Error on Sign Up. Please, try again.')
  $('#sign-up')[0].reset()
  hideAuthMessage()
}
const onSignInSuccess = function (data) {
  store.user = data.user
  $('#reset').trigger('click')
  $('#auth-messages').text('Sign In successful!')
  $('#auth-messages').css('font-size', '20px')
  $('#auth-messages').css('text-align', 'center')
  $('#auth-messages').show()
  $('#auth-messages').addClass('success')
  $('#auth-messages').removeClass('failure')
  $('.game-board').show()
  $('#games-played').hide()
  hideAuthMessage()
  $('#sign-out').removeClass('hidden')
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  createGame.createGame(data)
}

const onSignInFailure = function () {
  $('#auth-messages').text('Error on Sign In. Please try again.')
  $('#sign-in').show()
  $('#sign-in')[0].reset()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').css('display', 'inline')
  $('#games-played').hide()
}
const onSignOutSuccess = function (data) {
  $('#games-info-message').hide()
  $('#auth-messages').css('display', 'inline')
  $('#auth-messages').addClass('success')
  $('#auth-messages').text('Sign Out Successful')
  $('#auth-messages').hide()
  hideAuthMessage()
  $('#sign-up')[0].reset()
  $('#sign-up').show()
  $('#sign-up').removeClass('success')
  $('#sign-in')[0].reset()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.game-board').hide()
  $('#game-message').removeClass('success')
  $('#game-message').hide()
  $('#games-played-message').hide()
  $('#games-played-message').removeClass('success')
}

const onSignOutFailure = function () {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Error On Sign Out')
  hideAuthMessage()
  $('#sign-out').addClass('failure')
}

const onChangePassSuccess = function () {
  $('#change-password')[0].reset()
  $('#auth-messages').removeClass('failure')
  $('#auth-messages').addClass('success')
  $('#auth-messages').text('Change Password SUCCESS!')
  hideAuthMessage()
  $('#auth-messages').css('display', 'inline')
  $('#sign-up').hide()
}

const onChangePassFailure = function () {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Change Password Failure')
  hideAuthMessage()
  $('#change-password')[0].reset()
}
const onShowAllGamesSuccess = function () {
  $('#games-played').show()
  $('#games-played-message').removeClass('hidden')
  $('#games-played-message').addClass('success')
  $('#games-played-message').text('Here are the total games played on your account: ')
}

const onShowAllGamesFailure = function () {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Error on Sign Up. Please, try again.')
  hideAuthMessage()
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePassSuccess,
  onChangePassFailure,
  onShowAllGamesSuccess,
  onShowAllGamesFailure
}
