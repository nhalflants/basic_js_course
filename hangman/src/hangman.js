class Hangman {
  constructor(word, remaingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remaingGuesses = remaingGuesses
    this.guessedLetter = []
    this.status = 'playing'
  }

  get puzzle() {
    let puzzle = ''
    this.word.forEach((letter) => {
      if (this.guessedLetter.includes(letter) || letter === ' ') {
        puzzle += letter
      } else {
        puzzle += '*'
      }
    })
    return puzzle
  }

  makeGuess(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetter.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (this.status !== 'playing') {
      return
    }

    if (isUnique) {
      this.guessedLetter.push(guess)
    }

    if (isUnique && isBadGuess) {
      this.remaingGuesses--
    }
    this.gameStatus()
  }

  gameStatus() {
    const finished = this.word.every((letter) => this.guessedLetter.includes(letter)
      || letter === ' ')

    /*const letterNotGuesses = this.word.filter((letter) => {
      return !this.guessedLetter.includes(letter)
    })
    const finished = letterNotGuesses.length === 0*/

    /*let finished = true
    this.word.forEach((value) => {
      if (this.guessedLetter.includes(value)) {
        
      } else {
        finished = false
      }
    })*/
    if (this.remaingGuesses === 0) {
      this.status = 'failed'
    } else if (finished) {
      this.status = 'finished'
    } else {
      this.status = 'playing'
    }
  }

  get statusMessage() {
    if (this.status === 'failed') {
      return `You lost. The word was ${this.word.join('')}`
    } else if (this.status === 'finished') {
      return 'Great work'
    } else if (this.status === 'playing') {
      return `Guesses left ${this.remaingGuesses}`
    }
  }
}

export { Hangman as default }

// OLD CLASS DECLARATION 

/*const Hangman = function (word, remaingGuesses) {
  this.word = word.toLowerCase().split('')
  this.remaingGuesses = remaingGuesses
  this.guessedLetter = []
  this.status = 'playing'
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ''
  this.word.forEach((letter) => {
    if (this.guessedLetter.includes(letter) || letter === ' ') {
      puzzle += letter
    } else {
      puzzle += '*'
    }
  })
  return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
  if (game.status === 'playing') {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetter.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
      this.guessedLetter.push(guess)
    }

    if (isUnique && isBadGuess) {
      this.remaingGuesses--
    }
    this.gameStatus()
  }
}

Hangman.prototype.gameStatus = function () {
  const finished = this.word.every((letter) => this.guessedLetter.includes(letter))

  const letterNotGuesses = this.word.filter((letter) => {
    return !this.guessedLetter.includes(letter)
  })
  const finished = letterNotGuesses.length === 0

  let finished = true
  this.word.forEach((value) => {
    if (this.guessedLetter.includes(value)) {

    } else {
      finished = false
    }
  })
  if (this.remaingGuesses === 0) {
    this.status = 'failed'
  } else if (finished) {
    this.status = 'finished'
  } else {
    this.status = 'playing'
  }
}

Hangman.prototype.getStatusMessage = function () {
  if (this.status === 'failed') {
    return `You lost. The word was ${this.word.join('')}`
  } else if (this.status === 'finished') {
    return 'Great work'
  } else if (this.status === 'playing') {
    return `Guesses left ${this.remaingGuesses}`
  }
}*/

