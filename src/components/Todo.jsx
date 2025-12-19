import { useState, useEffect } from "react";
import FormAddTask from "./FormAddTask";
import ListTasks from "./ListTasks";
import Panel_info_tasks from "./infoAboutTasks";

function Todo(){
  const [tasks, setTasks] = useState(() =>{
    const savedTasks = localStorage.getItem('tasks');
    if(savedTasks){
      return JSON.parse(savedTasks);
    }

    return [];
});
  const [titleAddTask, setTitleAddTask] = useState('');

  function addTask(){
    if(titleAddTask.trim().length > 0){
      const newTask = {
        id: Date.now().toString(),
        title: titleAddTask,
        isDone: false
      };
      setTasks((prev) => [...prev, newTask]);
      setTitleAddTask('');
    }
  }

  function deleteTask(id){
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
  }


  function toggleCheckedTask(id, isDone) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) return { ...task, isDone };
        return task;
      })
    );
  }

  function deleteAllTasks(){
    setTasks('');
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks]);
  
    return (
      <div className="todo">
        <h1 className="header__label">To Do List</h1>
        <FormAddTask 
          addTask = {addTask}
          titleAddTask = {titleAddTask}
          setTitleAddTask = {setTitleAddTask}
        />
        <Panel_info_tasks
          tasks = {tasks}
          onDeleteAllTasks = {deleteAllTasks}
        />
        <ListTasks 
          tasks = {tasks}
          onToggleCheckedTask = {toggleCheckedTask} 
          onDeleteTask = {deleteTask}
        />
      </div>
    );
}

export default Todo
