import "./Modal.css";

function Modal(props) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{props.title}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={props.onModalCancel}>Delete</button>
          <button className="btn" onClick={props.onModalConfirm}>Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
