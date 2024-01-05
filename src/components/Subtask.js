import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";


function Subtask({ todos, complete, remove, update})
{
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
          className={todo.isComplete ? 'subtask-row complete' : 'subtask-row'}
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
        </div>
          
        </div>
      ));
    };
export default Subtask;