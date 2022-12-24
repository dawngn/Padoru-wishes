import React,{useState} from 'react'
import {IoMdAddCircleOutline} from 'react-icons/io'

function Form(props) {
  
  const [todo, setTodo] = useState("");
  
  
  
  const handleSubmit = e => {
    const id = '' + new Date().getTime();
    e.preventDefault();
    props.onSubmit({
      id : id,
      text: todo
  })
  setTodo("");
  }
   

  return (
    <form onSubmit={handleSubmit}>
    <input 
    type="text" 
    placeholder='Add something to your list'
    value={todo}
    name="text"
    className="todo-input"
    onChange={(e) => setTodo (e.target.value)}
    />
    <button  className="todo-button" >
    <IoMdAddCircleOutline/>
    </button>
    
    </form>
  )
}

export default Form