import thunk from "redux-thunk"
import {createStore, applyMiddleware, combineReducers} from "redux"
import PostsReducer from "./Reducers/PostsReducer";


let reducers = combineReducers({ PostsReducer });


const reduxStore = createStore(reducers, applyMiddleware(thunk))

export default reduxStore