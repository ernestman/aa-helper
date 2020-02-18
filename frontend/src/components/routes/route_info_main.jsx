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

class RouteMainInfo extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {

        return (
            <div className="routes-main-api-info">
                <h1>Routes Main API info</h1>
            </div>
        )
    }
}

export default withRouter(connect(mstp, null)(RouteMainInfo));