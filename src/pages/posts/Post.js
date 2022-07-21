import {AddPostForm, PostsList} from './'
const Post = () => {
    return (
        <div>
            <h4>Post</h4>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <AddPostForm />
                    </div>
                    <div className="col-md-6">
                        <PostsList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
