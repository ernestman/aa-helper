import {GET_ROUTE, CLEAR_ROUTES, REMOVE_ROUTE} from "../actions/route_actions";
import {SESSION_CREATED} from "../actions/session_actions";

import {googleDirectionsAPI} from "../util/api_util";

const routesReducer = (state={}, action) => {
    // Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case SESSION_CREATED:
            let routes1 = action.payload.data.routes

            // if (routes1) {
            //     routes1.forEach(route => {
            //         nextState[route.id] = route
            //     })
            //     return nextState;
            // } else {
            //     return state;
            // }

            if (routes1) {
                routes1.forEach(route => {
                    setTimeout(googleDirectionsAPI, 280, route, nextState)
                })

                return nextState;
            } else {
                return state;
            }



        case GET_ROUTE:
            nextState[action.route.data.id] = action.route.data
            localStorage.setItem("routes", JSON.stringify(Object.values(nextState)));
            return nextState;
        case REMOVE_ROUTE:
            delete nextState[action.routeId]
            localStorage.setItem("routes", JSON.stringify(Object.values(nextState)));
            return nextState
        case CLEAR_ROUTES:
            return {}
        default:
            return state;
    }
}

// const googleDirectionsAPI = (route, nextState) => {
//     const directionsService = new google.maps.DirectionsService();
//     const routeRequest = {
//         origin: {lat: route.start_lat, lng: route.start_lon},
//         destination: {lat: route.end_lat, lng: route.end_lon},
//         travelMode: route.travel_mode
//     }

//     directionsService.route(routeRequest, (res, status) => {
//         if (status === "OK") {
//             const directions = res.routes[0].legs[0];

//             let routeObj = Object.assign({}, route)
//             routeObj["start_address"] = directions.start_address
//             routeObj["end_address"] = directions.end_address
//             routeObj["time"] = directions.duration.text
//             routeObj["distance"] = directions.distance.text
//             routeObj["directions"] = directions.steps.map( step => step.instructions)

//             nextState[route.id] = routeObj
//             // console.log(nextState)
//             // console.log(routeObj)
//         }
//     })
// }

export default routesReducer;