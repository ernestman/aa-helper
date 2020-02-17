import React from "react";
import {connect} from "react-redux";
import {Route, Switch, withRouter} from "react-router-dom";
import RoutesIndex from "./routes_index";
import RoutesMap from "./routes_map";
import {openModal} from "../../actions/modal_actions";
import {deleteRoute} from "../../actions/route_actions";

import MapDefault from "./map_default";

const mstp = state => ({
    routes: Object.values(state.entities.routes)
})

const mdtp = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    deleteRoute: (routeId) => dispatch(deleteRoute(routeId))
})

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

                <RoutesIndex routes={routes} openModal={openModal} deleteRoute={deleteRoute}/>
            </div>

        </div>
    )
}

export default withRouter(connect(mstp, mdtp)(RoutesMain));