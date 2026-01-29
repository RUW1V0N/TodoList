import { CrossIcon } from '../cross-icon';
import styles from './tasks.module.css';

export function ItemList(props) {
  const {
    className,
    task: { id, title, isDone },
    onToggleCheckedTask,
    onDeleteTask,
  } = props;

  return (
    <li className={`${className} ${isDone ? styles.isDoneTask : ''}`} id={id} title={title}>
      <input
        className={styles.checkedItemList}
        name="checked_item_list"
        type="checkbox"
        checked={isDone}
        onChange={(event) => onToggleCheckedTask(id, event)}
      />
      <span className={styles.title}>{title}</span>

      <button className={styles.deleteItemList} type="button" onClick={() => onDeleteTask(id)}>
        <CrossIcon />
      </button>
    </li>
  );
}
