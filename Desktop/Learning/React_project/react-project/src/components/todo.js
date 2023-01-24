// Props - It is used for passing value dynamically in code
// Hooks - usestate is react Hooks and we can directly called in react component functions
// useState - In this we can give starting value as arugument  and always return array of two elements


import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>

      { modalIsOpen && <Modal onCancel={closeHandler} onConfirm={closeHandler} /> }
      { modalIsOpen && <Backdrop  onCancel={closeHandler}/> }
    </div>
  );
}

export default Todo;


//props - Building Reuseable compeonents
//useState - for changing dynmically what we see on screen
