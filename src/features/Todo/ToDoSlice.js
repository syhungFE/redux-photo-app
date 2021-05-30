import { createSlice } from '@reduxjs/toolkit';

const ToDoSlice = createSlice({
    name: "Todo",
    initialState: [],
    reducer: {
        initTodos : (state,action) => {
            return action.payload;
        },
        addTodo : (state,action) =>{
            state.push(action.payload);
        }
    }
});

const {reducer, actions} = ToDoSlice;
export const {initTodos,addTodo} = actions;
export default reducer;