import React from "react";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom";

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const mstp = state => ({
    office: state.entities.user.sf_office
})

const mdtp = dispatch => ({
})

class MapDefault extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const center = {
            lat: this.props.office === true ? 37.7989708 : 40.7512857,
            lng: this.props.office === true ? -122.4035405 : -73.9861788,
        }

        const mapStyles = {
            width: "600px",
            height: "400px"
        }
        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={center}
            >
                <Marker name={'App Academy Office'} />
            </Map>
        )
    }
}

export default withRouter(connect(mstp, mdtp)(GoogleApiWrapper({
    apiKey: "AIzaSyAI3KS5AyUFYiAgV6Zzpj52R4OKX7z8Lkc"
})(MapDefault)));