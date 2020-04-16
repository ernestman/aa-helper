import React, { useEffect } from "react";
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

    componentDidMount() {
        this.renderMap()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.renderMap()
        }
    }

    renderMap() {
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();
        const center = {
            lat: (this.props.singleRoute.start_lat + this.props.singleRoute.end_lat) / 2,
            lng: (this.props.singleRoute.start_lon + this.props.singleRoute.end_lon) / 2
        }
        const mapOptions = {
            center: center,
            zoom: 10
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions)

        const request = {
            origin: { lat: this.props.singleRoute.start_lat, lng: this.props.singleRoute.start_lon },
            destination: { lat: this.props.singleRoute.end_lat, lng: this.props.singleRoute.end_lon },
            travelMode: this.props.singleRoute.travel_mode
        } 
        directionsService.route(request, (result, status) => {
            if (status === "OK") {
                directionsRenderer.setDirections(result)
            }
        })
        directionsRenderer.setMap(this.map)
    }

    render() {
        return (
            <div className="routes-map-container" ref={map => this.mapNode = map}></div>
        )
    }
}

export default withRouter(connect(mstp, null)(RoutesMap));