import moment from 'moment'
import { getFilters } from './filters'
import { sortNotes, getNotes } from './notes'

// Generate DOM structure for a note 
const generateNoteDOM = function (note) {
  const noteElement = document.createElement('a')
  const textElement = document.createElement('p')
  const status = document.createElement('p')
  /*const button = document.createElement('button')
  
  // Setup the remove note button
  button.textContent = 'Delete'
  noteElement.appendChild(button)
  button.addEventListener('click', function(e) {
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes, filters)
  })*/

  // Setup the note title text 
  if (note.title.length > 0) {
    textElement.textContent = note.title
  } else {
    textElement.textContent = 'Unnamed note'
  }
  textElement.classList.add('list-item__title')
  noteElement.appendChild(textElement)

  // Setup the link
  noteElement.setAttribute('href', `/edit.html#${note.id}`)
  noteElement.classList.add('list-item')

  // Setup the status message
  status.textContent = generateLastUpdated(note.updatedAt)
  status.classList.add('list-item__subtitle')
  noteElement.appendChild(status)

  return noteElement
}

// Render application note 
const renderNotes = function () {
  const notesElement = document.querySelector('#notes')

  const filters = getFilters()
  const notes = sortNotes(filters.sortBy)
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  notesElement.innerHTML = ''

  if (filteredNotes.length > 0) {
    filteredNotes.forEach(function (note) {
      const noteElement = generateNoteDOM(note)
      notesElement.appendChild(noteElement)
    })
  } else {
    const emptyMessage = document.createElement('p')
    emptyMessage.textContent = 'No notes to show'
    emptyMessage.classList.add('empty-message')
    notesElement.appendChild(emptyMessage)
  }
}

const generateLastUpdated = function (timestamp) {
  return `Last updated: ${moment(timestamp).fromNow()}`
}

const initializedEditPage = (noteId) => {
  const titleElement = document.querySelector('#note-title')
  const descriptionElement = document.querySelector('#note-body')
  const lastUpdatedElement = document.querySelector('#last-edited')

  const notes = getNotes()
  const note = notes.find(function (note) {
    return note.id === noteId
  })

  if (!note) {
    location.assign('/index.html')
  }

  titleElement.value = note.title
  descriptionElement.value = note.description
  lastUpdatedElement.textContent = generateLastUpdated(note.updatedAt)
}

export { generateNoteDOM, renderNotes, generateLastUpdated, initializedEditPage }