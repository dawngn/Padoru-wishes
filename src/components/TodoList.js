import React,{ useEffect,useState} from "react";
import Form from "./Form";
import {AiFillDelete} from 'react-icons/ai'
import {toast } from "react-toastify";

function TodoList() {
  const [todos, setTodos] = useState([]);
  
  const loadTodos = () => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  };

  const saveTodos = todos => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  useEffect(() => {
    loadTodos();
  }, []);
  

  const addTodo = todo => {
    const newTodos= [todo,...todos]
    setTodos(newTodos)
    toast.success("Add successfully!")
    saveTodos(newTodos);
     } 
  
  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
    toast.info("Delete successfully!")
    saveTodos(removeArr);
  }

  return (
  <div>
    <h1>Wishing List</h1>
    <Form onSubmit={addTodo}/>    
    {todos.map((todo,index) => (
      <div className="todo-container"  key={index}>
      <p>{todo.text}</p>
      <button className="delete-button" onClick={() => removeTodo(todo.id)}><AiFillDelete/></button>
    </div>
    ))}  

  </div>
  )
}


export default TodoList;
