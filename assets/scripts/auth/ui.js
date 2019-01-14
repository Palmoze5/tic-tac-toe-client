const store = require('../store.js')
const createGame = require('../games-tictactoe/api')

const hideAuthMessage = () => {
  setTimeout(() => {
    $('#auth-messages').hide()
  }, 5000)
}

const onSignUpSuccess = function (data) {
  $('#auth-messages').show()
  $('#auth-messages').addClass('success')
  $('#auth-messages').text('Sign Up successful')
  hideAuthMessage()
  $('#sign-up').hide()
  // $('#sign-in').hide()
  $('#sign-up').addClass('success')
  console.log('Sign Up OK. Data is : ', data)
}

const onSignUpFailure = function (error) {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Error on Sign Up')
  hideAuthMessage()
  // $('#sign-up').removeClass()
  console.log('Sign Up Failed. Error is : ', error)
}
const onSignInSuccess = function (data) {
  $('#auth-messages').show()
  $('#auth-messages').addClass('success')
  $('#auth-messages').text('Sign In successful')
  $('.game-board').show()
  hideAuthMessage()
  store.user = data.user
  console.log(store.user)
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  console.log('Sign In OK. Data is : ', data)
  createGame.createGame({})
}

const onSignInFailure = function (error) {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Error on Sign In')
  hideAuthMessage()
  $('#sign-in').text('Error on Sign In')
  $('#sign-in').removeClass()
  $('#sign-in').addClass('failure')
  console.log('Sign In Failed. Error is : ', error)
}
const onSignOutSuccess = function (data) {
  $('#auth-messages').show()
  $('#auth-messages').addClass('success')
  $('#auth-messages').text('Sign Out Successful')
  hideAuthMessage()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  console.log('Sign Out OK. Data is : ', data)
}

const onSignOutFailure = function (error) {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Error On Sign Out')
  hideAuthMessage()
  $('#sign-out').addClass('failure')
  console.log('Sign Out Failed. Error is : ', error)
}

const onChangePassSuccess = function (data) {
  $('#auth-messages').addClass('success')
  $('#auth-messages').text('Change Password Success')
  hideAuthMessage()
  $('#sign-up').hide()
  $('#change-password').addClass('success')
  console.log('Change Password OK. Data is : ', data)
}

const onChangePassFailure = function (error) {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Change Password Failure')
  hideAuthMessage()
  $('#change-password').addClass('failure')
  console.log('Change Password Failed. Error is : ', error)
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePassSuccess,
  onChangePassFailure
}
