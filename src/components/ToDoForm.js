import React from 'react'
import { useState } from 'react'

function ToDoForm(props) {
const[input, setInput] = useState('');

const handleInput = e =>{
    setInput(e.target.value);
}

const handleSubmit = e => {
    e.preventDefault();

    //props.onSubmit({
        //id:Math.floor(Math.random() * 10000),
        //text: input
    //})

    setInput('');
}

  return (
    <form className='to-do form' onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Add a todo' 
        value={input} 
        name = "text" 
        className = 'todo-input'
        onChange={handleInput}
        />
        <button className='to-do-button'> Add todo</button>
    </form>
  )
}

export default ToDoForm