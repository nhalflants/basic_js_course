let farhenheit = 31
let celcius = (farhenheit - 32) * 5/9
let kelvin = (farhenheit + 459.67) * 5/9

console.log('Farenheit : ' + farhenheit)
console.log('Celcius : ' + celcius)
console.log('Kelvin : ' + kelvin)

if (farhenheit <= 31) {
  console.log('it is freezing')
}

let conversionToCelcius = function (farhenheit) {
  return (farhenheit - 32) * 5/9
}

console.log(conversionToCelcius(farhenheit))

let tip = function(total, tip = .2) {
  return total + total * tip
}

let bill = tip(100)
console.log(bill)

let me = {
  name: 'Natacha',
  age: 30,
  city: 'Brussels'
}

console.log(`${me.name} is ${me.age} and lives in ${me.city}`)
me.age = 1 + me.age
console.log(`${me.name} is ${me.age} and lives in ${me.city}`)

let identity = {
  name: 'Natacha',
  age: 30,
  city: 'Brussels'
}

let husband = {
  name: 'Manu',
  age: 32,
  city: 'Ittre'
}

let getSummary = function(person) {
  return {
    summary: `${person.name} is ${person.age}`,
    location: `lives in ${person.city}`
  }
  
}

let hello = getSummary(identity)
getSummary(husband)

console.log(hello.summary)

let myAccount = {
  name: 'Nat',
  expenses: 0,
  income: 0
}

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
  account.income = account.income + amount
}

let resetAccount = function (account) {
  account.expenses = 0
  account.income = 0
}

let accountSummary = function (account) {
  let balance = account.income - account.expenses
  console.log(`Account name ${account.name} has ${balance}`)
}

addIncome(myAccount, 100)
addExpense(myAccount, 20)
addExpense(myAccount, 30)
accountSummary(myAccount)
resetAccount(myAccount)
accountSummary(myAccount)

let restaurant = {
  name: 'ASB',
  guestCapacity: 100,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatLeft = this.guestCapacity - this.guestCount
    return partySize <= seatLeft
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize
  },
}

restaurant.seatParty(80)
console.log(restaurant.checkAvailability(50))
restaurant.removeParty(40)
console.log(restaurant.checkAvailability(20))

let isValidPassword = function (password) {
  return password.length > 8 && !password.includes('password')
}

let min = 1
let max = 5
let makeGuess = function (guess) {
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  console.log(randomNum)
  return randomNum === guess
}

console.log(makeGuess(3))

const square = (num) => {
  return num * num
}
const squareLong = (num) => num * num

// console.log(squareLong(3))

const team = ['Nat', 'Manu']
const rightTeamsize = () => 'team size OK'
const wrongTeamsize = () => 'team size NOTOK'
const message = team.length <= 4 ? rightTeamsize() : wrongTeamsize()
console.log(message)

const test = () => {
  const message = 'This is my message'
  const printMessage = () => {
    console.log(message)
  }
  return printMessage
}

const myPrint = test()
myPrint()

// Closures
const createAdder = (a) => {
  return (b) => {
    return a + b
  }
}

const add10 = createAdder(10)
console.log(add10(-2))

const createTipper = (tip) => {
  return (bill) => {
    return bill * tip
  }
}

const tipper = createTipper(0.25)
console.log(tipper(100))

// Callback
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if(typeof num === 'number') {
      callback(undefined, num * 2)
    } else {
      callback('TEst')
    }
  }, 1000)
}
/*getDataCallback(2, (error, data) => {
  if(error) {
    console.log(error)
  } else {
    getDataCallback(data, (error, data) => {
      if(error) {
        console.log(error)
      } else {
        console.log(data)
      }
    })
  }
})*/

// Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('This is the data')
    reject('Request failed')
  }, 1000)
})
// If arguments should be passed, promise should be embbeded
const getDataPromise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 1000)
  })
}

myPromise.then((data) => {
  console.log(data)
}, (error) => {
  console.log(error)
})

// Promise chaining
/*getDataPromise(2).then((data) => {
  getDataPromise(data).then((data) => {
    console.log('Great')
  }, (error) => {
    console.log(error)
  })
}, (error) => {
  console.log(error)
})*/

getDataPromise('nat').then((data) => {
  return getDataPromise(data)
}).then((data) => {
  return getDataPromise(data)
}).then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error)
})

// Async
const processData = async () => {
  await getDataPromise(2)
}

processData().then((data) => {
  console.log(data)
})