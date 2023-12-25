import React from 'react'
import { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo';

function List() {
    const[todos, setTodos] = useState([])

    const addItem = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
      
          const newTodos = [todo, ...todos];
      
          setTodos(newTodos);
          //console.log(...todos);
        };

    const removeTodo = id=> {
        const removeArray = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArray)
    }

    const updatedTodos = (todoId, newValue) =>{
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const completeTodo = id =>
    {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
              todo.isComplete = !todo.isComplete;
            }
            return todo;
          });
          setTodos(updatedTodos);
        }

  return (
    <div>
        <h1>What's the plan for today?</h1>
        <ToDoForm onSubmit = {addItem}/>
        <ToDo 
        todos = {todos} 
        completeTodo = {completeTodo} 
        removeTodo={removeTodo}
        updatedTodos = {updatedTodos}
        />

    </div>
  )
}

export default List