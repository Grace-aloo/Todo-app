import { useEffect,useState } from "react"
import Modal from "./modal";
import Form from "./form.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit,faTrash} from "@fortawesome/free-solid-svg-icons";
import './home.css'

function Home(){
    const [todos,setTodos]=useState([])
    const [modal,setModal]=useState(false)
    // const [modalTwo,setModalTwo] = useState(false)
    const [selectedTodoId,setSelectedTodoId]=useState(null)
    const [todoData,setTodoData]=useState({
        title:"",
        description:"",
        priority: ""
    })

    useEffect(()=>{
        fetch(`https://grace-portfolio-app.onrender.com/skills`)
        .then(res =>res.json())
        .then(data =>setTodos(data.data))
    },[])
    console.log(todos)

    function handleChange(e) {
        setTodoData({
          ...todoData,
          [e.target.name]: e.target.value
        });
    }
    // function toggleModalTwo(){
    //     setModalTwo(!modalTwo)
    // }

    const toggleModal = (todo) => {
        setTodoData({...todo, id:todo.id})
        setSelectedTodoId(todo.id)
        setModal(!modal);
      };
      

    function handleDeleteSkill(id) {
        // fetch(`https://grace-portfolio-app.onrender.com/skill/destroy/${id}`, {
        //   method: 'DELETE',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // })
        // .then(response => {
        //   if (!response.ok) {
        //     throw new Error('Failed to delete skill,are you logged in?');
        //   }
          // handle successful response
          setTodos(todos.filter(skill => skill.id !== id));
        // })
        // .catch(error => {
        //   console.error(error);
        //   // handle error
        // })
    } 
    function handleAddTodo(newData){
  
      //   fetch("http://localhost:8001/transactions", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({newItemsField}),
      // })
              
      //  alert("added successfully")
  
      setTodos([...todos,newData])


  
      }
    function handleUpdateTodo(id,newData) {
        // fetch(`https://grace-portfolio-app.onrender.com/skills/update/${id}`, {
        // method: 'PUT',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({
        //     name: newData.name,
        //     tools: newData.tools
        // })
        // })
        // .then(response => {
        // if (!response.ok) {
        //     throw new Error('Failed to update skill,are you logged in');
        // }
        // handle successful response
        setTodos(todos.map(todo => { // update skills list with updated skill
            if (todo.id === selectedTodoId) {
            return {
                ...todo,
                title: newData.title,
                description: newData.description,
                priority: newData.priority,
                status: newData.status
            }
            } else {
            return todo;
            }
        }));
        setSelectedTodoId(null)
        setTodoData({
            title:"",
            description:"",
            priority: ""
          })
        // })
        // .catch(error => {
        // console.error(error);
        // // handle error
        // })
      }
    return(
        <div>
            <Form
            handleAddTodo={handleAddTodo}
            todoData={todoData}
            handleChange={handleChange}/>
            {/* <center><button onClick={()=>toggleModalTwo()} id="add"><FontAwesomeIcon icon={faAdd}>Add Todo</FontAwesomeIcon>Add Todo</button></center> */}
            <table className="table">
                <thead>
                     <tr>
                        <th scope="col">Title</th> 
                        <th scope="col">Description</th>
                        <th scope="col">priority</th>
                        <th scope="col">Status</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(list=>{
                return(
                    <tr key={list.id}>
                        {modal?(<Modal
                      modal={modal}
                      todoData={todoData}
                      handleUpdateTodo={handleUpdateTodo}
                      toggleModal={toggleModal}
                      handleChange={handleChange}
                      todo={list}/>):null}
                    
                    <td>{list.title}</td>
                    <td>{list.description}</td>
                    <td>{list.priority}</td>
                    <td>{list.status}</td>  
                    <td><button onClick={()=>toggleModal(list)} id="edit"><FontAwesomeIcon icon={faEdit}>Edit</FontAwesomeIcon></button></td>
                    <td><button onClick={()=>handleDeleteSkill(list.id)} id="delete"><FontAwesomeIcon icon={faTrash}>Delete</FontAwesomeIcon></button></td>           
                    </tr> 
                    
                )})}
                </tbody>
                </table>
                {/* {modalTwo?(<ModalTwo
                modalTwo={modalTwo}
                skillData={skillData}
                handleAddSkill={handleAddSkill}
                toggleModalTwo={toggleModalTwo}
                handleChange={handleChange}/>):(null)} */}
        </div>
    )
}

export default Home