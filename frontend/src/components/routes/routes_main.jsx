import React from "react";
import {connect} from "react-redux";
import {Route, Switch, withRouter} from "react-router-dom";
import RoutesIndex from "./routes_index";
import RoutesMap from "./routes_map";
import {openModal} from "../../actions/modal_actions";
import {deleteRoute} from "../../actions/route_actions";

import MapDefault from "./map_default";
import RouteMainInfo from "./route_info_main";

const mstp = state => ({
    routes: Object.values(state.entities.routes)
})

const mdtp = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    deleteRoute: (routeId) => dispatch(deleteRoute(routeId))
})

const NoDirections = () => {
    return (
        <h1>Create a route for Directions</h1>
    )
}

const RoutesMain = props => {
    const {routes, openModal, deleteRoute} = props;
    return (
        <div className="routes-main-container">
            <h1 className="routes-main-header">Routes</h1>
            <div className="routes-main-top">
                <Switch>
                    <Route exact path={props.match.path} component={MapDefault} />
                    <Route path={`${props.match.path}/:id`} component={RoutesMap} />
                </Switch>

                <Route
                    path={`${props.match.path}/:id`}
                    component={() => <RoutesIndex routes={routes} openModal={openModal} deleteRoute={deleteRoute}/>}
                />
            </div>
            <div className="routes-main-api-info-container">
                <Switch>
                    <Route exact path={props.match.path} component={NoDirections} />
                    <Route path={`${props.match.path}/:id`} component={RouteMainInfo}/>
                </Switch>
                {/* <RouteMainInfo /> */}
            </div>
        </div>
    )
}

export default withRouter(connect(mstp, mdtp)(RoutesMain));