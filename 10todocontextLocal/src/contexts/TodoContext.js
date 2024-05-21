import {createContext, useContext} from "react"

export const TodoContext = createContext({
    //data format
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    //methods
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}
//provider
export const TodoProvider = TodoContext.Provider
