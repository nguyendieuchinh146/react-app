import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { postRemoved } from './postSlider';
import postStyle from './post.module.sass';

const PostsList = () => {
    const posts = useSelector(state => state.posts)

    const dispatch = useDispatch()

    const removeItem = (id) => {
        dispatch(postRemoved(id));
    }
    const renderedPosts = posts.map(post => (
        <article className={postStyle['post-excerpt']} key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <button onClick={() => removeItem(post.id)}>Remove</button>
        </article>
    ))

    return (
        <section className="posts-list">
            <h2 className={postStyle['h2']}>Posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostsList;
