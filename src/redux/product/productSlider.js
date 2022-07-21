import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    'products': [],
}

const postsSlice = createSlice({
    name: 'productStore',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        },
        postRemoved(state, action) {
            state.splice(state.findIndex(post => post.id === action.payload) , 1)
        }
    }
})
export const { postAdded, postRemoved } = postsSlice.actions
export default postsSlice.reducer
