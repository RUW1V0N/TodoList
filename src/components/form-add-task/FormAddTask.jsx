import { InputForm } from "../field";
import { ButtonForm } from "../button";
import form_add_task_styles from './form_adding_a_task.module.css'

export function FormAddTask(props) {
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
    <form className={form_add_task_styles.formAddingTask} onSubmit={onSubmit}>
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