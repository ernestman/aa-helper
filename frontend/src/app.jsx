import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import Splash from "./components/splash";
import Register from "./components/session/register";
import Login from "./components/session/login";
import Header from "./components/header";
import Footer from "./components/footer";
import RoutesMain from "./components/routes/routes_main";
import FoodMain from "./components/food/food_main";
import Modal from "./components/modal";


const App = props => {
    return (
        <div>
            <Modal />
            <header>
                <Header />
            </header>

            <main>
                <Switch>
                    <Route exact path="/" component={Splash} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/food" component={FoodMain} />
                    <Route path="/routes" component={RoutesMain} />
                </Switch>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default App;

// class App extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div>
//                 <header>
//                     <Header />
//                 </header>

//                 <main>
//                     <Switch>
//                         <Route exact path="/" component={Splash}/>
//                         <Route path="/register" component={RegisterContainer}/>
//                         <Route path="/login" component={LoginContainer}/>
//                         <Route path="/food" component={FoodMain}/>
//                         <Route path="/routes" component={RoutesMainContainer}/>
//                     </Switch>
//                 </main>

//                 <footer>
//                     <Footer />
//                 </footer>
//             </div>
//         )
//     }
// }

// export default connect(null, mdtp)(App);
