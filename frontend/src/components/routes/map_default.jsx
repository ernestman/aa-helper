import React from "react";
import {connect} from "react-redux"
import {withRouter} from "react-router-dom";

const mstp = state => ({
    office: state.entities.user.sf_office
})

const mdtp = dispatch => ({

})

class MapDefault extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let center = {
            lat: 37.7989708,
            lng: -122.4035405
        }
        if (this.props.office === false) {
            center["lat"] = 40.7512857;
            center["lng"] = -73.9861788;
        } 
        const mapOptions = {
            center: center,
            zoom: 15
        }

        this.map = new google.maps.Map(this.mapNode, mapOptions)
    }
    
    render() {
        return (
            <div className="default-map-container" ref={map => this.mapNode = map}></div>
        )
    }
}

export default withRouter(connect(mstp, mdtp)(MapDefault));