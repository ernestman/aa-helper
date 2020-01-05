import React from "react";
import ReactDOM from "react-dom";
import Root from "./root"
import configureStore from "./store";
import '../stylesheets/main.scss';

import {getUser} from "./util/session_api_util";


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    let store;
    
    if (localStorage.getItem("token")) {
        const user = JSON.parse(localStorage.getItem("user"));
        const routes = JSON.parse(localStorage.getItem("routes"));
        const token = localStorage.getItem("token");
        // debugger

        // const entities = {}
        const objRoutes = {}
        routes.forEach( route => {
            // debugger
            objRoutes[route.id] = route
        })

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
        // debugger
        store = configureStore(preloadedState)
        window.getState = store.getState;
        ReactDOM.render(<Root store={store}/>, root)
        
    } else {
        store = configureStore()
        window.getState = store.getState;
        ReactDOM.render(<Root store={store}/>, root)
    }

})

//     < !--{% if user.is_authenticated %}
// <script type="text/javascript">
//     window.currentUser
//         </script>
// {% end %} -->