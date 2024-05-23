
import {createSlice, nanoid } from '@reduxjs/toolkit';

//initial state of todos
const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}


//slice takes name, initialState and reducers
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //here we define action methods
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})
//here we are exporting action methods
export const {addTodo, removeTodo} = todoSlice.actions

//here we are exporting reducer
export default todoSlice.reducer
