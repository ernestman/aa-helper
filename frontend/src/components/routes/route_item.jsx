import React from "react";
import {withRouter} from "react-router-dom";

const RouteItem = props => {

    const clickRouteHandler = e => {
        e.preventDefault()
        props.history.push(`/routes/${props.route.id}`)
    }

    const deleteHandler = e =>  {
        e.stopPropagation()
        props.deleteRoute(props.route.id)
    }

    const {route} = props;

    const method = route => {
        switch (route.travel_mode) {
            case "DRIVING":
                return <i className="fas fa-car fa-lg"></i>
            case "TRANSIT":
                return <i className="fas fa-subway fa-lg"></i>
            case "BICYCLING":
                return <i className="fas fa-biking fa-lg"></i>
            case "WALKING":
                return <i className="fas fa-walking fa-lg"></i>
            default:
                return <i className="fas fa-directions fa-lg"></i>
        }
    };

    return (
        <div className={"route-item" + (props.currentRoute === route.id ? " current-route" : "")} onClick={clickRouteHandler}>
            <div className="route-top">
                <div className="route-name">
                    <i id="route-icon" className="fas fa-route"></i>
                    <h3>{route.name}</h3>
                </div>
                <i id="delete-icon" className="far fa-trash-alt fa-lg" onClick={deleteHandler}></i>
            </div>
            <div className="route-city">
                <div className="route-loc">
                    <p>{route.start_city}</p>
                </div>
                <i className="fas fa-long-arrow-alt-right"></i>
                <div className="route-loc">
                    <p>{route.end_city}</p>
                </div>
            </div>
            <div className="route-info">
                <div className="route-info-icon">
                    {method(route)}
                </div>
                <div className="route-info-section">
                    <p>Time</p>
                    <p className="route-p">{route.time}</p>
                </div>
                <div className="route-info-section">
                    <p>Distance</p>
                    <p className="route-p">{route.distance}</p>
                </div>
            </div>
        </div>
    )
}

export default withRouter(RouteItem);