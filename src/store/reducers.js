import { combineReducers } from "redux";
import backgroundReducer from "./backgroundReducer"

let reducers = combineReducers({
    background: backgroundReducer
})


export default reducers;