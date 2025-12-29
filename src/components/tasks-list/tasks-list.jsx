import { ItemList } from '../tasks';
import styles from './tasks-list.module.css'

export function Tasks(props) {
  const { 
    searchedTasks,
    onToggleCheckedTask,
    onDeleteTask,
  } = props;

  if (!searchedTasks.length) {
    return <div className={styles.noTasksListTask}>No tasks</div>;
  }
  
  return (
    <ul className={styles.listTask}>
      {searchedTasks.map((task) => (
        <ItemList
          key={task.id}
          className={styles.taskOnList}
          task = {task}
          onToggleCheckedTask = {onToggleCheckedTask}
          onDeleteTask = {onDeleteTask}
        />
      ))}
    </ul>
  );
}