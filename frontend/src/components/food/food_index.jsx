import React, { useEffect } from "react";
import {connect} from "react-redux";
import {getYelp, clearYelp} from "../../actions/api_actions";

import FoodItem from "./food_item";

const mstp = state => {
    return {
        office: state.entities.user.sf_office,
        businesses: state.entities.businesses
    }
}

const mdtp = dispatch => {
    return {
        getYelp: office => dispatch(getYelp(office)),
        clearYelp: () => dispatch(clearYelp())
    }
}

const FoodIndex  = (props) => {

    useEffect( () => {
        props.getYelp(props.office)

        return function cleanup() {
            props.clearYelp()
        }
    }, []);

    const businessResults = props.businesses.map((bus, i) => (
        <FoodItem
            key={i}
            num={i + 1}
            business={bus}
        />
    ))

    return (
        <div className="food-index-container">
            <h3 className="food-index-header">Food & Restaurants Nearby</h3>
            <div className="food-index">
                {businessResults}
            </div>
        </div>
    )
}

export default connect(mstp, mdtp)(FoodIndex);