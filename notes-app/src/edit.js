import { initializedEditPage, generateLastUpdated } from './views'
import { updateNote, removeNote } from './notes'

const titleElement = document.querySelector('#note-title')
const descriptionElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const lastUpdatedElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)

initializedEditPage(noteId)

titleElement.addEventListener('input', function (e) {
  const note = updateNote(noteId, {
    title: e.target.value
  })
  lastUpdatedElement.textContent = generateLastUpdated(note.updatedAt)
})

descriptionElement.addEventListener('input', function (e) {
  const note = updateNote(noteId, {
    description: e.target.value
  })
  lastUpdatedElement.textContent = generateLastUpdated(note.updatedAt)
})

removeElement.addEventListener('click', function () {
  removeNote(noteId)
  location.assign('/index.html')
})

window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    initializedEditPage(noteId)
  }
})