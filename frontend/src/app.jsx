import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import Splash from "./components/splash";
import RegisterContainer from "./components/session/register_container";
import LoginContainer from "./components/session/login_container";

const App = () => {
    return (
        <div>
            <main>
                <Switch>
                    <Route exact path="/" component={Splash}/>
                    <Route exact path="/register" component={RegisterContainer}/>
                    <Route exact path="/login" component={LoginContainer}/>
                </Switch>
            </main>
        </div>
    )
}

export default App;