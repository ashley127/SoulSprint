import React, { useState } from 'react';
import TaskPage from '../pages/TaskPage';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import TodoForm from './TodoForm';

function Subtask({subtask, complete, remove, update}) {
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
        return <TaskPage edit={edit} onSubmit={submitUpdate} />;
    }

        return subtask?.map((task, index) => (
            <div
                className={task.isComplete ? 'todo-row complete' : 'todo-row'}
                key={index}
            >
            <div key={task.id} onClick={() => complete(task.id)}>
                {task.text}
            </div>
            <div className='icons'>
                <IoMdCloseCircleOutline 
                    onClick={() => remove(task.id)}
                    className='delete-icon'
                />
                <MdOutlineEdit 
                    onClick={() => setEdit({ id: task.id, value: task.text })}
                    className='edit-icon'
                />
            </div>
            </div>
        ));
        };

export default Subtask