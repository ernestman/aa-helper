import {combineReducers} from "redux";
import userReducer from "./user_reducer";
import routesReducer from "./routes_reducer";
import businessReducer from "./business_reducer";

const entitiesReducer = combineReducers({
    user: userReducer,
    routes: routesReducer,
    businesses: businessReducer
})

export default entitiesReducer;

