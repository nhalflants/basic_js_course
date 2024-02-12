const todos = [{
  title: 'Feed cat',
  completed: true
},{
  title: 'Wrap gift',
  completed: true
},{
  title: 'Do laundry',
  completed: false
}]
console.log(`You have ${todos.length} todos`)

todos.forEach(function (todo, index) {
  const num = index + 1
  console.log(`${num}. ${todo.title}`)
})

const deleteTodo = function (todos, todoToRemove) {
  const index = todos.findIndex(function (todo) {
    return todo.title.toLowerCase() === todoToRemove.toLowerCase()
  })
  if(index > -1) {
    todos.splice(index, 1)
  }
}

const getToDos = function (todos) {
  return todos.filter(function (todo, index) {
    return todo.completed === false
  })
}

const sortToDos = function (todos) {
  todos.sort(function (a, b) {
    if(!a.completed && b.completed) {
      return -1
    } else if (!b.completed && a.completed) {
      return 1
    } else {
      0
    }
  })
}

//deleteTodo(todos, "feedcat")
//console.log(getToDos(todos))
sortToDos(todos)
console.log(todos)

