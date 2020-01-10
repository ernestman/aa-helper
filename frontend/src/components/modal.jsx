import React from "react";
import {connect} from "react-redux";
import {closeModal} from "../actions/modal_actions";
import RouteForm from "./routes/route_form";

const mstp = state => ({
    modal: state.ui.modal
})

const mdtp = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

const Modal = props => {
    const {modal, closeModal} = props;
    if (!modal) return null;

    let component;
    switch(modal) {
        case "routeForm":
            component = <RouteForm/>;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

export default connect(mstp, mdtp)(Modal);