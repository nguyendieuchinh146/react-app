import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
const initialState = {
    posts: [
        // { id: '1', title: 'First Post!', content: 'Hello!' },
        // { id: '2', title: 'Second Post', content: 'More text' }
    ]
}

const postsSlice = createSlice({
    name: 'postStore',
    initialState,
    reducers: {
        getPosts(state, action){
            state.posts = action.payload
        },
        postAdded(state, action) {
            state.posts.push(action.payload)
        },
        postRemoved(state, action) {
            state.posts.splice(state.posts.findIndex(post => post.id === action.payload) , 1)
        }
    }
})
export const { postAdded, postRemoved, getPosts } = postsSlice.actions
export const selectAllPosts = state => state.postStore.posts
export default postsSlice.reducer
