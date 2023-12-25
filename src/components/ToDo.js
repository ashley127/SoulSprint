import React from 'react'
import { useState } from 'react'
import ToDoForm from './ToDoForm'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";


function ToDo({todos, completeTodo, removeTodo, updatedTodos}) {
    const [edit, setEdit] = useState({
        id:null,
        value: ''
    })

    const submitUpdate = value => {
        updatedTodos(edit.id, value)
        setEdit({
            id:null,
            value:''
        })
    }

    if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
    }

  return todos.map((todo, index) =>(
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
    key = {index}
    >
        <div key = {todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
            <IoMdCloseCircleOutline 
                onClick={() => removeTodo(todo.id)}
                className='delete-icon'
            />
            <CiEdit 
                onClick={() => setEdit({id: todo.id, value: todo.text})}
                className='edit-icon'
            />
        </div>
    </div>
  ))
}

export default ToDo