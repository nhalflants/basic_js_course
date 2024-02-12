import uuidv4 from 'uuid/v4'

let todos = []

// Fetch existing todo from localstorage
const loadTodos = () => {
  const savedTodos = localStorage.getItem('todos')
  if (savedTodos !== null) {
    todos = JSON.parse(savedTodos)
  } else {
    todos = []
  }
}
loadTodos()

// Expose todos from module
const getTodos = () => todos

// Save todos to localStorage
const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Create todo
const createTodo = (todoTitle) => {
  const todoId = uuidv4()
  todos.push({
    id: todoId,
    title: todoTitle,
    completed: false
  })
  saveTodos()
  return todoId
}

// Remove todo by id
const removeTodo = function (todoId) {
  const todoIndex = todos.findIndex(function (todo) {
    return todoId === todo.id
  })
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
    saveTodos()
  }
}

const toggleTodo = function (todoId) {
  const todo = todos.find((todo) => todo.id === todoId)
  if (todo) {
    todo.completed = !todo.completed
    saveTodos()
  }
  return todo
}

export { getTodos, createTodo, removeTodo, toggleTodo }

