import React from "react";
import {Link, withRouter} from "react-router-dom";
// import {reverseGeocode, getDirections} from "../../util/google_api_util";

class RouteItem extends React.Component {
    constructor(props) {
        super(props)
    }

    
    clickRouteHandler(event) {
        event.preventDefault();
        this.props.history.push(`/routes/${this.props.route.id}`)
    }

    render() {
        const {route} = this.props;

        const method = route => {
            switch(route.travel_mode) {
                case "DRIVING":
                    return <i className="fas fa-car fa-lg"></i>
                case "TRANSIT":
                    return <i className="fas fa-subway fa-lg"></i>
                case "BICYCLING":
                    return <i className="fas fa-biking fa-lg"></i>
                case "WALKING":
                    return <i class="fas fa-walking fa-lg"></i>
                default:
                    return <i className="fas fa-directions fa-lg"></i>
            }
        };

        return (
            <div className="route-item" onClick={this.clickRouteHandler}>
                <div className="route-name">
                    <i className="fas fa-route"></i>
                    <h3>{route.name}</h3>
                </div>
                <div className="route-city">
                    <div className="route-loc">
                        <p>{route.start_city}</p>
                    </div>
                    <i className="fas fa-long-arrow-alt-right"></i>
                    <div className="route-loc">
                        <p>{route.end_city}</p>
                    </div>
                </div>
                <div className="route-info">
                    <div className="route-info-icon">
                        {method(route)}
                    </div>
                    <div className="route-info-section">
                        <p>Time</p>
                        <p className="route-p">{route.time}</p>
                    </div>
                    <div className="route-info-section">
                        <p>Distance</p>
                        <p className="route-p">{route.distance}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(RouteItem);

    // this.state = {
    //     startCity: "",
    //     endCity: "",
    //     distance: "",
    //     time: ""
    // }

    // this.clickRouteHandler = this.clickRouteHandler.bind(this);
    // this.handleGeocode = this.handleGeocode.bind(this);
    // this.handleDirections = this.handleDirections.bind(this);
}

    // componentDidMount() {
    //     const {start_lat, start_lon, end_lat, end_lon, travel_mode} = this.props.route;

        // reverseGeocode(start_lat, start_lon) //start city
        //     .then(
                // res => this.handleGeocode(res, "startCity")
            // )
        // reverseGeocode(end_lat, end_lon) //end city
        //     .then(
        //         res => this.handleGeocode(res, "endCity")
        //     )

        // getDirections(
        //     {lat: start_lat, lng: start_lon}, //origin
        //     {lat: end_lat, lng: end_lon},
        //     travel_mode
        // ).then(
        //     // res => this.handleDirections(res)
        // )
    // }

    // handleGeocode(res, cityState) {
    //     let formatted = res.filter( item => (
    //         item.address_components.length === 4
    //     ))[0].formatted_address.slice(0, -5)

    //     this.setState({[cityState]: formatted})
    // }

    // handleDirections(res) {
    //     let result = res.routes[0].legs[0]

    //     this.setState({"distance": result.distance.text})
    //     this.setState({"time": result.duration.text})
    // }