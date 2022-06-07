import { useDispatch } from 'react-redux'
import { removeTask, handleTask } from '../../../store/TodoSlice';
import { Todo } from './Todo'

export const TodoContainer = ({ todo }) => {
  const dispatch = useDispatch();
 
  const remove = () => dispatch(removeTask(todo.id))
  const handle = () => dispatch(handleTask(todo.id))

  return <Todo todo={todo} remove={remove} handle={handle}/>
}