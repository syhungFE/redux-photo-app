import { configureStore } from "@reduxjs/toolkit";
import photoReducer from 'features/Photo/PhotoSlice';
import todoReducer from 'features/Todo/ToDoSlice';

const rootReducer = {
    photos : photoReducer,
    todos: todoReducer
}
const store = configureStore({
    reducer : rootReducer
});

export default store;