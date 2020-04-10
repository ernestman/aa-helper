import React from "react";
import {connect} from "react-redux"

const mstp = state => ({
    office: state.entities.user.sf_office
})

class FoodMap extends React.Component {
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
        const marker = new google.maps.Marker({
            position: center,
            map: this.map,
            title: "a/A Office"
        })
    }

    render() {
        return (
            <div className="food-map-container" ref={map => this.mapNode = map}></div>
        )
    }
}

export default connect(mstp, null)(FoodMap)
