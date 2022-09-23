import { combineReducers } from "redux";
import counterReducer from "./Count";
import loggedReducer from "./Logged";


const allReducers=combineReducers({
    counter:counterReducer,
    logged:loggedReducer,
})
export default allReducers;