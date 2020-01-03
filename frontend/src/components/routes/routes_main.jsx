import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import RoutesIndex from "./routes_index";
import RoutesMap from "./routes_map";

import MapDefault from "./map_default";

class RoutesMain extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("routes main rendered")
    }

    render() {
        const {routes} = this.props;
        const routeId = parseInt(this.props.location.pathname.slice(-1))
        const singleRoute = routes.find( route => (
            route.id === routeId
        ))

        return (
            <div className="routes-main-container">
                <h1>Routes page</h1>
                <div className="routes-main-top">
                    <Switch>
                        <Route exact path={this.props.match.path} component={MapDefault}/>
                        <Route path={`${this.props.match.path}/:id`} component={RoutesMap}/>
                        {/* <Route path={`${this.props.match.path}/:id`} 
                            render={(props) => (<RoutesMap {...props} singleRoute={singleRoute}/>)}
                        /> */}
                    </Switch>

                    <RoutesIndex routes={routes}/>
                </div>

            </div>
        )
    }
}

export default withRouter(RoutesMain);