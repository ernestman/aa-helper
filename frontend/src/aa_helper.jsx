import React from "react";
import ReactDOM from "react-dom";
import Root from "./root"
import configureStore from "./store";
import '../stylesheets/main.scss';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    let store;
    
    if (localStorage.getItem("token")) {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("token");

        const objRoutes = {}
        if (localStorage.getItem("routes") !== "undefined") {
            const routes = JSON.parse(localStorage.getItem("routes"));
            routes.forEach( route => {
                objRoutes[route.id] = route
            })
        }

        const preloadedState = {
            entities: {
                user: user,
                routes: objRoutes
            },
            session: {
                token: token,
                isAuthenticated: true
            }
        }

        store = configureStore(preloadedState)
        window.getState = store.getState;
        ReactDOM.render(<Root store={store}/>, root)
        
    } else {
        store = configureStore()
        window.getState = store.getState;
        ReactDOM.render(<Root store={store}/>, root)
    }

})