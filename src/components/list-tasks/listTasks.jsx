import { ItemList } from '../item-list-task';
import styles from './list_tasks.module.css'

export function ListTasks(props) {
  const { 
    tasks = [],
    onSearchTask,
    onToggleCheckedTask,
    onDeleteTask,
  } = props;

  const hasTasks = tasks.length > 0;
  const isFilterTask = onSearchTask?.length === 0;

  if (!hasTasks) {
    return <div className={styles.noTasksListTask}>No tasks yet</div>;
  }
  
  if(hasTasks && isFilterTask){
    return <div className={styles.noTasksListTask}>Nothing found</div>;
  }

  return (
    <ul className={styles.listTask}>
      {(onSearchTask ?? tasks).map((task) => (
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