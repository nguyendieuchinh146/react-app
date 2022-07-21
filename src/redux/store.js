// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './counter/counterSlice';
// import postReducer from './post/postSlider';
//
// export default configureStore({
//     reducer: {
//         counter: counterReducer,
//         postStore: postReducer
//     }
// })


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
