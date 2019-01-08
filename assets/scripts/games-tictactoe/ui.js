const store = require('../store.js')

const onBoxClickSuccess = function (data) {
  $('#box').text('Next player turn')
  store.user = data.user
  // $('#box').removeClass()
  // // $('#sign-up').hide()
  // // $('#sign-in').hide()
  // $('#sign-up').addClass('success')
  console.log('onBoxClickSuccess OK Data is : ', data)
}

const onBoxClickFailure = function (error) {
  $('#box').text('Error on boxClick')
  // $('#sign-up').removeClass()
  $('#box').addClass('failure')
  console.log('onBoxClick Failed. Error is : ', error)
}

module.exports = {
  onBoxClickSuccess,
  onBoxClickFailure
}
