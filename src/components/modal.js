import React,{useState} from "react";

function Modal({modal,toggleModal,handleUpdateTodo,todoData,todo}){
    const [stateData,setState]= useState(todoData)
    const handleChange = (e) => {
        setState({
            ...stateData,
            [e.target.id]: e.target.value,
        });}

    const handleSave = (e) => {
        e.preventDefault()
        handleUpdateTodo(todo.id,stateData);
        toggleModal(todo);
      };
   return(
    <div>
          {modal &&(
            <div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                    <form>
                        <center>
                        <input
                        type="text"
                        id="title"
                        placeholder="title"
                        onChange={handleChange}
                        value={stateData.title}
                        required
                        />
                         <input
                        type="text"
                        id="description"
                        placeholder="Description"
                        onChange={handleChange}
                        value={stateData.desription}
                        required
                        />
                        <input
                        type="text"
                        id="priority"
                        placeholder="priority"
                        onChange={handleChange}
                        value={stateData.priority}
                        required
                        />
                         <input
                        type="text"
                        id="status"
                        placeholder="status"
                        onChange={handleChange}
                        value={stateData.status}
                        required
                        />
                        </center>
                        <button className="close-modal" onClick={toggleModal}>Close</button>
                        <center><button id="save-btn" onClick={handleSave}>Save</button></center>
                    </form>
                    
                </div>
            </div>
            )}
    </div>
   )
}

export default Modal