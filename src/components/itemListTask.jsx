import ButtonForm from "./button";
import InputForm from "./input";

function ItemList(props){
    const {
        className = "",
        id = "",
        title = "",
        isDone,
        onToggleCheckedTask,
        onDeleteTask,
    } = props;
    
    return(
        <li 
            className={className}
            id={id}
            title={title}
        >
        <InputForm
            className = "checked_item_list"
            name  = "checked_item_list"
            type = "checkbox"
            checked = {isDone}
            onChange = {({target}) => onToggleCheckedTask(id,target.checked)} /*не понимаю почему не работает с event но сокращение с  target работает */
        />
        {title}

        <ButtonForm
            className = "delete_item_list"
            type = "button"
            onClick = {() => onDeleteTask(id)}>
            </ButtonForm>
        </li>

    )
}

export default ItemList