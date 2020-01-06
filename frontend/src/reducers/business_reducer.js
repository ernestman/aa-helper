import {GET_YELP, CLEAR_YELP} from "../actions/api_actions";

const businessReducer = (state=[], action) => {
    Object.freeze(state);

    switch(action.type) {
        case GET_YELP:
            return action.payload.data.businesses
        case CLEAR_YELP:
            return []
        default:
            return state;
    }
}

export default businessReducer;