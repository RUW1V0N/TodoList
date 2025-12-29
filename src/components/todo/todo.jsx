import { useState, useEffect } from "react"
import { AddingTaskForm } from "../form-add-task";
import { newTask } from "./newTask"
import { Search } from "../search";
import { TotalInfo } from "../total-info";
import { Tasks } from "../tasks-list";
import styles from "./todo.module.css"

export function Todo(){
  // вынести функцию в отдельный файл и сделать проверку на массив
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [];
  });
  const [taskTitle, setTaskTitle] = useState("");
  
  const  onAddTitleToTask = (event) => setTaskTitle(event.target.value);

  function addTask() {
    setTasks((prev) => [...prev, newTask(taskTitle)]); 
    setTaskTitle("");
    setSearchField("");
    }

  const [searchField, setSearchField] = useState("");

  // вынести в отдельный файл 
  const filterTasks = (event) => setSearchField(event.target.value);
  function searchFilter(tasks, searchField) {
    const filterField = searchField.trim().toLowerCase();

    if (filterField.length === 0) return tasks;

    return tasks.filter(({ title }) =>
      title.toLowerCase().includes(filterField)
    );
  }

  const searchedTasks = searchFilter(tasks, searchField);

  function deleteTask(id) {
    setTasks((prev)=> prev.filter((task) => task.id !== id));
  }

  // переписать через прев 
  function toggleCheckedTask(id, event) {
    const isToggleChecked = event.target.checked;
    setTasks(
      (prev) => prev.map((task) => {
        if (task.id === id) return  { ...task, isDone:isToggleChecked };
        return task;
      })
    );
  }

  function deleteAllTasks() {
    setTasks([]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
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