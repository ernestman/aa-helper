import React from "react";
import ReactDOM from "react-dom";
import Root from "./root"
import configureStore from "./store";
import '../stylesheets/main.scss';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    const store = configureStore()

    window.getState = store.getState;

ReactDOM.render(<Root store={store}/>, root)
})