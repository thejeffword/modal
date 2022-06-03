import React from "react";
import "./Modal.css"

const Modal = props => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Title</h4>
                </div>
            <div className ="modal-body">
                    Content 
            </div>
            <div className="modal-footer">
                <button className="button">Close</button>
            </div>
        </div>
    </div>
    )
}

export default Modal