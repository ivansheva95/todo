import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../store/TodoSlice'
import { TodoForm } from './TodoForm'

export const TodoFormContainer = () => {
  const [userInput, setUserInput] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(userInput.trim().length) {
      dispatch(addTask({userInput}))
      setUserInput('')
    }
  }

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  const keyDownEnter = (e) => {
    if(e.key === 'enter') {
      handleChange(e)
    }
  }

  return (
    <TodoForm handleSubmit={handleSubmit} handleChange={handleChange} keyDownEnter={keyDownEnter} userInput={userInput}/>
  )
}