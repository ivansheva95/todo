import styles from './TodoForm.module.css'

export const TodoForm = ({ handleSubmit, handleChange, keyDownEnter, userInput }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} value={userInput} onChange={handleChange}/>
      <button className={styles.button} onClick={keyDownEnter}>Add Task</button>
    </form>
  )
}