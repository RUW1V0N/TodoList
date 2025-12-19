import InputForm from "./input";
import ButtonForm from "./button";

function FormAddTask(props) {
    const {
      addTask,
      titleAddTask ,
      setTitleAddTask
     } = props;
    
    function onSubmit(event){
      event.preventDefault();
      addTask();
    }
    return (
    <form className="form-adding-a-task" onSubmit={onSubmit}>
      <InputForm
        className = "adding-task"
        name = "adding-task"
        autoComplete = "off"
        placeholder = "New task title"
        value = {titleAddTask}
        onChange = {(event) => setTitleAddTask(event.target.value)}
      />
      <ButtonForm
        className = "button-for-add"
        type = "submit">Add</ButtonForm>
    </form>
  );
}

export default FormAddTask