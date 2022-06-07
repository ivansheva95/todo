import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: 'todos',

  initialState: {
    todos: [],
  },

  reducers: {
    addTask(state, action) {
        state.todos.push({
          id: Math.random().toString(10).substring(2, 8),
          task: action.payload.userInput,
          completed: false
        })
    },

    removeTask(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    handleTask(state, action) {
      const toggledTodo = state.todos.find(todo => todo.id === action.payload)
      toggledTodo.completed = !toggledTodo.completed
    }
  }
})

export const { addTask, removeTask, handleTask } = TodoSlice.actions

export default TodoSlice.reducer
