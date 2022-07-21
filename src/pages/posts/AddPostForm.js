import React, { useState } from 'react'
import {useDispatch , connect } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from '../../redux/post/postSlider'
import { createPost } from '../../redux/post/postActions'


const AddPostForm = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            // dispatch(
            //     postAdded({
            //         id: nanoid(),
            //         title,
            //         content
            //     })
            // )

            const post = {
                title: title,
                body: content
            };

            props.createPost(post);

            setTitle('')
            setContent('')
        }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="postTitle">Post Title:</label>
                    <input className="form-control"
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged}
                           placeholder="Enter title"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="postContent">Content:</label>
                    <textarea className="form-control"
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged}
                              placeholder="Enter content"
                    />
                </div>
                <br />
                <div className="form-group">
                    <button className="btn btn-primary" type="button" onClick={onSavePostClicked}>Save Post</button>
                </div>
            </form>
        </section>
    )
}
export default connect(null, { createPost })(AddPostForm);
