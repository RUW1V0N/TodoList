import { InputForm } from "../field";
import { ButtonForm } from "../button";
import styles from './form_adding_a_task.module.css'

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
    <form className={styles.formAddingTask} onSubmit={onSubmit}>
      <InputForm
        className = {styles.addingTask}
        name = "adding-task"
        autoComplete = "off"
        placeholder = "New task title"
        value = {titleAddTask}
        onChange = {(event) => setTitleAddTask(event.target.value)}
      />
      <ButtonForm
        className = {styles.buttonAdd}
        type = "submit">Add</ButtonForm>
    </form>
  );
}