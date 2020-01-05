import axios from "axios";

const yelpApiKey = "Hq9KqeXiwgBE9bchih6_9bP3UEzxxAlOPXhN6OtETUXnJuS6mFKmvpWC-ONiv_YHxeFiNzagO9PhAhefmD5mgqZq5K6LbHdA8ewLwohVjdjXzEF6HTJ_yvs3sKgRXnYx"

const yelpApiConfig = {
    headers: {
        "Authorization": `Bearer ${yelpApiKey}`
    },
}
export const getFoodNearby = (lat, lng) => {

    return axios.get(
        `https://api.yelp.com/v3/businesses/search?term=food&latitude=${lat}&longitude=${lng}`,
        yelpApiConfig
    )
}
// yelp api util

// export const getUser = () => {
//     return axios.get("/user", tokenConfig(getState))
// }
