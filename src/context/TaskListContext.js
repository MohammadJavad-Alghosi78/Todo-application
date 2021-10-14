import React from 'react';
import uuid from 'uuid';

export const TaskListContext = React.createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = React.useState(initialState);

  const [editItem, setEditItem] = React.useState(null);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid() }])
  }

  const removeTask = id => {
    setTasks(tasks?.filter(task => task.id !== id))
  }

  const clearList = () => {
    setTasks([])
  }

  const findItem = id => {
    const item = tasks.find(task => task.id === id);
    setEditItem(item)
  }

  const editTask = (title, id) => {
    const newTasks = tasks.map(task => task.id === id ? { title, id } : task);
    setTasks(newTasks)
    setEditItem(null)
  }

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  return (
    <TaskListContext.Provider value={{ tasks, addTask, removeTask, clearList, findItem, editTask, editItem }}>
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider;
