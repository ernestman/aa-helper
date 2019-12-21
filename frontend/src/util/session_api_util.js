import axios from "axios";

export const getUser = () => {
    return axios.get("/user", tokenConfig(getState))
}

export const register = user => {
    return axios.post("/register", user)
}

export const login = user => {
    return axios.post("/login", user)
}

export const logout = () => {
    return axios.post("/logout", null, tokenConfig(getState))
}





export const tokenConfig = getState => {
    const token = getState().session.token
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (token) {
        config.headers["Authorization"] = `Token ${token}`
    }

    return config
}