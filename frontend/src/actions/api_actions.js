import * as ApiUtil from "../util/api_util";

export const GET_YELP = "GET_YELP"
export const CLEAR_YELP = "CLEAR_YELP"

export const receiveYelp = payload => ({
    type: GET_YELP,
    payload: payload
})

export const clearYelp = () => ({
    type: CLEAR_YELP
})


export const getYelp = office => dispatch => (
    ApiUtil.getYelp(office)
        .then(
            res => dispatch(receiveYelp(res))
        )
)