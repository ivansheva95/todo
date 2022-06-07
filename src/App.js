// import { useState } from 'react'
import { useSelector } from 'react-redux'
import './App.css'

import { TodoFormContainer } from './components/todo-form'
import { TodoListContainer } from './components/todo-list'

export const App = () => {
  const todos = useSelector(state => state.todos.todos)
  // const [ todos, setTodos ] = useState([])

  // const addTask = (userInput) => {
  //   if(userInput.trim().length) {
  //     setTodos([...todos, {
  //       id: Math.random().toString(10).substring(2,9),
  //       task: userInput,
  //       completed: false
  //     }])
  //   }
  // }

  // const removeTask = (id) => {
  //   setTodos([ ...todos.filter(todo => todo.id !== id) ])
  // } 

  // const handleTask = (id) => {
  //   setTodos([ ...todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo) ])
  // }

  return (
    <div className="App">
      <div className='todos'>
        <h1 className='title'>Todos: {todos.length}</h1>

        <TodoFormContainer/>

        <TodoListContainer />
      </div>
    </div>
  )
}
