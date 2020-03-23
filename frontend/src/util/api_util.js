import axios from "axios";

export const getYelp = () => {
    return axios.get("/yelp")
}

export const googleDirectionsAPI = (route, storeRoutes) => {
    const directionsService = new google.maps.DirectionsService();
    const routeRequest = {
        origin: { lat: route.start_lat, lng: route.start_lon },
        destination: { lat: route.end_lat, lng: route.end_lon },
        travelMode: route.travel_mode
    }

    directionsService.route(routeRequest, (res, status) => {
        if (status === "OK") {
            const directions = res.routes[0].legs[0];

            let routeObj = Object.assign({}, route)
            routeObj["start_address"] = directions.start_address
            routeObj["end_address"] = directions.end_address
            routeObj["time"] = directions.duration.text
            routeObj["distance"] = directions.distance.text
            routeObj["directions"] = directions.steps.map(step => step.instructions)

            if (Array.isArray(storeRoutes)) {
                storeRoutes.push(routeObj)
            } else {
                storeRoutes[route.id] = routeObj
            }
        }
    })
}