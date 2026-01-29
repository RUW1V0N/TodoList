import { useState, useEffect } from 'react';
import { AddingTaskForm } from '../form-add-task';
import { Search } from '../search';
import { filterTasks, createTask, getTasksFromStorage } from '../../lib/task';
import { TotalInfo } from '../total-info';
import { Tasks } from '../tasks-list';
import styles from './todo.module.css';

export function Todo() {
  const [tasks, setTasks] = useState(getTasksFromStorage);
  const [taskTitle, setTaskTitle] = useState('');
  const [searchField, setSearchField] = useState('');

  const onAddTitleToTask = (event) => setTaskTitle(event.target.value);

  function addTask() {
    const newTask = createTask(taskTitle);

    if (newTask) {
      setTasks((prev) => [...prev, newTask]);
    }

    setTaskTitle('');
    setSearchField('');
  }

  const onSearchFieldInput = (event) => setSearchField(event.target.value);
  const searchedTasks = filterTasks(tasks, searchField);

  // delete task
  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function deleteAllTasks() {
    setTasks([]);
  }

  // change checked in task
  function toggleCheckedTask(id, event) {
    const isToggleChecked = event.target.checked;
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) return { ...task, isDone: isToggleChecked };
        return task;
      }),
    );
  }

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={styles.todo}>
      <h1 className={styles.headerLabel}>To Do List</h1>
      <AddingTaskForm addTask={addTask} taskTitle={taskTitle} onAddTitleToTask={onAddTitleToTask} />
      <Search onSearchFilter onInput={onSearchFieldInput} searchField={searchField} />
      <TotalInfo tasks={tasks} onDeleteAllTasks={deleteAllTasks} />
      <Tasks
        searchedTasks={searchedTasks}
        onToggleCheckedTask={toggleCheckedTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}
