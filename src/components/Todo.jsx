import { useState, useEffect } from "react";
import FormAddTask from "./formAddTask" /* я не понимаю , просто гит решил сохранить файл с маленьким регистром и профиг что его нет */
import ListTasks from "./ListTasks";

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
        id:crypto?.randomUUID() ?? Date.now().toString(),
        title: titleAddTask,
        isDone: false
      }
      setTasks([...tasks, newTask]);
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

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks]);
  
    return (
      <div className="todo">
        <label className="header__label">To Do List</label>
        <FormAddTask 
          addTask = {addTask}
          titleAddTask = {titleAddTask}
          setTitleAddTask = {setTitleAddTask}
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
