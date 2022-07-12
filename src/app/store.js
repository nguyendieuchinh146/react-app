import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import postReducer from '../features/post/postSlider';

export default configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer
    }
})