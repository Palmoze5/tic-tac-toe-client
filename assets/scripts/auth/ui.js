const onSignUpSuccess = function (data) {
  $('#sign-up').text('Sign Up successful')
  $('#sign-up').removeClass()
  $('#sign-up').addClass('success')
  console.log('onSignUpSuccess ran. Data is : ', data)
}

const onSignUpFailure = function (error) {
  $('#sign-up').text('Error on Sign Up')
  $('#sign-up').removeClass()
  $('#sign-up').addClass('failure')
  console.log('onSignUpFailure ran. Error is : ', error)
}
const onSignInSuccess = function (data) {
  $('#sign-in').text('Sign In successful')
  $('#sign-in').removeClass()
  $('#sign-in').addClass('success')
  console.log('onSignInSuccess ran. Data is : ', data)
}

const onSignInFailure = function (error) {
  $('#sign-in').text('Error on Sign In')
  $('#sign-in').removeClass()
  $('#sign-in').addClass('failure')
  console.log('onSignInFailure ran. Error is : ', error)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
