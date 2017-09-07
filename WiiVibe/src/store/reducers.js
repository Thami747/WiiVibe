import {combineReducers} from "redux";
import {HomeReducer as home } from "../routes/Home/modules/home";

export const  makeRootReducer = () => {
    return combineReducers({home}); //helper function to combine functions together coming from different routes
};

export default makeRootReducer;
