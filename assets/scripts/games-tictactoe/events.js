'use strict'
//
// const api = require('./api.js')
// const ui = require('./ui.js')
// const store = require('./ui.js')

// const playerOne = 'x'
// const gameBoard = ['', '', '', '', '', '', '', '', '']
let turn = 1

const gameBoard = ['', '', '', '', '', '', '', '', '']

const onBoxClick = function (event) {
  event.preventDefault()
  // $('#box')
  // we want this function to display either "X" or "O"
}
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
}
//   const gameWinner = function gameWinner() {
//     if (store.gameBoard.cells[0] === store.gameBoard.cells[1] && store.gameBoard.cells[0] === store.gameBoard.cells[2] && store.gameBoard.cells[0] !== '') {
//       return true;
//     } else if (store.gameBoard.cells[3] === store.gameBoard.cells[4] && store.gameBoard.cells[3] === store.gameBoard.cells[5] && store.gameBoard.cells[3] !== '') {
//       return true;
//     } else if (store.gameBoard.cells[6] === store.gameBoard.cells[7] && store.gameBoard.cells[6] === store.gameBoard.cells[8] && store.gameBoard.cells[6] !== '') {
//       return true;
//     } else if (store.gameBoard.cells[0] === store.gameBoard.cells[3] && store.gameBoard.cells[0] === store.gameBoard.cells[6] && store.gameBoard.cells[0] !== '') {
//     return true;
//   } else if (store.gameBoard.cells[1] === store.gameBoard.cells[4] && store.gameBoard.cells[1] === store.gameBoard.cells[7] && store.gameBoard.cells[1] !== '') {
//     return true;
//   } else if (store.gameBoard.cells[2] === store.gameBoard.cells[5] && store.gameBoard.cells[2] === store.gameBoard.cells[8] && store.gameBoard.cells[2] !== '') {
//     return true;
//   } else if (store.gameBoard.cells[0] === store.gameBoard.cells[4] && store.gameBoard.cells[0] === store.gameBoard.cells[8] && store.gameBoard.cells[0] !== '') {
//     return true;
//   } else if (store.gameBoard.cells[2] === store.gameBoard.cells[4] && store.gameBoard.cells[2] === store.gameBoard.cells[6] && store.gameBoard.cells[2] !== '') {
//     return true;
//   } else {
//     return false;
//   }
//   }
// };
// // check for draw scenario
// var gameDraw = function gameDraw() {
//   if (store.gameBoard.cells[0] && store.gameBoard.cells[1] && store.gameBoard.cells[2] && store.gameBoard.cells[3] && store.gameBoard.cells[4] && store.gameBoard.cells[5] && store.gameBoard.cells[6] && store.gameBoard.cells[7] && store.gameBoard.cells[8] !== '' && checkWinner() === false) {
//     return true;
//   } else {
//     return false;
//   }
// };
// // check for if game is over
// var gameOver = function gameOver() {
//   if (checkWinner() === true || gameDraw() === true) {
//     return true;
//   } else {
//     return false;
//   }
// };
// Telling the user that the game is over:
// 1.) When the gameboard fills up
const addGameHandlers = function () {
  $('.box').on('click', onBoxClick)
  // event.preventDefault()
  // console.log('addGameHandlers worked!')
}
module.exports = {
  addGameHandlers
  // gameWinner,
  // gameDraw,
  // gameOver
  // createNewGame
}
