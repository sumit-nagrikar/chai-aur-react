import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

///import and createstore from configureStore and passed the reducer creted in th the todoSlice
export const store = configureStore({
    reducer: todoReducer
})
