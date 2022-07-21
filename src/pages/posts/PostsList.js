import React, {useEffect} from 'react'
import {useSelector, connect} from 'react-redux'
import postStyle from './post.module.sass';
import {fetchPosts} from "../../redux/post/postActions";

const PostsList = (props) => {
    const posts = props.posts
    useEffect(() => {
        props.fetchPosts();
    }, [])

    const removeItem = (id) => {

    }
    const renderedPosts = posts.map(post => (
        <article className={postStyle['post-excerpt']} key={post.id}>
            <h5>{post.title}</h5>
            <p className="post-content">{post.body.substring(0, 100)}</p>
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

const mapStateToProps = state => ({
    posts: state.postStore.posts,
    newPost: state.postStore.post
});
export default connect(mapStateToProps, { fetchPosts })(PostsList);
