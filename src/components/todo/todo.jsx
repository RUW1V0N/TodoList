import { useState, useEffect } from "react"
import { FormAddTask } from "../form-add-task";
import { NewTask } from "./newTask"
import { Search } from "../search-panel";
import { Panel_info_tasks } from "../info-about-tasks";
import { ListTasks } from "../list-tasks";
import styles from "./todo.module.css"

export function Todo(){
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [];
  });
  const [titleAddTask, setTitleAddTask] = useState("");

  function addTask() {
    setTasks((prev) => [...prev, NewTask(titleAddTask)]); 
    setTitleAddTask("");
    setSearchField("");
  }

  const [searchField, setSearchField] = useState("");

  function searchFilter(tasks, searchField) {
    const filterField = searchField.trim().toLowerCase();

    if (filterField.length === 0) return tasks;

    return tasks.filter(({ title }) =>
      title.toLowerCase().includes(filterField)
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCheckedTask(id, isDone) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) return  { ...task, isDone };
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
      <FormAddTask
        addTask={addTask}
        titleAddTask={titleAddTask}
        setTitleAddTask={setTitleAddTask}
      />
      <Search 
        searchField={searchField} 
        setSearchField={setSearchField} />
      <Panel_info_tasks 
        tasks={tasks} 
        onDeleteAllTasks={deleteAllTasks} />
      <ListTasks
        hasTasks = {tasks.length>0}
        onSearchTask={searchFilter(tasks, searchField)}
        onToggleCheckedTask={toggleCheckedTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}