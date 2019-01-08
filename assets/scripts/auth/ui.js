const store = require('../store.js')

const onSignUpSuccess = function (data) {
  $('#sign-up').text('Sign Up successful')
  $('#sign-up').removeClass()
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  $('#sign-up').addClass('success')
  console.log('Sign Up OK. Data is : ', data)
}

const onSignUpFailure = function (error) {
  $('#sign-up').text('Error on Sign Up')
  // $('#sign-up').removeClass()
  $('#sign-up').addClass('failure')
  console.log('Sign Up Failed. Error is : ', error)
}
const onSignInSuccess = function (data) {
  $('#sign-in').text('Sign In successful')
  store.user = data.user
  $('#sign-in').removeClass()
  $('#sign-up').hide()
  $('#sign-in').addClass('success')
  console.log('Sign In OK. Data is : ', data)
}

const onSignInFailure = function (error) {
  $('#sign-in').text('Error on Sign In')
  $('#sign-in').removeClass()
  $('#sign-in').addClass('failure')
  console.log('Sign In Failed. Error is : ', error)
}
const onSignOutSuccess = function (data) {
  $('#sign-out').text('Sign Out successful')
  $('#sign-out').removeClass()
  $('#sign-out').addClass('success')
  console.log('Sign Out OK. Data is : ', data)
}

const onSignOutFailure = function (error) {
  $('#sign-out').text('Error on Sign Out')
  $('#sign-out').removeClass()
  $('#sign-out').addClass('failure')
  console.log('Sign Out Failed. Error is : ', error)
}

const onChangePassSuccess = function (data) {
  $('#change-password').text('Change Password is Successful')
  $('#change-password').removeClass()
  $('#sign-up').hide()
  $('#change-password').addClass('success')
  console.log('Change Password OK. Data is : ', data)
}

const onChangePassFailure = function (error) {
  $('#change-password').text('Error on Change Password')
  $('#change-password').removeClass()
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
