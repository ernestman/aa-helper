import React from "react";
import {connect} from "react-redux";
import {Route, Switch, withRouter} from "react-router-dom";
import RoutesIndex from "./routes_index";
import RoutesMap from "./routes_map";

import MapDefault from "./map_default";

const mstp = (state) => {
    return {
        routes: Object.values(state.entities.routes)
    }
}

const RoutesMain = props => {
    const {routes} = props;
    return (
        <div className="routes-main-container">
            <h1>Routes page</h1>
            <div className="routes-main-top">
                <Switch>
                    <Route exact path={props.match.path} component={MapDefault} />
                    <Route path={`${props.match.path}/:id`} component={RoutesMap} />
                </Switch>

                <RoutesIndex routes={routes} />
            </div>

        </div>
    )
}

export default withRouter(connect(mstp, null)(RoutesMain));