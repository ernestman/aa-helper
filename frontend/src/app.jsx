import React from "react";
import {connect} from "react-redux";
import {Link, Route, Switch} from "react-router-dom";
import {retrieveUser} from "./actions/session_actions";
import Splash from "./components/splash";
import RegisterContainer from "./components/session/register_container";
import LoginContainer from "./components/session/login_container";
import Header from "./components/header";
import Footer from "./components/footer";
import RoutesMainContainer from "./components/routes/routes_container";
import FoodMain from "./components/food/food_main";


const mdtp = dispatch => ({
    retrieveUser: () => dispatch(retrieveUser())
})

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.retrieveUser();
    }

    render() {
        return (
            <div>
                <header>
                    <Header />
                </header>

                <main>
                    <Switch>
                        <Route exact path="/" component={Splash}/>
                        <Route path="/register" component={RegisterContainer}/>
                        <Route path="/login" component={LoginContainer}/>
                        <Route path="/food" component={FoodMain}/>
                        <Route path="/routes" component={RoutesMainContainer}/>
                    </Switch>
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default connect(null, mdtp)(App);