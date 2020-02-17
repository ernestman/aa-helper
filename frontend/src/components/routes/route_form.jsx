import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {createRoute} from "../../actions/route_actions";
import {closeModal} from "../../actions/modal_actions";

const mdtp = dispatch => ({
    createRoute: (route) => dispatch(createRoute(route)),
    closeModal: () => dispatch(closeModal())
})

class RouteForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            travelMode: "DRIVING",
            startAddress: "",
            startLat: "",
            startLon: "",
            endAddress: "",
            endLat: "",
            endLon: ""
        }
        this.handleNewRoute = this.handleNewRoute.bind(this);
    }

    componentDidMount() {
        let startInput = document.getElementById("start-address-field")
        let startAutocomplete = new google.maps.places.Autocomplete(startInput)
        let endInput = document.getElementById("end-address-field")
        let endAutocomplete = new google.maps.places.Autocomplete(endInput)

        let res;

        let that = this;
        startAutocomplete.addListener("place_changed", () => {
            if (!startAutocomplete.getPlace().formatted_address) {
                res = startAutocomplete.getPlace()
                startAddress = startAutocomplete.getPlace().name;
                that.setState({
                    startAddress: res.name,
                    startLat: res.geometry.location.lat(),
                    startLon: res.geometry.location.lng()
                })
            } else {
                res = startAutocomplete.getPlace()
                that.setState({
                    startAddress: res.formatted_address,
                    startLat: res.geometry.location.lat(),
                    startLon: res.geometry.location.lng()
                })
            }
        })

        endAutocomplete.addListener("place_changed", () => {
            if (!endAutocomplete.getPlace().formatted_address) {
                res = endAutocomplete.getPlace()
                endAddress = endAutocomplete.getPlace().name;
                that.setState({
                    endAddress: res.name,
                    endLat: res.geometry.location.lat(),
                    endLon: res.geometry.location.lng()
                })
            } else {
                res = endAutocomplete.getPlace()
                that.setState({
                    endAddress: res.formatted_address,
                    endLat: res.geometry.location.lat(),
                    endLon: res.geometry.location.lng()
                })
            }
        })
    }

    handleNewRoute(event) {
        event.preventDefault();
        let newRoute = {
            name: this.state.name,
            travel_mode: this.state.travelMode,
            start_lat: this.state.startLat,
            start_lon: this.state.startLon,
            end_lat: this.state.endLat,
            end_lon: this.state.endLon
        }
        this.props.createRoute(newRoute)
            .then(res => this.props.history.push(`/routes/${res.route.data.id}`))
        this.props.closeModal()
    }

    handleInput(inputType) {
        return (event) => {
            this.setState({ [inputType]: event.target.value })
        }
    }

    render() {
        return (
            <div className="route-form-container">
                <div className="sessions-container">
                    <h1 className="session-header">New Route</h1>
                    <form className="session-form" onSubmit={this.handleNewRoute}>
                        <div className="register-form-top">
                            <div className="register-form-input">
                                <p className="register-form-label">Name</p>
                                <input
                                    className="session-form-input"
                                    type="text"
                                    value={this.state.name}
                                    placeholder="Route name"
                                    onChange={this.handleInput("name")}
                                />
                            </div>

                            <div className="register-form-input">
                                <p className="register-form-label">Transportation</p>
                                <select className="session-form-input" value={this.state.transportation} onChange={this.handleInput("travelMode")}>
                                    <option value="DRIVING">Driving</option>
                                    <option value="TRANSIT">Transit</option>
                                    <option value="BICYCLING">Bicycling</option>
                                    <option value="WALKING">Walking</option>
                                </select>
                            </div>
                        </div>

                        <p className="session-form-label">Start</p>
                        <input
                            id="start-address-field"
                            className="session-form-input"
                            type="text"
                            value={this.state.startAddress}
                            placeholder="Start"
                            onChange={this.handleInput("startAddress")}
                        />

                        <p className="session-form-label">Destination</p>
                        <input
                            id="end-address-field"
                            className="session-form-input"
                            type="text"
                            value={this.state.endAddress}
                            placeholder="Destination"
                            onChange={this.handleInput("endAddress")}
                        />

                        <button className="form-btn">Create route</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(null, mdtp)(RouteForm));