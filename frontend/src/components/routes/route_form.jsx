import React, {useState, useEffect} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {createRoute, routeErrors, clearRouteErrors} from "../../actions/route_actions";
import {closeModal} from "../../actions/modal_actions";

const mstp = state => ({
    routeErrors: state.errors.routes
})

const mdtp = dispatch => ({
    createRoute: (route) => dispatch(createRoute(route)),
    clearRouteErrors: () => dispatch(clearRouteErrors()),
    closeModal: () => dispatch(closeModal())
})

const RouteForm = (props) => {

    const [routeName, setRouteName] = useState("")
    const [travelMode, setTravelMode] = useState("DRIVING")
    const [startAddress, setStartAddress] = useState("")
    const [startLat, setStartLat] = useState("")
    const [startLon, setStartLon] = useState("")
    const [endAddress, setEndAddress] = useState("")
    const [endLat, setEndLat] = useState("")
    const [endLon, setEndLon] = useState("")

    useEffect( () => {
        addGeocodeListeners()

        return function cleanup() {
            props.clearRouteErrors()
        }
    }, [])

    const addGeocodeListeners = () => {
        let startInput = document.getElementById("start-address-field");
        let startAutocomplete = new google.maps.places.Autocomplete(startInput);
        let endInput = document.getElementById("end-address-field");
        let endAutocomplete = new google.maps.places.Autocomplete(endInput);

        let startRes;
        let endRes;

        startAutocomplete.addListener("place_changed", () => {
            if (!startAutocomplete.getPlace().formatted_address) {
                startRes = startAutocomplete.getPlace()

                setStartAddress(startRes.name)
                setStartLat(startRes.geometry.location.lat())
                setStartLon(startRes.geometry.location.lng())
            } else {
                startRes = startAutocomplete.getPlace()

                setStartAddress(startRes.formatted_address)
                setStartLat(startRes.geometry.location.lat())
                setStartLon(startRes.geometry.location.lng())
            }
        })

        endAutocomplete.addListener("place_changed", () => {
            if (!endAutocomplete.getPlace().formatted_address) {
                endRes = endAutocomplete.getPlace()

                setEndAddress(endRes.name)
                setEndLat(endRes.geometry.location.lat())
                setEndLon(endRes.geometry.location.lng())
            } else {
                endRes = endAutocomplete.getPlace()

                setEndAddress(endRes.formatted_address)
                setEndLat(endRes.geometry.location.lat())
                setEndLon(endRes.geometry.location.lng())
            }
        })
    }

    const handleNewRoute = (e) => {
        e.preventDefault();

        const directionsService = new google.maps.DirectionsService();
        const routeRequest = {
            origin: { lat: startLat, lng: startLon },
            destination: { lat: endLat, lng: endLon },
            travelMode: travelMode
        }

        directionsService.route(routeRequest, (res, status) => {
            if (status === "OK") {
                const newRoute = {
                    name: routeName,
                    travel_mode: travelMode,
                    start_lat: startLat,
                    start_lon: startLon,
                    end_lat: endLat,
                    end_lon: endLon
                }
                props.createRoute(newRoute)
                    .then(
                        res => {
                            if (res.route.statusText === "OK") {
                                console.log(res)
                                props.closeModal();
                                props.history.push(`/routes/${res.route.data.id}`);
                            }
                        }
                    )
            } else {
                console.log("Sorry, we could not find directions")
            }
        })

    }

    return (
        <div className="route-form-container">
            <div className="sessions-container">
                <h1 className="session-header">New Route</h1>
                <form className="session-form" onSubmit={handleNewRoute}>
                    <div className="register-form-top">
                        <div className="register-form-input">
                            <p className="register-form-label">Name</p>
                            <input
                                className="session-form-input"
                                type="text"
                                value={routeName}
                                placeholder="Route name"
                                onChange={ e => setRouteName(e.target.value) }
                            />
                        </div>

                        <div className="register-form-input">
                            <p className="register-form-label">Transportation</p>
                            <select 
                                className="session-form-input" 
                                value={travelMode} 
                                onChange={ e => setTravelMode(e.target.value) }
                            >
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
                        value={startAddress}
                        placeholder="Start"
                        onChange={e => setStartAddress(e.target.value) }
                    />

                    <p className="session-form-label">Destination</p>
                    <input
                        id="end-address-field"
                        className="session-form-input"
                        type="text"
                        value={endAddress}
                        placeholder="Destination"
                        onChange={ e => setEndAddress(e.target.value) }
                    />

                    <button className="form-btn">Create route</button>
                </form>
            </div>
        </div>
    )

}

export default withRouter(connect(mstp, mdtp)(RouteForm));