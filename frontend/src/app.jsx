import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import Splash from "./components/splash";

const App = () => {
    return (
        <div>
            <main>
                <Switch>
                    <Route exact path="/" component={Splash}/>
                </Switch>
            </main>
        </div>
    )
}

export default App;