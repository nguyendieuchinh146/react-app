import { createSlice } from '@reduxjs/toolkit'
const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        },
        postRemoved(state, action) {
            state = state.filter(post => post.id !== action.payload)
        }
    }
})
export const { postAdded, postRemoved } = postsSlice.actions
export default postsSlice.reducer