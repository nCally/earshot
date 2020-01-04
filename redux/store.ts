
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

let initailStore = undefined;
const store = createStore(
    reducers,
    initailStore,
    applyMiddleware(thunk)
)
export default store;