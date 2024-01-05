import React, { useState, useEffect, useRef } from 'react';

function SubtaskForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
        id: Math.floor(Math.random() * 100000),
        text: input
        });
        setInput('');
    };
  return (
    <form onSubmit={handleSubmit} className='form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update task'
            value={input}
            onChange={handleChange}
            name='text'
            className='subtask-input edit'
            ref={inputRef}
            
          />
          <button onClick={handleSubmit} className='subtask-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='+ Add a subtask'
            value={input}
            onChange={handleChange}
            name='text'
            className='subtask-input'
            ref={inputRef}
          />
        </>
      )}
    </form>
  );
}

export default SubtaskForm