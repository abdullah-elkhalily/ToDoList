/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./todo.css"
// eslint-disable-next-line react/prop-types
const Todo = ({todo,completeTask,deleteTask}) => {

    var colors = ["#e57373", "#ba68c8", "#90caf9","#4db6ac", "#dce775", "#ffb74d", "#b0bec5", "#81c784"];


    return (
        <div className='parttodo'
  
        
        
        key={todo.id} >
            <div  className='partone'       
        style={{ backgroundColor: colors[todo.id % colors.length] }}>
          <button className=" mx-2 hc" onClick={()=>{completeTask(todo.id)}}><i className="fa-solid fa-check hh"></i></button>

        <span className="texttodo">{todo.value}</span>
        
         </div>
       <button className="  btn btn-light hs" onClick={()=>{deleteTask(todo.id)}}><i className="fa-solid fa-trash-can del"></i></button>
       </div>
    );
}

export default Todo;
