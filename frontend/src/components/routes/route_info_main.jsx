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

    const test = props.singleRoute.directions[0];
    const testdiv = document.createElement('DIV');
    testdiv.innerHTML = test;
    console.log(testdiv);

    const directions = props.singleRoute.directions.map((dir, i) => (
        <li key={i}>{dir}</li>
    ))

    return (
        <div className="routes-main-api-info">
            <h1>Routes Main API info</h1>
            <h2>Directions</h2>
            {directions}
        </div>
    )
}

export default withRouter(connect(mstp, null)(RouteMainInfo));