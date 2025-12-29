import { ItemList } from '../item-list-task';
import styles from './list_tasks.module.css'

export function ListTasks(props) {
  const { 
    hasTasks,
    onSearchTask,
    onToggleCheckedTask,
    onDeleteTask,
  } = props;

  const isFilterTask = onSearchTask?.length === 0;

  if (!hasTasks) {
    return <div className={styles.noTasksListTask}>No tasks yet</div>;
  }
  
  if(isFilterTask){
    return <div className={styles.noTasksListTask}>Nothing found</div>;
  }

  return (
    <ul className={styles.listTask}>
      {onSearchTask.map((task) => (
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