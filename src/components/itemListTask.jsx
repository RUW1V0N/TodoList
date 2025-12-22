import ButtonForm from "./button";
import InputForm from "./input";
import {CrossIcon} from "./cross-icon";

export default function ItemList(props) {
    const {
        className,
        id,
        title,
        isDone,
        onToggleCheckedTask,
        onDeleteTask,
    } = props;

    return (
        <li className={className} id={id} title={title}>
            <InputForm
                className="checked-item-list"
                name="checked_item_list"
                type="checkbox"
                checked={isDone}
                onChange={(event) =>
                    onToggleCheckedTask(id, event.target.checked)
                }
            />
            <span>{title}</span>

            <ButtonForm
                className="delete-item-list"
                type="button"
                onClick={() => onDeleteTask(id)}
            >
                <CrossIcon />
            </ButtonForm>
        </li>
    );
}
