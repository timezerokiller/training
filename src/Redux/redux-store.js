import thunk from "redux-thunk"
import {createStore, applyMiddleware, combineReducers} from "redux"
import PostsReducer from "./Reducers/PostsReducer";
import TodoReducer from "./Reducers/TodoReducer";
import AuthReducer from "./Reducers/AuthReducer"

;
let reducers = combineReducers({ PostsReducer, TodoReducer, AuthReducer});


const reduxStore = createStore(reducers, applyMiddleware(thunk))

export default reduxStore