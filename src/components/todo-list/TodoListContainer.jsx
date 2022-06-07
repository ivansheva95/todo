import { useSelector, useDispatch } from 'react-redux'
import { TodoList } from './TodoList'

export const TodoListContainer = () => {
  const todos = useSelector(state => state.todos.todos)

  return <TodoList todos={todos}/>
}