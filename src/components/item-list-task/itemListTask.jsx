import { ButtonForm } from "../button";
import { InputForm } from "../field";
import { CrossIcon } from "../cross-icon";
import styles from "./item_list_task.module.css"

export function ItemList(props) {
    const {
        className,
        id,
        title,
        isDone,
        onToggleCheckedTask,
        onDeleteTask,
    } = props;

    return (
        <li 
        className={`${className} ${isDone ? styles.isDoneTask: ""}`} 
        id={id} 
        title={title}>
            <InputForm
                className={styles.checkedItemList}
                name="checked_item_list"
                type="checkbox"
                checked={isDone}
                onChange={(event) =>
                    onToggleCheckedTask(id, event.target.checked)
                }
            />
            <span className={styles.title}>{title}</span>

            <ButtonForm
                className={styles.deleteItemList}
                type="button"
                onClick={() => onDeleteTask(id)}
            >
                <CrossIcon />
            </ButtonForm>
        </li>
    );
}