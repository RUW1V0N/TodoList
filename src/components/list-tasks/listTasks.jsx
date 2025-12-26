import { ItemList } from '../item-list-task';
import styles from './list_tasks.module.css'

export function ListTasks(props) {
  const { 
    tasks = [],
    onToggleCheckedTask,
    onDeleteTask,
  } = props;

  const hasTasks = tasks.length > 0;

  if (!hasTasks) {
    return <div className={styles.noTasksListTask}>No tasks</div>;
  }
  return (
    <ul className={styles.listTask}>
      {tasks.map((task) => (
        <ItemList
          key={task.id}
          className={styles.taskOnList}
          id={task.id}
          title={task.title}
          isDone={task.isDone}
          onToggleCheckedTask = {onToggleCheckedTask}
          onDeleteTask = {onDeleteTask}
        />
      ))}
    </ul>
  );
}