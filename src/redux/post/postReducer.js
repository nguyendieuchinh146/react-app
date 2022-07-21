import { FETCH_POSTS, NEW_POST } from './types';

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
            let newPost = [...state.posts];
            newPost.unshift(action.payload);
            console.log(newPost);
            return {
                ...state,
                posts: newPost,
                post: action.payload
            };
        default:
            return state;
    }
}
