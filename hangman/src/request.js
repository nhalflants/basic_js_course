const getPuzzle = async (wordCount) => {
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  if(response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Failed to fetch the puzzle')
  }
}

export { getPuzzle as default }

/*const getPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Failed to fetch the puzzle')
    }
  }).then((data) => {
    return data.puzzle
  })
}*/

/*const getPuzzleSync = () => {
  const request = new XMLHttpRequest()

  request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2', false)
  request.send()
  if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText)
    return data.puzzle
  } else if (request.readyState === 4) {
    throw new Error('Error fetching data')
  }
}*/

/*const getCountryDetailCallback = (countryCode, callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', function (e) {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      callback(undefined, data.name)
    } else if (e.target.readyState === 4) {
      callback('An error occured fetching the data', undefined)
    }
  })
  request.open('GET', `https://restcountries.eu/rest/v2/alpha/${countryCode}`)
  request.send()
}

const getCountryDetailPromise = (countryCode) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', function (e) {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      const country = data.find((c) => {
        return c.alpha2Code === countryCode
      })
      resolve(country.name)
    } else if (e.target.readyState === 4) {
      reject('An error occured fetching the data')
    }
  })
  request.open('GET', 'https://restcountries.eu/rest/v2/all')
  request.send()
})*/

/*const getCountryDetailFetch = (countryCode) => {
  return fetch('https://restcountries.eu/rest/v2/all').then((response) => {
    if(response.status === 200) {
      return response.json()
    } else {
      throw new Error('Error fetching the countries')
    }
  }).then((countries) => {
    return countries.find((country) => country.alpha2Code === countryCode)
  })
}*/

const getCountryDetail = async (countryCode) => {
  const response = await fetch('//restcountries.eu/rest/v2/all')
  if(response.status === 200) {
    const countries = await response.json()
    return countries.find((country) => country.alpha2Code === countryCode)
  } else {
    throw new Error('Error fetching the countries')
  }
}

const getLocation = async () => {
  const response = await fetch('//ipinfo.io/json?token=1a11bd55cc8f9c')
  if(response.status === 200) {
    return response.json()
  } else {
    throw new Error('Error fetching the countries')
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation()
  return getCountryDetail(location.country)
}
