import Hangman from './hangman'
import getPuzzle from './request'

const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')
let game

const render = () => {
  //puzzleElement.textContent = game.puzzle
  puzzleElement.innerHTML = ''
  guessesElement.textContent = game.statusMessage
  game.puzzle.split('').forEach((letter, index) => {
    const letterElement = document.createElement('span')
    letterElement.textContent = letter
    puzzleElement.appendChild(letterElement)
  });
}

// A function must be labeled as async in order for it to use the await keyword in its body. We need to await getPuzzle because it's asynchronous. We don't want to execute the lines following getPuzzle until getPuzzle is finished which is why we await it.
const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game = new Hangman(puzzle, 5)
  render()
}

// Avoid race condition accessing 'game.makeGuess(guess)' although game is not yet initialized resulting in a ReferenceError
window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  game.makeGuess(guess)
  render()
})

// If you added parentheses to 'startGame' then you'd be passing the return value of startGame to the event listener. 
// We want to just pass the function itself so the event listener can call the function itself once the event fires.
document.querySelector('#reset').addEventListener('click', startGame)

startGame()

/*getPuzzle('2').then((puzzle) => {
  console.log(puzzle)
}, (error) => {
  console.log(`Error : ${error}`)
})*/

/*getPuzzle('3').then((puzzle) => {
  console.log(puzzle)
}).catch((error) => {
  console.log(`Error : ${error}`)
})*/

/*getCountryDetail('CO', (error, country) => {
  if (error) {
    console.log(error)
  } else {
    console.log(country)
  }
})*/

/*getLocation().then((location) => {
  return location.country
}).then((locationCode) => {
  getCountryDetail(locationCode).then((country) => {
    console.log(country.name)
  }, (error) => {
    console.log(error)
  })
})*/

getCurrentCountry().then((country) => {
  console.log(country.name)
}).catch((error) => {
  console.log(error)
})

/*const puzzle = getPuzzleSync()
console.log(puzzle)*/

/*fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('Failed to fetch the puzzle')
  }
}).then((data) => {
  console.log(data.puzzle)
}).catch((error) => {
  console.log(error)
})*/