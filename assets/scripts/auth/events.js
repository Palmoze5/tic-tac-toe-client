const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./ui.js')
const getFormFields = require(`../../../lib/get-form-fields`)

store.gameBoard = ['', '', '', '', '', '', '', '', '']

const onSignUp = function (event) {
  event.preventDefault()
  console.log('onSignUp worked!')

  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  console.log('onSignIn worked!')
  $('.game-board').removeClass('display')

  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onChangePass = function (event) {
  event.preventDefault()
  console.log('onChangePass ran!')

  const data = getFormFields(event.target)
  api.changePass(data)
    .then(ui.onChangePassSuccess)
    .catch(ui.onChangePassFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('onSignOut ran!')

  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}
const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePass)
}

module.exports = {
  addHandlers
}
