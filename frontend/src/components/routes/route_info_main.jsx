import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const mstp = (state, ownProps) => {
    const routeId = parseInt(ownProps.match.params.id)
    const singleRoute = state.entities.routes[routeId]
    return {
        singleRoute: singleRoute
    }
}

const RouteMainInfo = props => {

    const directions = props.singleRoute.directions.map((step, i) => {
        return <div key={i} dangerouslySetInnerHTML={{__html: step}}></div>
    })

    return (
        <div className="routes-main-api-info">
            <h1>Routes Main API info</h1>
            <h2>Directions</h2>
            {directions}
        </div>
    )
}

export default withRouter(connect(mstp, null)(RouteMainInfo));