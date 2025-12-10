import InputForm from "./input";
import ButtonForm from "./button";

function FormAddTask() {
  
    return (
    <form className="form_adding_a_task">
      <InputForm
        className = "adding_task"
        autocompled = "off"
        placeholder = "New task title"
      />
      <ButtonForm
        className = "button_for_add"
        type = "submit">Add</ButtonForm>
    </form>
  );
}

export default FormAddTask