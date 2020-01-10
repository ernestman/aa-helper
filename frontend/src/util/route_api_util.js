import axios from "axios";
import {tokenConfig} from "./session_api_util";

export const getRoutes = () => {
    return axios.get("/routes/index", tokenConfig(getState))
}

export const createRoute = route => {
    return axios.post("/routes/create", route, tokenConfig(getState))
}