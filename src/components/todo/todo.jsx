import { useState, useEffect } from "react"
import { AddingTaskForm } from "../form-add-task";
import { newTask } from "./newTask"
import { Search } from "../search";
import { searchFilter } from "./searchFilter"
import { TotalInfo } from "../total-info";
import { Tasks } from "../tasks-list";
import styles from "./todo.module.css"

export function Todo(){

  function onSavedTasks(){
    const savedTasks = localStorage.getItem("task");
    
    if(savedTasks) return JSON.parse(savedTasks);
    
    return [];
  }

  const [tasks, setTasks] = useState(onSavedTasks);

  // add Task
  const [taskTitle, setTaskTitle] = useState("");  
  const  onAddTitleToTask = (event) => setTaskTitle(event.target.value);

  function addTask() {
    if(!taskTitle.trim()) return setTaskTitle("") ;
    setTasks((prev) => [...prev, newTask(taskTitle)]); 
    setTaskTitle("");
    setSearchField("");
    }

    
   // search 
  const [searchField, setSearchField] = useState("");
  const filterTasks = (event) => setSearchField(event.target.value);
  const searchedTasks = searchFilter(tasks, searchField);
  
  // delete task
  function deleteTask(id) {
    setTasks((prev)=> prev.filter((task) => task.id !== id));
  }
  
  function deleteAllTasks() {
    setTasks([]);
  }

  // change checked in task
  function toggleCheckedTask(id, event) {
    const isToggleChecked = event.target.checked;
    setTasks(
      (prev) => prev.map((task) => {
        if (task.id === id) return  { ...task, isDone:isToggleChecked };
        return task;
      })
    );
  }

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={styles.todo}>
      <h1 className={styles.headerLabel}>To Do List</h1>
      <AddingTaskForm
        addTask={addTask}
        taskTitle={taskTitle}
        onAddTitleToTask = {onAddTitleToTask}
      />
      <Search 
        onSearchFilter 
        onFilterTasks = {filterTasks}
        searchField={searchField} />
      <TotalInfo 
        tasks={tasks} 
        onDeleteAllTasks={deleteAllTasks} />
      <Tasks
        searchedTasks={searchedTasks}
        onToggleCheckedTask={toggleCheckedTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}