'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  console.log('data: ', data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
    data
  })
}
const signIn = function (data) {
  console.log('data: ', data)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
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
    url: config.apiUrl + '/change-password',
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
