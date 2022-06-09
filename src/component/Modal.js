function Modal(props) {
    function canCelHandler() {
        props.onCancel();
    }

    function comfirmHandler() {
        props.onConfirm();
    }

    return (
        <div className="modal">
            <p>Are u sure?</p>
            <button className="btn btn--alt" onClick={canCelHandler}>Cancel</button>
            <button className="btn" onClick={comfirmHandler}>Confirm</button>
        </div>
    );
}

export default Modal;