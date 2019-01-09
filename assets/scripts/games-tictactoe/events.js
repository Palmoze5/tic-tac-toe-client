'use strict'
//
// const api = require('./api.js')
// const ui = require('./ui.js')
const store = require('./ui.js')

let turn = 1

store.gameBoard = ['', '', '', '', '', '', '', '', '']

const winningGame = function () {
  if ((store.gameBoard[0] === 'x' && store.gameBoard[1] === 'x' && store.gameBoard[2] === 'x') ||
      (store.gameBoard[0] === 'x' && store.gameBoard[3] === 'x' && store.gameBoard[6] === 'x') ||
      (store.gameBoard[1] === 'x' && store.gameBoard[4] === 'x' && store.gameBoard[7] === 'x') ||
      (store.gameBoard[2] === 'x' && store.gameBoard[5] === 'x' && store.gameBoard[8] === 'x') ||
      (store.gameBoard[6] === 'x' && store.gameBoard[7] === 'x' && store.gameBoard[8] === 'x') ||
      (store.gameBoard[3] === 'x' && store.gameBoard[4] === 'x' && store.gameBoard[5] === 'x') ||
      (store.gameBoard[0] === 'x' && store.gameBoard[4] === 'x' && store.gameBoard[8] === 'x') ||
      (store.gameBoard[2] === 'x' && store.gameBoard[4] === 'x' && store.gameBoard[6] === 'x')) {
    // console.html(<h3>X Wins! Game Over - TRY AGAIN!</h3>)
    return true
  } else if
  ((store.gameBoard[0] === 'o' && store.gameBoard[1] === 'o' && store.gameBoard[2] === 'o') ||
          (store.gameBoard[0] === 'o' && store.gameBoard[3] === 'o' && store.gameBoard[6] === 'o') ||
          (store.gameBoard[1] === 'o' && store.gameBoard[4] === 'o' && store.gameBoard[7] === 'o') ||
          (store.gameBoard[2] === 'o' && store.gameBoard[5] === 'o' && store.gameBoard[8] === 'o') ||
          (store.gameBoard[6] === 'o' && store.gameBoard[7] === 'o' && store.gameBoard[8] === 'o') ||
          (store.gameBoard[3] === 'o' && store.gameBoard[4] === 'o' && store.gameBoard[5] === 'o') ||
          (store.gameBoard[0] === 'o' && store.gameBoard[4] === 'o' && store.gameBoard[8] === 'o') ||
          (store.gameBoard[2] === 'o' && store.gameBoard[4] === 'o' && store.gameBoard[6] === 'o')) {
    $('#').html('O wins!')
    return true
  } else {
    return false
  }
}
const gameDraw = function () {
  if ((store.gameBoard[0] !== '' && store.gameBoard[1] !== '' && store.gameBoard[2] !== '' && store.gameBoard[3] !== '' && store.gameBoard[4] !== '' && store.gameBoard[5] !== '' && store.gameBoard[6] !== '' && store.gameBoard[7] !== '' && store.gameBoard[8] !== '' && winningGame() === false)) {
    console.log('Its a DRAW! Game Over - TRY AGAIN!')
  }
}

const onBoxClick = function (event) {
  event.preventDefault()
  // Determines the Box ID that the user clicked
  const idOfBoxClicked = event.target.id
  // Get the value of THAT Box ID
  const boxText = $('#' + idOfBoxClicked).text()
  // Add 'X' or 'O' depending on existing box value
  if (boxText === '') {
    if (turn % 2 === 1) {
      console.log('store.gameBoard is', store.gameBoard)
      $('#' + idOfBoxClicked).text('x')
      store.gameBoard[idOfBoxClicked] = 'x'
      turn++
    } else if (turn % 2 === 0) {
      console.log('store.gameBoard is', store.gameBoard)
      $('#' + idOfBoxClicked).text('o')
      store.gameBoard[idOfBoxClicked] = 'o'
      turn++
    }
  }
  // See if somebody has won the game yet
  winningGame()
  gameDraw()
}
//   // console.log(event)
//   // $('#box')
//   // we want this function to display either "X" or "O"
//   // const idOfBoxClicked = event.target.id
//   // console.log('event.Target is ', event.target)
//   // console.log('id is ', idOfBoxClicked)
//   // const boxSelector = '#' + idOfBoxClicked
//   // console.log('boxSelector is ', boxSelector)

//   // console.log('boxText is ', boxText)

// console.log(gameBoard)
// console.log(winningConditions)
// }
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
const addGameHandlers = function () {
  $('.box').on('click', onBoxClick)
  // event.preventDefault()
  // console.log('addGameHandlers worked!')
}

module.exports = {
  addGameHandlers
  // winningGame,
  // gameDraw
}
