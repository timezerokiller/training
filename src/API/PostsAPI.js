import axios from "axios"

export const PostsAPI =  {
    getPosts() {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    }
}

