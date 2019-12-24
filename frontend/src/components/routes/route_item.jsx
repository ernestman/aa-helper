import React from "react";
import {Link, withRouter} from "react-router-dom";
import {reverseGeocode} from "../../util/google_api_util";

class RouteItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startCity: "",
            endCity: ""
        }

        this.routeHandler = this.routeHandler.bind(this);
        this.handleGeocode = this.handleGeocode.bind(this);
    }

    componentDidMount() {
        const {start_lat, start_lon, end_lat, end_lon} = this.props.route;
        // start city
        reverseGeocode(start_lat, start_lon)
            .then(
                res => this.handleGeocode(res, "startCity")
            )
        // end city   
        reverseGeocode(end_lat, end_lon)
            .then(
                res => this.handleGeocode(res, "endCity")
            )
        
    }

    handleGeocode(res, cityState) {
        let formatted = res.filter( item => (
            item.address_components.length === 4
        ))[0].formatted_address.slice(0, -5)

        this.setState({[cityState]: formatted})
    }

    
    routeHandler(event) {
        event.preventDefault();
        this.props.history.push(`/routes/${this.props.route.id}`)
    }

    render() {
        const {route} = this.props;

        return (
            <div className="route-item" onClick={this.routeHandler}>
                <div className="route-name">
                    <i className="fas fa-route fa-sm"></i>
                    <h3>{route.name}</h3>
                </div>
                <div className="route-city">
                    <div className="route-loc">
                        <p>{this.state.startCity}</p>
                    </div>
                    {/* <i className="fas fa-ellipsis-h"></i> */}
                    <i className="fas fa-long-arrow-alt-right"></i>
                    <div className="route-loc">
                        <p>{this.state.endCity}</p>
                    </div>
                </div>
                <div className="route-info">
                    <div className="route-method">
                        <p>Method</p>
                    </div>
                    <div className="route-time">
                        <p>Time</p>
                    </div>
                    <div className="route-distance">
                        <p>Distance</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(RouteItem);