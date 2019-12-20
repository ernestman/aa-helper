import axios from "axios";

export const register = user => {
    return axios.post("/register", user)
}

export const login = user => {
    return axios.post("/login", user)
}