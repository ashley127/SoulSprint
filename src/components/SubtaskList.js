import React, { useState } from 'react';

import Subtask from './Subtask';
import SubtaskForm from './SubtaskForm';



function SubtaskList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const update = (id, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === id ? newValue : item)));
  };

  const remove = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const complete = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <SubtaskForm onSubmit={addTodo} />
      <Subtask
        todos={todos}
        complete={complete}
        remove={remove}
      />
    </>
  );
}

export default SubtaskList;