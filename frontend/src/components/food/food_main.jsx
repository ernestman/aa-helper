import React from "react";
import FoodMap from "./food_map";

import {getFoodNearby} from "../../util/api_util";

// class FoodMain extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     componentDidMount() {

//     }
// }

const FoodMain = () => {
    return (
        <div>
            <h1>Food Component</h1>
            <FoodMap/>
        </div>
    )
}

export default FoodMain;