const notes = [{
  title: 'Next trip',
  description: 'Go to Thailand'
}, {
  title: 'Study',
  description: 'Javascript'
}, {
  title: 'Merry Christmas',
  description: 'Decorate christmas tree'
}]

const findNote = function (notes, title) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === title.toLowerCase()
  })
}

const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isDescriptionMatch = note.description.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isDescriptionMatch
  })
}

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

//console.log(findNote(notes, 'tudy'))
//console.log(findNotes(notes, 'trip'))
sortNotes(notes)
console.log(notes)

