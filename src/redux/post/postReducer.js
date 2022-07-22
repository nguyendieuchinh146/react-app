import { FETCH_POSTS, NEW_POST, DELETE_POST } from './types';

const initialState = {
    posts: [],
    post: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case NEW_POST:
            let newPosts = [...state.posts];
            newPosts.unshift(action.payload);
            return {
                ...state,
                posts: newPosts,
                post: action.payload
            };
        case DELETE_POST:
            let posts = [...state.posts];
            posts.splice(posts.findIndex(post => post.id === action.payload) , 1)
            return {
                ...state,
                posts: posts,
            };
        default:
            return state;
    }
}
