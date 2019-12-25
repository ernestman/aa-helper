import React from "react";
import RouteItem from "./route_item";

const RoutesIndex = props => {

    const myRoutes = props.routes.map( (route, i) => (
            <RouteItem
                key={i}
                num={i + 1}
                route={route}
            />
    ))

    return (
        <div className="routes-index-container">
            <h2 className="routes-index-header">My Routes</h2>
            <div>
                {myRoutes}
            </div>
        </div>
    )
}

export default RoutesIndex;