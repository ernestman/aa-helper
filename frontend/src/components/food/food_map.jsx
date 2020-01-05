import React from "react";
import {connect} from "react-redux"

import { getFoodNearby } from "../../util/api_util";

const mstp = state => ({
    office: state.entities.user.sf_office
})

class FoodMap extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.renderMap()
        // getFoodNearby(37.7989708, -122.4035405)
        //     .then(res => console.log(res))
    }


    renderMap() {
        const center = {
            lat: this.props.office === false ? 40.7512857 : 37.7989708,
            lng: this.props.office === false ? -73.9861788 : -122.4035405,
        }
        const mapOptions = {
            center: center,
            zoom: 16
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions)
    }

    render() {
        return (
            <div className="routes-map-container" ref={map => this.mapNode = map}></div>
        )
    }
}

export default connect(mstp, null)(FoodMap)
