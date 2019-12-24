import {connect} from "react-redux";
import RoutesMain from "./routes_main";

const mstp = state => ({
    routes: Object.values(state.entities.routes)
})

const mdtp = dispatch => ({
    
})

export default connect(mstp, mdtp)(RoutesMain);