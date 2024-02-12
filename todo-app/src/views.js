import { getTodos, toggleTodo, removeTodo } from './todos'
import { getFilters } from './filters'

// Render application todos based on filters
const renderTodos = function () {
  const todosElement = document.querySelector('#todos')
  const filters = getFilters()
  const filteredTodos = getTodos().filter(function (todo) {
    console.log(todo)
    const searchMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed
    /*if(filters.hideCompleted) {
      return !todo.completed
    } else {
      return true
    }*/
    debugger
    return searchMatch && hideCompletedMatch
  })

  todosElement.innerHTML = ''
  todosElement.appendChild(getTodoSummary(filteredTodos))

  if (filteredTodos.length > 0) {
    filteredTodos.forEach(function (todo) {
      todosElement.appendChild(getDOMTodo(todo))
    })
  } else {
    const messageElement = document.createElement('p')
    messageElement.classList.add('empty-message')
    messageElement.textContent = 'No todo to show'
    todosElement.appendChild(messageElement)
  }
}

// Get DOM structure for todo
const getDOMTodo = function (todo) {
  const todoElement = document.createElement('label')
  const containerElement = document.createElement('div')
  
  // Setup checkbox element
  const checkboxElement = document.createElement('input')
  checkboxElement.setAttribute('type', 'checkbox')
  checkboxElement.checked = todo.completed
  containerElement.appendChild(checkboxElement)
  checkboxElement.addEventListener('change', function (e) {
    toggleTodo(todo.id)
    renderTodos()
  })

  // Setup todo title element
  const textElement = document.createElement('span')
  textElement.textContent = todo.title
  containerElement.appendChild(textElement)

  // Setup container
  todoElement.classList.add('list-item')
  containerElement.classList.add('list-item__container')
  todoElement.appendChild(containerElement)

  // Setup todo delete button
  const deleteButtonElement = document.createElement('button')
  deleteButtonElement.textContent = 'Delete'
  deleteButtonElement.classList.add('button', 'button--text')
  todoElement.appendChild(deleteButtonElement)
  deleteButtonElement.addEventListener('click', function () {
    removeTodo(todo.id)
    renderTodos()
  })
  
  return todoElement
}

// Get todo list summary
const getTodoSummary = function (filteredTodos) {
  const summary = document.createElement('h2')
  let todoText = `You have ${filteredTodos.length}`
  filteredTodos.length > 1 ? (todoText += " todos lefts") : (todoText += " todo left")
  summary.classList.add('list-title')
  summary.textContent = todoText
  return summary
}

export { renderTodos, getDOMTodo, getTodoSummary }