import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import RoutesIndex from "./routes_index";
import RoutesMap from "./routes_map";

import Test from "../test";

class RoutesMain extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {routes} = this.props;
        return (
            <div className="routes-main-container">
                <h1>Routes page</h1>
                <div className="routes-main-top">
                    <Switch>
                        <Route exact path={this.props.match.path} component={Test}/>
                        <Route path={`${this.props.match.path}/:id`} component={RoutesMap}/>
                    </Switch>

                    <RoutesIndex routes={routes}/>
                </div>

            </div>
        )
    }
}

export default withRouter(RoutesMain);