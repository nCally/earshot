import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import createBook from "./createBook";

export default combineReducers({
    routing:routerReducer,
    createBook
})