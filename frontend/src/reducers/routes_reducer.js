import {GET_ROUTE, CLEAR_ROUTES} from "../actions/route_actions";
import {SESSION_CREATED} from "../actions/session_actions";

const routesReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case SESSION_CREATED:
            let routes1 = action.payload.data.routes
            if (routes1) {
                routes1.forEach(route => {
                    nextState[route.id] = route
                })
                return nextState;
            } else {
                return state;
            }
        case GET_ROUTE:
            nextState[action.route.data.id] = action.route.data
            return nextState;
        case CLEAR_ROUTES:
            return {}
        default:
            return state;
    }
}

export default routesReducer;