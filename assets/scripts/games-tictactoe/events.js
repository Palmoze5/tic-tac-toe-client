'use strict'
//
// const api = require('./api.js')
// const ui = require('./ui.js')
const store = require('./ui.js')
const gameActions = require('./api')

store.turn = 1

store.gameBoard = ['', '', '', '', '', '', '', '', '']

const freezeBoard = () => {
  for (let i = 0; i < store.gameBoard.length; i++) {
    $('#' + i).unbind('click')
    store.turn = 1
  }
}

const resetGame = () => {
  for (let i = 0; i < store.gameBoard.length; i++) {
    $('#' + i).text('')
    $('#' + i).on('click', onBoxClick)
    $('#game-message').html('')
    store.turn = 1
    store.gameBoard = ['', '', '', '', '', '', '', '', '']
  }
}
// const getAllGames = () => {
//   for (let i = 0; i < store.gameBoard.length; i++) {
//     $('#' + i).text('')
//     $('#' + i).on('click', onBoxClick)
//     $('#game-message').html('')
//     store.turn = 1
//   }

gameActions.createGame({})
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
    const winningMessage = 'x'
    $('#game-message').html('The winner is player X. (press RESET to play again)')
    $('#game-message').css('font-size', '50px')
    $('#game-message').css('text-align', 'center')
    freezeBoard()
    return winningMessage
  } else if
  ((store.gameBoard[0] === 'o' && store.gameBoard[1] === 'o' && store.gameBoard[2] === 'o') ||
          (store.gameBoard[0] === 'o' && store.gameBoard[3] === 'o' && store.gameBoard[6] === 'o') ||
          (store.gameBoard[1] === 'o' && store.gameBoard[4] === 'o' && store.gameBoard[7] === 'o') ||
          (store.gameBoard[2] === 'o' && store.gameBoard[5] === 'o' && store.gameBoard[8] === 'o') ||
          (store.gameBoard[6] === 'o' && store.gameBoard[7] === 'o' && store.gameBoard[8] === 'o') ||
          (store.gameBoard[3] === 'o' && store.gameBoard[4] === 'o' && store.gameBoard[5] === 'o') ||
          (store.gameBoard[0] === 'o' && store.gameBoard[4] === 'o' && store.gameBoard[8] === 'o') ||
          (store.gameBoard[2] === 'o' && store.gameBoard[4] === 'o' && store.gameBoard[6] === 'o')) {
    // $('#').html('O wins!')
    const winningMessage = 'o'
    $('#game-message').html('The winner is player O. (press RESET to play again)')
    $('#game-message').css('font-size', '50px')
    $('#game-message').css('text-align', 'center')
    freezeBoard()
    return winningMessage
  } else {
    return false
  }
}
const gameDraw = function () {
  if ((store.gameBoard[0] !== '' && store.gameBoard[1] !== '' && store.gameBoard[2] !== '' && store.gameBoard[3] !== '' && store.gameBoard[4] !== '' && store.gameBoard[5] !== '' && store.gameBoard[6] !== '' && store.gameBoard[7] !== '' && store.gameBoard[8] !== '' && winningGame() === false)) {
    console.log('Its a DRAW! Game Over - TRY AGAIN!')
    $('#game-message').html('Its a DRAW! Press RESET and TRY AGAIN!')
    $('#game-message').css('font-size', '50px')
    $('#game-message').css('text-align', 'center')
    freezeBoard()
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
    if (store.turn % 2 === 1) {
      console.log('store.gameBoard is', store.gameBoard)
      $('#' + idOfBoxClicked).text('x')
      store.gameBoard[idOfBoxClicked] = 'x'
      store.turn++
      if (winningGame()) {
        gameActions.patchGame(idOfBoxClicked, winningGame(), true)
      } else {
        gameActions.patchGame(idOfBoxClicked, 'x', false)
      }
    } else if (store.turn % 2 === 0) {
      console.log('store.gameBoard is', store.gameBoard)
      $('#' + idOfBoxClicked).text('o')
      store.gameBoard[idOfBoxClicked] = 'o'
      store.turn++
      if (winningGame()) {
        gameActions.patchGame(idOfBoxClicked, winningGame(), true)
      } else {
        gameActions.patchGame(idOfBoxClicked, 'o', false)
      }
    }
  }
  // See if somebody has won the game yet
  if (winningGame()) {
    $('#game-message').html(winningGame())
    console.log(winningGame())
  }
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
  $('#reset').on('click', resetGame)
  // $('#games-played').on('click', getAllGames)
  // event.preventDefault()
  // console.log('addGameHandlers worked!')
}

module.exports = {
  addGameHandlers
  // winningGame,
  // gameDraw
}
