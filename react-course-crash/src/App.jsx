import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Nav from './components/Nav'
import Users from './pages/Users'

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users/:id" element={<Users />}></Route>
        </Routes>
      </Router>
  )
}

export default App;





{/*
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter"
import React, {useState, useEffect} from "react";

function App() {  
  const [showModal, setShowModal] = useState(false)

  function onTodoDelete(){
    setShowModal(true)
  }

  function onModalCancel() {
    setShowModal(false)
  }

  function onModalConfirm() {
    setShowModal(false)
  }

  useEffect(() => {

  },[])

  return (
    <div>
      <Title></Title>
      <div>
        <input type="text" onChange={(event)=> {

        }}/>
        <button>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified"></Todo>
        <Todo onTodoDelete={onTodoDelete} title="Finish interview section"></Todo>
        <Todo onTodoDelete={onTodoDelete} title="Land a $100k job"></Todo>
      </div>
      {showModal ? <Modal onModalCancel={onModalCancel} onModalConfirm={onModalConfirm} title="Confirm delete?"></Modal> : null}
    </div>
  );
} */}