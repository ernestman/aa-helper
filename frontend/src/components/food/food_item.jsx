import React from "react";
import YelpStars from "../../../images/yelpstars.png"

const FoodItem = (props) => {
    const business = props.business;
    const num = props.num;

    return (
        <div className="food-item">
            <img className="food-item-img" src={business.image_url}/>
            <div className="food-item-info">
                <div className="food-item-left">
                    <span>{num}. <a className="food-link" href={business.url} target="_blank">{business.name}</a></span>
                    <p>{business.rating}</p>
                    {/* <img className="yelp-stars-img" src={YelpStars}/> */}
                    <p>{business.review_count} reviews</p>
                    <p>{business.categories}</p>
                </div>
                <div className="food-item-right">
                    <p>{business.display_phone}</p>
                    <p>{business.display_address}</p>
                </div>
            </div>
        </div>
    )

}

export default FoodItem;