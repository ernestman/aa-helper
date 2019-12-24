import {combineReducers} from "redux";
import userReducer from "./user_reducer";
import routesReducer from "./routes_reducer";

const entitiesReducer = combineReducers({
    user: userReducer,
    routes: routesReducer
})

export default entitiesReducer;

