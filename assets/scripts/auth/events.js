const api = require('./api.js')
const ui = require('./ui.js')

const getFormFields = require(`../../../lib/get-form-fields`)

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

  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
}

module.exports = {
  addHandlers
}
