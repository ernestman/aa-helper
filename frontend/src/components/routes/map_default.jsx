import React from "react";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom";

const mstp = state => ({
    office: state.entities.user.sf_office
})

class MapDefault extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.renderMap()
    }

    renderMap() {
        const center = {
            lat: this.props.office === false ? 40.7512857 : 37.7989708,
            lng: this.props.office === false ? -73.9861788 : -122.4035405,
        }
        const mapOptions = {
            center: center,
            zoom: 15
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions)

        const centerPin = new google.maps.Marker({
            position: center
        })
        centerPin.setMap(this.map)
    }

    render() {
        return (
            <div className="routes-map-container" ref={map => this.mapNode = map}></div>
        )
    }
}

export default withRouter(connect(mstp, null)(MapDefault))