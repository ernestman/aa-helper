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

class RoutesMap extends React.Component {
    constructor(props) {
        super(props)
    }

    initMap() {
        // const directionsService = new google.maps.DirectionsService();
        // const directionsRenderer = new google.maps.DirectionsRenderer();
        const center = {
            lat: (this.props.singleRoute.start_lat + this.props.singleRoute.end_lat) / 2,
            lng: (this.props.singleRoute.start_lon + this.props.singleRoute.end_lon) / 2
        }

        const mapOptions = {
            center: center,
            zoom: 10
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions)
    }

    // componentDidMount() {
    //     if (this.props.singleRoute) {
    //         this.initMap()
    //     }
    // }

    render() {
        if (!this.props.singleRoute) {
            // return null;
            return (
                 <div id="routes-map" ref={map => this.mapNode = map}></div>
            )
        } 

        this.initMap()
        
        return (
            <div className="routes-map-container" ref={map => this.mapNode = map}></div>
        )

    }
}

export default withRouter(connect(mstp, null)(RoutesMap));