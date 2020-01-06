import axios from "axios";

export const getYelp = () => {
    return axios.get("/yelp")
}