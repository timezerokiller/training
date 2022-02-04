import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"
import PostsContainer from "../Components/Containers/PostsContainer"
import PostContainer from "../Components/Containers/PostContainer"
import Home from "../Components/Public/Home"
import TodoContainer from "../Components/Containers/TodoContainer"
import LoginContainer from "../Components/Containers/LoginContainer"

const MyRoutes = (props) => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts" element={<PostsContainer/>}/>
                <Route path="/posts/:id" element={<PostContainer/>}/>
                <Route path="/todo" element={<TodoContainer/>}/>
                <Route path="/login" element={<LoginContainer/>}/>
                <Route path="/logout" element={<Navigate replace to='/'/>}/>
            </Routes>
        </div>
    );
};

export default MyRoutes

