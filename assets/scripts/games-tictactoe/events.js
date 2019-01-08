'use strict'
//
// const api = require('./api.js')
// const ui = require('./ui.js')
// const store = require('./ui.js')

// let player = 'x'
// const gameBoard = ['', '', '', '', '', '', '', '', '']
let turn = 1

const gameBoard = ['', '', '', '', '', '', '', '', '']

const onBoxClick = function (event) {
  event.preventDefault()
  // $('#box')
  // we want this function to display either "X" or "O"
  const idOfBoxClicked = event.target.id
  // console.log('event.Target is ', event.target)
  // console.log('id is ', idOfBoxClicked)
  // const boxSelector = '#' + idOfBoxClicked
  // console.log('boxSelector is ', boxSelector)

  const boxText = $('#' + idOfBoxClicked).text()
  // console.log('boxText is ', boxText)

  if (boxText === '') {
    if (turn % 2 === 1) {
      $('#' + idOfBoxClicked).text('x')
      gameBoard[idOfBoxClicked] = 'x'
      turn++
    } else if (turn % 2 === 0) {
      $('#' + idOfBoxClicked).text('o')
      gameBoard[idOfBoxClicked] = 'o'
      turn++
    }
    console.log(gameBoard)
  }

// Telling the user that the game is over:
// 1.) When the gameboard fills up
}
const addGameHandlers = function () {
  $('.box').on('click', onBoxClick)
  // event.preventDefault()
  // console.log('addGameHandlers worked!')
}
module.exports = {
  addGameHandlers
  // createNewGame
}
