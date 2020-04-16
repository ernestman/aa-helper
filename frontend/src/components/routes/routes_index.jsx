import React from "react";
import RouteItem from "./route_item";
import PlusIcon from "../../../images/plus_icon.svg";

import {withRouter} from "react-router-dom";

const RoutesIndex = props => {

    const routeFormModal = event => {
        event.preventDefault();
        props.openModal("routeForm")
    }

    const currentRoute = parseInt(props.match.params.id)

    const myRoutes = props.routes.map( (route, i) => (
            <RouteItem
                key={i}
                route={route}
                deleteRoute={props.deleteRoute}
                currentRoute={currentRoute}
            />
    ))

    return (
        <div className="routes-index-container">
            <div className="routes-index-top">
                <h2 className="routes-index-header">My Routes</h2>
                <div className="new-route-btn">
                    <img id="plus-icon" src={PlusIcon} onClick={routeFormModal}/>
                    <p id="plus-icon-txt">New Route</p>
                </div>
            </div>
            <div className="routes-index">
                {myRoutes}
            </div>
        </div>
    )
}

export default withRouter(RoutesIndex);