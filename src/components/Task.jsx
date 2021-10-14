import React from 'react';
import { TaskListContext } from '../context/TaskListContext';

const Task = ({ task }) => {

  const { removeTask, findItem } = React.useContext(TaskListContext);

  return (
    <li className="list-item">
      <span>{task.title}</span>
      <button className="btn-delete tas=k-btn" onClick={() => removeTask(task.id)}>
        delete
      </button>
      <button className="btn-edit tas=k-btn" onClick={() => findItem(task.id)}>
        edit
      </button>
    </li>
  )
}

export default Task;