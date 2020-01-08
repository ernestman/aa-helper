import React from "react";
import {connect} from "react-redux";
import {getYelp, clearYelp} from "../../actions/api_actions";

import FoodItem from "./food_item";

const mstp = state => {
    return {
        businesses: state.entities.businesses
    }
}

const mdtp = dispatch => {
    return {
        getYelp: () => dispatch(getYelp()),
        clearYelp: () => dispatch(clearYelp())
    }
}

class FoodIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getYelp()
    }

    componentWillUnmount() {
        this.props.clearYelp()
    }

    render() {

        const businessResults = this.props.businesses.map( (bus, i) => (
            <FoodItem
                key={i}
                num={i+1}
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
}

export default connect(mstp, mdtp)(FoodIndex);