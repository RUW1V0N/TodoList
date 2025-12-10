import ButtonForm from "./button";
import InputForm from "./input";

function ItemList(props){
    const {
        className = "",
        id = "",
        title = "",
        isDone,
    } = props;
    
    return(
        <li 
            className={className}
            id={id}
            title={title}
        >
        <InputForm
            className = "checked_item_list"
            type = "checkbox"
            checked = {isDone}
        />
        {title}

        <ButtonForm
            className = "delete_item_list"
            type = "button"></ButtonForm>
        </li>

    )
}

export default ItemList