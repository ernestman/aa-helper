import * as RouteUtil from "../util/route_api_util";

export const GET_ROUTE = "GET_ROUTE";
export const CLEAR_ROUTES = "CLEAR_ROUTES";

export const getRoute = route => ({
    type: GET_ROUTE,
    route: route
})

export const clearRoutes = () => ({
    type: CLEAR_ROUTES
})


// ================= thunk action creators ====================

export const createRoute = route => dispatch => (
    RouteUtil.createRoute(route)
        .then(
            route => dispatch(getRoute(route))
        )
)