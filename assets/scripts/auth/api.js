'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  console.log('data: ', data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}
const signIn = function (data) {
  console.log('data: ', data)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const changePass = function (data) {
  console.log('data: ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password/' + store.user.token,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
module.exports = {
  signUp,
  signIn,
  signOut,
  changePass
}
