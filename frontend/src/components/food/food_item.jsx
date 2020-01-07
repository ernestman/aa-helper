import React from "react";
import stars5 from "../../../images/yelpstars5.png";
import stars45 from "../../../images/yelpstars45.png";
import stars4 from "../../../images/yelpstars4.png";
import stars35 from "../../../images/yelpstars35.png";
import stars3 from "../../../images/yelpstars3.png";
import stars25 from "../../../images/yelpstars25.png";
import stars2 from "../../../images/yelpstars2.png";
import stars15 from "../../../images/yelpstars15.png";
import stars1 from "../../../images/yelpstars1.png";

const FoodItem = (props) => {
    const business = props.business;
    const num = props.num;
    const distance = (business.distance * 0.000621).toFixed(1);

    const stars = (function(rating) {
        switch(rating) {
            case 5:
                return <img className="stars-img" src={stars5}/>
            case 4.5:
                return <img className="stars-img" src={stars45}/>
            case 4:
                return <img className="stars-img" src={stars4}/>
            case 3.5:
                return <img className="stars-img" src={stars35}/>
            case 3:
                return <img className="stars-img" src={stars3}/>
            case 2.5:
                return <img className="stars-img" src={stars25}/>
            case 2:
                return <img className="stars-img" src={stars2}/>
            case 1.5:
                return <img className="stars-img" src={stars15}/>
            case 1:
                return <img className="stars-img" src={stars1}/>
            default:
                return <div></div>
        }
    })(business.rating)

    return (
        <div className="food-item">
            <img className="food-item-img" src={business.image_url}/>
            <div className="food-item-info">
                <div className="food-item-left">
                    <span>{num}. <a className="food-link" href={business.url} target="_blank">{business.name}</a></span>
                    <div className="food-item-inline">
                        {stars}
                        <p className="food-item-p">{business.review_count} reviews</p>
                    </div>
                    <div className="food-item-inline">
                        <p id="food-price" className="food-item-p">{business.price}</p>
                        <p className="food-item-p">{business.categories}</p>
                    </div>
                </div>
                <div className="food-item-right">
                    <p className="food-item-p">{business.display_phone}</p>
                    <p className="food-item-p">{business.display_address}</p>
                    <p className="food-item-p">{distance + " mi"}</p>
                </div>
            </div>
        </div>
    )

}

export default FoodItem;