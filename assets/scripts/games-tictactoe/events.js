'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./ui.js')
const gameActions = require('./api')
const createGameFile = require('../games-tictactoe/api')

store.turn = 1

store.gameBoard = ['', '', '', '', '', '', '', '', '']

const freezeBoard = () => {
  for (let i = 0; i < store.gameBoard.length; i++) {
    $('#' + i).unbind('click')
    store.turn = 1
  }
}

const resetGame = () => {
  createGameFile.createGame()
  for (let i = 0; i < store.gameBoard.length; i++) {
    $('#' + i).text('')
    $('#' + i).on('click', onBoxClick)
    $('#game-message').html('')
    $('#games-played').hide()
    $('#games-played-message').hide()
    $('#sign-in')[0].reset()
    store.turn = 1
    store.gameBoard = ['', '', '', '', '', '', '', '', '']
  }
}

// gameActions.createGame({})
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
    const winningMessage = 'X wins! Press RESET button and Try Again!'
    $('#game-message').html('The winner is player X. Press RESET to play again)')
    $('#game-message').css('font-size', '35px')
    $('#game-message').css('text-align', 'center')
    $('#games-info-message').html('After a game and before hitting reset, you can click "View Games Played", which is below the game board.')
    $('#games-info-message').css('font-size', '20px')
    $('#games-info-message').css('text-align', 'center')
    $('#games-played').show()
    $('#games-played-message').hide()
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
    const winningMessage = 'O wins! Press RESET button and Try Again!'
    $('#game-message').html('The winner is player O. Press RESET to play again)')
    $('#game-message').css('font-size', '35px')
    $('#game-message').css('text-align', 'center')
    $('#games-info-message').html('After a game and before hitting reset, you can click "View Games Played", which is below the game board.')
    $('#games-info-message').css('font-size', '20px')
    $('#games-info-message').css('text-align', 'center')
    $('#games-played-message').hide()
    $('#games-played').show()
    freezeBoard()
    return winningMessage
  } else {
    return false
  }
}
const gameDraw = function () {
  if ((store.gameBoard[0] !== '' && store.gameBoard[1] !== '' && store.gameBoard[2] !== '' && store.gameBoard[3] !== '' && store.gameBoard[4] !== '' && store.gameBoard[5] !== '' && store.gameBoard[6] !== '' && store.gameBoard[7] !== '' && store.gameBoard[8] !== '' && winningGame() === false)) {
    $('#game-message').html('Its a DRAW! Press RESET and play again!')
    $('#game-message').css('font-size', '35px')
    $('#game-message').css('text-align', 'center')
    $('#games-info-message').html('After a game and before hitting reset, you can click "View Games Played", which is below the game board.')
    $('#games-info-message').css('font-size', '20px')
    $('#games-info-message').css('text-align', 'center')
    $('#games-played').show()
    $('#games-played-message').hide()
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
      $('#' + idOfBoxClicked).text('x')
      store.gameBoard[idOfBoxClicked] = 'x'
      store.turn++
      if (winningGame()) {
        gameActions.patchGame(idOfBoxClicked, winningGame(), true)
      } else {
        gameActions.patchGame(idOfBoxClicked, 'x', false)
      }
    } else if (store.turn % 2 === 0) {
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
  }
  gameDraw()
}
const onShowAllGames = function (event) {
  event.preventDefault()
  api.showAllGames()
    .then(ui.onShowAllGamesSuccess)
    .catch(ui.onShowAllGamesFailure)
}
const addGameHandlers = function () {
  $('.box').on('click', onBoxClick)
  $('#reset').on('click', resetGame)
  $('#games-played').on('click', onShowAllGames)
}

module.exports = {
  addGameHandlers
}
