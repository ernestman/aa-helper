import React from "react";
import {connect} from "react-redux"

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const mstp = state => ({
    office: state.entities.user.sf_office
})

const FoodMap = props => {
    // debugger
    const center = {
        lat: props.office === true ? 37.7989708 : 40.7512857,
        lng: props.office === true ? -122.4035405 : -73.9861788,
    }

    const mapStyles = {
        width: "600px",
        height: "400px"
    }

    return (
        <Map
            google={props.google}
            zoom={12}
            style={mapStyles}
            initialCenter={center}
        >
        </Map>
    )
}

export default connect(mstp, null)(GoogleApiWrapper({
    apiKey: "AIzaSyAI3KS5AyUFYiAgV6Zzpj52R4OKX7z8Lkc"
})(FoodMap))