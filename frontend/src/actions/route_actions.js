import * as RouteUtil from "../util/route_api_util";

export const GET_ROUTE = "GET_ROUTE";
export const REMOVE_ROUTE = "REMOVE_ROUTE";
export const CLEAR_ROUTES = "CLEAR_ROUTES";

export const ROUTE_ERRORS = "ROUTE_ERRORS";
export const CLEAR_ROUTE_ERRORS = "CLEAR_ROUTE_ERRORS";

export const getRoute = route => ({
    type: GET_ROUTE,
    route: route
})

export const clearRoutes = () => ({
    type: CLEAR_ROUTES
})

export const removeRoute = routeId => ({
    type: REMOVE_ROUTE,
    routeId: routeId
})

export const routeErrors = errors => ({
    type: ROUTE_ERRORS,
    errors: errors
})

export const clearRouteErrors = () => ({
    type: CLEAR_ROUTE_ERRORS
})



// ================= thunk action creators ====================

export const createRoute = route => dispatch => (
    RouteUtil.createRoute(route)
        .then(
            route => dispatch(getRoute(route))
        )
)

export const deleteRoute = routeId => dispatch => (
    RouteUtil.deleteRoute(routeId)
        .then(
            res => dispatch(removeRoute(routeId))
        )
)