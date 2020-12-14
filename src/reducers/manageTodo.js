export default function manageTodo(state = {
  todos: [],
}, action) {

  switch (action.type) {
    case 'ADD_TODO':
      const newTodos = state.todos.concat(action.payload.text)
      console.log({ todos: newTodos });
      return { todos: newTodos}

    default: 
      return state
  }

}
