import styles from './Todo.module.css'

export const Todo = ({ todo, remove, handle }) => {
  return (
    <div className={styles.todo}>
      <div className={styles.task} onClick={handle}>
        <div className={todo.completed ? styles.text + ' ' + styles.completed : styles.text}>{todo.task}</div>
      </div>

      <div className={styles.delete} onClick={remove}>&times;</div>
    </div>
  )
}

