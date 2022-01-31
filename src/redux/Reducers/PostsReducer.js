import {PostsAPI} from "../../API/PostsAPI";

const ADD_POSTS = "ADD_POSTS";
const DELETE_POST = "DELETE_POST";
const GET_POST = "GET_POST";
const UPD_POST = "UPD_POST";


let State = {
    posts: null,
    post: null
}


const PostsReducer = (state = State, action) => {
    switch (action.type) {
        case ADD_POSTS: {
            return {
                ...state,
                posts: action.posts
            }
        }
        case DELETE_POST: {
            let id = action.id
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== id)
            }
        }
        case GET_POST: {
            let id
            if (action.id === 0) {
                id = action.id
            } else {
                id = action.id - 1
            }
            return {
                ...state,
                post: state.posts[id]
            }
        }
        case UPD_POST: {
            if (action.post.title) {
                return {
                    ...state,
                    post: {
                        ...state.post,
                        title: action.post.title
                    }
                }
            } else {
                return {
                    ...state,
                    post: {
                        ...state.post,
                        body: action.post.body
                    }
                }
            }
        }
        default: {
            return state
        }
    }
}

export const addPosts = (posts) => ({
    type: ADD_POSTS,
    posts
})
export const deletePost = (id) => ({
    type: DELETE_POST,
    id
})
export const getPost = (id) => ({
    type: GET_POST,
    id
})
export const UpdPost = (post) => ({
    type: UPD_POST,
    post
})

export const setPosts = () => (dispatch) => {
    PostsAPI.getPosts().then(res => {
        dispatch(addPosts(res.data))
    })
}

export default PostsReducer