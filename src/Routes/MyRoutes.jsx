import React from "react"
import {Routes, Route} from "react-router-dom"
import PostsContainer from "../Components/Containers/PostsContainer"
import PostContainer from "../Components/Containers/PostContainer"
import Home from "../Components/Public/Home"
import TodoContainer from "../Components/Containers/TodoContainer"

const MyRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts" element={<PostsContainer/>}/>
                <Route path="/posts/:id" element={<PostContainer/>}/>
                <Route path="/todo" element={<TodoContainer/>}/>
            </Routes>
        </div>
    );
};

export default MyRoutes