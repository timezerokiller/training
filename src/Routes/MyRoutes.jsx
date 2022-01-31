import React from "react"
import {Routes, Route} from "react-router-dom"
import PostsContainer from "../components/container/PostsContainer"
import PostContainer from "../components/container/PostContainer"
import Home from "../components/Home"

const MyRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts" element={<PostsContainer/>}/>
                <Route path="/posts/:id" element={<PostContainer/>}/>
            </Routes>
        </div>
    );
};

export default MyRoutes