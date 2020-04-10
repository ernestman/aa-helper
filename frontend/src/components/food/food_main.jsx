import React from "react";
import {connect} from "react-redux";
import FoodMap from "./food_map";
import FoodIndex from "./food_index";

// const mstp = state => ({
//     businesses: state.entities.businesses
// })

const FoodMain = (props) => {
    // const {businesses} = props;
    return (
        <div className="food-main-container">
            <FoodIndex/>
            <div className="food-map-sticky">
                <FoodMap/>
            </div>
        </div>
    )
}

// export default connect(mstp, null)(FoodMain);
export default FoodMain;