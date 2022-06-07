import { TodoContainer } from './todo'

export const TodoList = ({ todos }) => {
  return (
    <>
      {todos.map(todo => {
        return <TodoContainer key={todo.id} todo={todo} />
      })}
    </>
  )
}