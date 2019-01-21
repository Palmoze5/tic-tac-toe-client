const store = require('../store.js')
const createGame = require('../games-tictactoe/api')

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
  console.log('Sign Up OK. Data is : ', data)
}

const onSignUpFailure = function (error) {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Error on Sign Up. Please, try again.')
  $('#sign-up')[0].reset()
  hideAuthMessage()
  // $('#sign-up').removeClass()
  console.log('Sign Up Failed. Error is : ', error)
}
const onSignInSuccess = function (data) {
  $('#auth-messages').text('Sign In successful. Play the game!')
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
  // $('#sign-in').resetGame()
  $('#sign-up').hide()
  store.user = data.user
  createGame.createGame({})
}
// signInSuccess = function signInSuccess(response) {
//   //  console.log('Response is', response)
//   $('#auth-message').text('Enjoy your game!');
//   $('#sign-in input').val('');
//   $('#change-password').removeClass('hidden');
//   $('#sign-out').removeClass('hidden');
//   $('#start-game').removeClass('hidden');
//   $('#sign-in').hide();
//   $('#sign-up').hide();
//   $('.story').hide();
//   store.user = response.user;
// };

const onSignInFailure = function (error) {
  $('#auth-messages').text('Error on Sign In. Please try again.')
  $('#sign-in').show()
  $('#sign-in')[0].reset()
  // $('#sign-in').removeClass()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').css('display', 'inline')
  $('#games-played').hide()
  console.log('Sign In Failed. Error is : ', error)
}
const onSignOutSuccess = function (data) {
  $('#auth-messages').css('display', 'inline')
  // $('#auth-messages').addClass('success')
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
  $('#auth-messages').css('display', 'inline')
  $('#change-password')[0].reset()
  // hideAuthMessage()
  $('#sign-up').hide()
  // $('#change-password').addClass('success')
  console.log('Change Password OK. Data is : ', data)
}

const onChangePassFailure = function (error) {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Change Password Failure')
  hideAuthMessage()
  $('#change-password')[0].reset()
  $('#change-password').addClass('failure')
  console.log('Change Password Failed. Error is : ', error)
}
const onShowAllGamesSuccess = function (responseAPI) {
  $('#games-played').show()
  $('#games-played-message').removeClass('hidden')
  $('#games-played-message').addClass('success')
  $('#games-played-message').text('Here are the total games played on your account: ')
  // $('#auth-messages').addClass('success')
  // $('#auth-messages').text('Sign Up successful')
  // hideAuthMessage()
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  // $('#sign-up').addClass('success')
  console.log(responseAPI)
}

const onShowAllGamesFailure = function (error) {
  $('#auth-messages').show()
  $('#auth-messages').addClass('failure')
  $('#auth-messages').text('Error on Sign Up. Please, try again.')
  hideAuthMessage()
  console.log('Sign Up Failed. Error is : ', error)
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
