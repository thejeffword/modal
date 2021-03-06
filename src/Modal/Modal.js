import React from "react";
import "./Modal.css"

const Modal = props => {
    
    return (
        <div className={`modal ${props.show ? 'show' : ''}`}
            onClick={props.onClose}>
            <div className="modal-content"
                onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{props.title}</h4>
                </div>
            <div className ="modal-body">
                    {props.content} 
            </div>
            <div className="modal-footer">
                <button 
                    className="button"
                    onClick={props.onClose}>Close</button>
            </div>
        </div>
    </div>
    )
}

export default Modal