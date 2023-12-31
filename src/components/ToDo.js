import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { IoMdOpen } from "react-icons/io";
import { Link } from "react-router-dom";

import TaskPage from '../pages/TaskPage';

function Todo({ todos, complete, remove, update})
{
  const [buttonPopup, setButtonPopup] = useState(false); 
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  
    const submitUpdate = value => {
      update(edit.id, value);
      setEdit({
        id: null,
        value: ''
      });
    };
  
    if (edit.id) {
      return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }
  
      return todos.map((todo, index) => (
        <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
        >
          <div key={todo.id} onClick={() => complete(todo.id)}>
            {todo.text}
          </div>
          <div className='icons'>
            <IoMdCloseCircleOutline 
              onClick={() => remove(todo.id)}
              className='delete-icon'
            />
            <MdOutlineEdit 
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className='edit-icon'
            />
            <Link to = "/task">
              <IoMdOpen onClick={() => setButtonPopup(true)}/> 
            </Link>
            <TaskPage trigger = {buttonPopup}>
                  <h2>My popup</h2>
                  <p>Some content here about the task (subtasks and ai features)</p>
            </TaskPage>
          </div>
          
        </div>
      ));
    };
export default Todo;