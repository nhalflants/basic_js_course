import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = []

// Read existing notes from localStorage
const loadNotes = () => {
  // Fetch saved data from local storage
  const notesJSON = localStorage.getItem('notes')
  /*if (notesJSON !== null) {
    return JSON.parse(notesJSON)
  } else {
    return []
  }*/
  
  try {
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch (e) {
    return []
  }
}
// Expose notes from module
const getNotes = () => notes

// Create note
const createNote = () => {
  const noteId = uuidv4()
  const timestamp = moment().valueOf()
  notes.push({
    id: noteId,
    title: '',
    description: '',
    createdAt: timestamp,
    updatedAt: timestamp
  })
  saveNotes()
  return noteId
}

// Save notes
const saveNotes = () => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove note by id
const removeNote = (noteId) => {
  const noteIndex = notes.findIndex((note) => note.id === noteId)
  if(noteIndex > -1) {
    notes.splice(noteIndex, 1)
    saveNotes()
  }
}

// Sort notes by selected filter
const sortNotes = function (sortBy) {
  if (sortBy === 'byEdited') {
    return notes.sort(function (a, b) {
      if (a.updatedAt > b.updatedAt) {
        return -1
      } else if (b.updatedAt > a.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byCreated') {
    return notes.sort(function (a, b) {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (b.createdAt > a.createdAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'alphabetical') {
    return notes.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
      } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })
  } else {
    return notes
  }
}

const updateNote = (noteId, udpates) => {
  const note = notes.find((note) => note.id === noteId)
  if (!note) {
    return
  }
  if (typeof udpates.title === 'string') {
    note.title = udpates.title
    note.updatedAt = moment().valueOf()
  }
  if (typeof udpates.description === 'string') {
    note.description = udpates.description
    note.updatedAt = moment().valueOf()
  }
  saveNotes()
  return note
}

notes = loadNotes()

export { getNotes, createNote, removeNote, sortNotes, updateNote }
