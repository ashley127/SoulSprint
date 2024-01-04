import React, { useState, useEffect, useRef } from 'react';
import { MdCloseFullscreen } from "react-icons/md";

import {Plus} from "lucide-react";
import Todo from '../components/Todo';
import Subtask from '../components/Subtask';

function TaskPage(props) {

  const [subtask,setSubtask]=useState([]);

   const handleAddSubtask=()=>{
       const newSubtask=[...subtask,[]]
       setSubtask(newSubtask)
   }
   const handleChange=(onChangeValue,i)=>{
    const inputdata=[...subtask]
    inputdata[i]=onChangeValue.target.value;
    setSubtask(inputdata)
   }
   const handleDelete=(i)=>{
       const deletSubtask=[...subtask]
       deletSubtask.splice(i,1)
       setSubtask(deletSubtask)  
   }

   const complete = id => {
    let updatedTasks = subtask.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setSubtask(updatedTasks);
  };

  return (props.trigger)?(
    <div className='popup'>
      <div className='popup-inner'>
          <MdCloseFullscreen className = 'close-btn' onClick={() => props.setTrigger(false)}/>
          {props.children}

          <hr className='my-3' />
          <form>
            <li
              className={`
                relative flex items-center py-2 px-3 my-1
                font-medium rounded-md cursor-pointer
                transition-colors group text-base text-gray-400
            `}
            onClick={() =>handleAddSubtask()}
            >
              {subtask.length >= 1 ? (""): (
                <div style={{display: "flex", justifyContent: "center"}}>
                  <Plus size = {20} className='text-orange-700'/> 
                  <span>Add sub-task</span>
                </div>
              )}
              
            </li>
            {subtask.map((data,i)=>{
              return(
                <div>
                      <input 
                      value={data} 
                      onChange={e=>handleChange(e,i)} 
                      className='subtask-input' 
                      onSubmit={handleAddSubtask}
                      />
                      <button onClick={()=>handleDelete(i)}>x</button>
                </div>
              )
            })}
            {subtask.length !== 0 ?(
                <li
                className={`
                  relative flex items-center py-2  my-1
                  font-medium rounded-md cursor-pointer
                  transition-colors group text-base text-gray-400
              `}
              onClick={() =>handleAddSubtask()}
              >
                  <div style={{display: "flex", justifyContent: "left"}}>
                    <Plus size = {20} className='text-orange-700'/> 
                    <span>Add sub-task</span>
                  </div>
              </li>
              ):""}
            
          </form>
      </div>
    </div>
  ): "";

}

export default TaskPage