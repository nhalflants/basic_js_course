import { createNote } from './notes'
import { setFilters } from './filters'
import { renderNotes } from './views'

renderNotes()

// Create note
document.querySelector('#create-note').addEventListener('click', function(event) { 
  const noteId = createNote()
  location.assign(`/edit.html#${noteId}`)
})

/*document.querySelector('#delete-notes').addEventListener('click', function (e) {
  document.querySelectorAll('.note').forEach(function (e) {
    e.remove()
  })
})*/

document.querySelector('#search-text').addEventListener('input', function(e) {
  //filters.searchText = e.target.value
  setFilters({
    searchText: e.target.value
  })
  renderNotes()
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
  //filters.sortBy = e.target.value
  setFilters({
    sortBy: e.target.value
  })
  renderNotes()
})

window.addEventListener('storage', function (e) {
  if(e.key === 'notes') {
    //notes = JSON.parse(e.newValue)
    renderNotes()
  }
})

/*const birthday = moment().year(1989).month(8).date(13)
console.log(birthday.format('MMM D, YYYY'))*/
