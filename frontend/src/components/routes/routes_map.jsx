import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const mstp = (state, ownProps) => {
    const routeId = parseInt(ownProps.match.params.id)
    const singleRoute = state.entities.routes[routeId]
    // debugger
    return {
        singleRoute: singleRoute
    }
}

// const RoutesMap = props => {
//     return (

//     )
// }

class RoutesMap extends React.Component {
    constructor(props) {
        super(props)
    }

    initMap() {
        // const directionsService = new google.maps.DirectionsService();
        // const directionsRenderer = new google.maps.DirectionsRenderer();
        debugger
        const center = {
            lat: (this.props.singleRoute.start_lat + this.props.singleRoute.end_lat) / 2,
            lng: (this.props.singleRoute.start_lon + this.props.singleRoute.end_lon) / 2
        }

        // const center = new google.maps.LatLng((this.props.singleRoute.start_lat + this.props.singleRoute.end_lat) / 2)

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
        // console.log("map rendered")
    //     debugger
    //     // const centerLat = this.props.route.start_lat + this.props.route.end_lat / 2
    //     // const centerLon = this.props.route.start_lon + this.props.route.end_lon / 2

    //     // const center = {
    //     //     lat: centerLat,
    //     //     lng: centerLon
    //     // }

    //     const mapOptions = {
    //         center: { lat: this.props.singleRoute.start_lat, lng: this.props.singleRoute.start_lon },
    //         zoom: 15,
    //         // mapTypeId: "terrain"
    //     }

    //     // const mapOptions = {
    //     //     center: {
    //     //         lat: this.props.singleRoute.start_lat,
    //     //         lng: this.props.singleRoute.start_lon
    //     //     },
    //     //     zoom: 15
    //     // }

    //     this.map = new google.maps.Map(this.mapNode, mapOptions)
        
    // }

    render() {
        if (!this.props.singleRoute) {
            // debugger

            // return null;
            return (
                 <div id="routes-map" ref={map => this.mapNode = map}></div>
            )
        }

        this.initMap()
        
        // this.initMap()
        return (
            <div className="routes-map-container" ref={map => this.mapNode = map}></div>
        )

        // else if (this.props.singleRoute) {
        //     return <div id="routes-map" ref={map => this.mapNode = map}></div>
        // }

        // if (this.props.singleRoute) {
        //     return <div id="routes-map" ref={map => this.mapNode = map}></div>
        // }
        // debugger
        // if (!this.props.singleRoute) {
            // debugger
            // this.initMap()
        // }

        
        // const initMap = () => {
        //     const directionsService = new google.maps.DirectionsService();
        //     const directionsRenderer = new google.maps.DirectionsRenderer();
            
        // }

    }
}

export default withRouter(connect(mstp, null)(RoutesMap));
// export default RoutesMap;