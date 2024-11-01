import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    userData: {
        id: nanoid,
        name: "Niraj Jha",
        email: "flamingocool2@gmail.com",

    },
    todosData: {
        totalTasks: 0,
        completed: 0,
        pending: 0
    },
    todos: [
        {
            id: nanoid,
            title: "GYM",
            description: "Go to gym at 7 PM",
            status: "pending"
        }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // This is the reducers for the todos:
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid,
                title: action.payload.title,
                description: action.payload.description,
                status: "pending"
            }

            state.todos.push(newTodo);
        },
        updateTodo: (state, action) => {
            const todoToUpdate = state.todos.find((todo) => todo.id === action.payload.id);
            if(todoToUpdate) {
                todoToUpdate.title = action.payload.title;
                todoToUpdate.description = action.payload.description;
                todoToUpdate.status = action.payload.status;
            }
        }, 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id === action.payload.id);
        },

        // This is the reducer for the overview count of data:
        // After some time, I realized that I don't need the reducers for these because
        // I can just fetch this from the database.
    }
})

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;