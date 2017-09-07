import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import makeRootReducer from "./reducers";
import {createLogger} from "redux-logger";

const log = createLogger({ diff: true, collapsed: true});

export default (initialState = {}) => {
    //Middleware configuration
    const middleware = [thunk, log];//thunk returns action creators an action instead of function

    //Store enhancer
    const enhancers = [];

    //Store instantiation
    //compose used to parse in multiple enhancers inside the store... ApplyMiddleWare is the enhancer
    const store = createStore(
        makeRootReducer(),
        initialState,
        collapse(
            applyMiddleware(...middleware, ...enhancers)
        )
    );

    return store;
}
