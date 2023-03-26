import React,{useState} from "react";

function Form({handleAddTodo,todoData}){
    const [stateData,setState]= useState(todoData)

    const handleChange = (e) => {
        setState({
            ...stateData,
            [e.target.id]: e.target.value,
        });
    }
    const handleSave = (e) => {
        e.preventDefault()
        handleAddTodo(stateData);
        setState({
            title:"",
            description:"",
            priority: ""
        })
      };
    return(
        <div>
            <form onSubmit={handleSave}>
                <div>
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
                    value={stateData.description}
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
                </div>
                <center><button className="ui button">Submit</button></center>
            </form>
        </div>
    )
}

export default Form