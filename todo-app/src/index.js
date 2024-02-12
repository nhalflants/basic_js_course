import { renderTodos } from './views'
import { setFilters } from './filters'
import { createTodo } from './todos'

renderTodos()

document.querySelector('#search-text').addEventListener('input', function (e) {
  setFilters({
    searchText: e.target.value,
  })
  renderTodos()
})

document.querySelector('#todo-form').addEventListener('submit', function (e) {
  e.preventDefault()
  const text = e.target.elements.todoTitle.value.trim()
  if(text.length > 0) {
    createTodo(text)
    renderTodos()
    e.target.elements.todoTitle.value = ''
  }
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
  console.log(e.target.checked)
  setFilters({
    hideCompleted: e.target.checked,
  })
  renderTodos()
})

/*const p = document.querySelectorAll('p')
p.forEach(function (param) {
  if(param.textContent.includes('the')) {
    param.remove()
  }
})*/