import React from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = React.useContext(TaskListContext);

  const [title, setTitle] = React.useState('');

  const handleChange = e => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)
    }
  }

  React.useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      console.log(editItem)
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        type="text"
        onChange={handleChange}
        className="task-input"
        placeholder="Add Task ..."
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">{editItem ? "Edit Task" : "Add Task"}</button>
        <button className="btn add-task-btn" onClick={clearList}>Clear</button>
      </div>
    </form>
  )
}

export default TaskForm;