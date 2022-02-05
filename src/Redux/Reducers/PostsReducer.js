import {PostsAPI} from "../../API/PostsAPI";

const ADD_POSTS = "ADD_POSTS";
const SET_POST = "SET_POST";
const DELETE_POST = "DELETE_POST";
const SLICE_POSTS = "SLICE_POSTS";
const GET_POST = "GET_POST";
//pagination
const SET_PAGE = "SET_PAGE";
const SET_LIMIT = "SET_LIMIT";


let State = {
    posts: null,
    slice: null,
    post: null,
    pagination: {
        page: 0,
        total: null,
        limit: 10,
        pageSIze: null
    }
}


const PostsReducer = (state = State, action) => {
    switch (action.type) {
        case SET_LIMIT: {
            return {
                ...state,
                ...state.posts,
                pagination: {
                    ...state.pagination,
                    limit: action.limit,
                    pageSize: state.pagination.total / action.limit
                },
            }
        }
        case ADD_POSTS: {
            return {
                ...state,
                posts: action.posts.data,
                pagination: {
                    ...state.pagination,
                    total: action.posts.data.length,
                    pageSize: action.posts.data.length / state.pagination.limit
                }
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
                post: state.posts[id],
                pagination: {...state.pagination}
            }
        }
        case SET_POST: {
            for (let i = 0; i < state.posts.length; i++) {
                if (state.posts[i].id === action.post.id) {
                    state.posts[i].title = action.post.title
                    state.posts[i].body = action.post.body
                }
            }
            return {
                ...state,
                ...state.posts,
                ...state.post,
                ...state.pagination
            }
        }
        case SET_PAGE: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: action.page
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

export const setPost = (post) => ({
    type: SET_POST,
    post
})

export const slicePosts = (posts) => ({
    type: SLICE_POSTS,
    posts
})

//pagination////////////////////////
export const setPage = (page) => ({
    type: SET_PAGE,
    page
})
export const setPostsLimit = (limit) => ({
    type:SET_LIMIT,
    limit
})
//////////////////////////////

export const setPosts = () => (dispatch) => {
    PostsAPI.getPosts().then(res => {
        dispatch(addPosts(res))
    })
}

export default PostsReducer