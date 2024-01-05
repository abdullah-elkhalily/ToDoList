// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Todo from "../components/todo";
import "./todolist.css";


const TodoList = () => {

  var colors = ["#e57373", "#ba68c8", "#90caf9","#4db6ac", "#dce775", "#ffb74d", "#b0bec5", "#81c784"];

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [complet, setcomplet] = useState([
  ]);
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("to"));
    const storedcom = JSON.parse(localStorage.getItem("com"));
console.log(storedTodos);

    if (storedTodos) {
      setTodos(storedTodos);
    }
    if(storedcom){setcomplet(storedcom)}

  }, []);



  const changeTask = (evt) => {
    setTask(evt.target.value);
  };
  
  const createTodo = (evt) => {
    evt.preventDefault();
    const todo = { value: task, completed: false, id: todos.length + 1 };
    setTodos([...todos, todo]);
     localStorage.setItem("to", JSON.stringify([...todos,todo]));
    setTask("");
  };
  const completeTask = (id) => {

 
    const newArr = todos.filter((todo) => {
      return todo.id !== id;
    });
  
    const completedTodo = todos.find((todo) => todo.id === id);


    completedTodo.completed = true;
   
    setTodos(newArr);
   
 setcomplet([...complet, completedTodo]);
localStorage.clear("to")
   localStorage.setItem("com", JSON.stringify([...complet,completedTodo]));
   
  };

    const deleteTask = (id) => {
    const newArr = todos.filter((todo) => {
      return todo.id != id;
    });

    setTodos(newArr);
  };
  const deleteAll=()=>{
    localStorage.clear("com")
    setcomplet([])
  };
  return (
    <div className="all">
      <div className="hederToDo">
        <h1 className="Address"> To Do List</h1>
      </div>
      <Form
        className="taskform"
        onSubmit={(e) => {
          createTodo(e);
        }}
      >
        <Form.Group className="m-3 taskinput" controlId="formGroupEmail">
          <Form.Control
            value={task}
            onChange={(e) => {
              changeTask(e);
            }}
            type="text"
            placeholder="Enter task"
          />
        </Form.Group>
        <Button variant="primary" className="m-3 buttonTask" type="submit">
          Add
        </Button>
      </Form>
      <div className="parts">
        <div className="TasksPart">
          <h3 className="text"> tasks</h3>

          {todos.map((todo) => {


            // eslint-disable-next-line react/jsx-key
            return ( <Todo todo={todo}   completeTask={completeTask} deleteTask={deleteTask}
              />
            );
          })}
        </div>
        <div className="TasksPart d-non">
          <h3  className="text"> completed</h3>

          {complet.map((com) => {
            // eslint-disable-next-line react/jsx-key
            
          return(  // eslint-disable-next-line no-undef
            <div className="textcomplet"key={com.id}              style={{ backgroundColor: colors[com.id % colors.length] }}
            >

              
            <p>{complet.indexOf(com)+1} -{com.value}</p>
         
          </div>
           ) ;
          })}
           {(complet.length==0)?"":   

             <button  onClick={deleteAll} className="btn btn-danger widbut"> Delete All ({complet.length})</button>
       } </div>
      </div>
    </div>
  );
};

export default TodoList;
