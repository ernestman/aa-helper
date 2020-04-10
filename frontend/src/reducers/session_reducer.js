import {SESSION_CREATED, SESSION_DELETED} from "../actions/session_actions";
import {googleDirectionsAPI} from "../util/api_util";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
}

const sessionReducer = (state=initialState, action) => {
    // Object.freeze(state);
    let nextState = Object.assign({}, state);

    const localStorageCb = (routes) => {
        localStorage.setItem("routes", JSON.stringify(routes))
    }

    switch(action.type) {
        case SESSION_CREATED:
            localStorage.setItem("token", action.payload.data.token);
            localStorage.setItem("user", JSON.stringify(action.payload.data.user));

            // let routesArr = []
            // action.payload.data.routes.forEach( route => {
            //     setTimeout(googleDirectionsAPI, 1000, route, )
            // })

            // googleDirectionsAPI(action.payload.data.routes, localStorageCb)

            // localStorage.setItem("routes", JSON.stringify(routesArr));
            localStorage.setItem("routes", JSON.stringify(action.payload.data.routes));
            
            nextState["token"] = localStorage.getItem("token");
            nextState["isAuthenticated"] = true;
            return nextState;
        case SESSION_DELETED:
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("routes");

            nextState["token"] = localStorage.getItem("token");
            nextState["isAuthenticated"] = false;
            return nextState;
        default:
            return state;
    }
}

export default sessionReducer;