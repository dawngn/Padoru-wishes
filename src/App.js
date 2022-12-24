import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTree } from "react-icons/fa";


function App() {
  const openInNewTab = url => {
    var timer = setInterval(function() {
    window.open(url,"", "width=500,height=500"); 
  }, 2000);
  setTimeout(function() {
    clearInterval(timer);
  }, 10000);
  }
  return (
    
    <div className="App">
      
      <div className="padoru">
      <button className="padoru-button"
      onClick={() => openInNewTab('https://www.youtube.com/watch?v=dQ_d_VKrFgM')}
      ><FaTree/></button>
      </div>
      <TodoList/>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
