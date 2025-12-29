import { Input } from "../field";
import { Button } from "../button";
import styles from './adding-task-form.module.css'

export function AddingTaskForm(props) {
    const {
      onAddTitleToTask,
      addTask,
      taskTitle ,
    } = props;
    
    function onSubmit(event){
      event.preventDefault();
      addTask();
    }
    return (
    <form className={styles.formAddingTask} onSubmit={onSubmit}>
      <Input
        className = {styles.addingTask}
        name = "adding-task"
        autoComplete = "off"
        placeholder = "New task title"
        value = {taskTitle}
        onChange = {onAddTitleToTask}
      />
      <Button
        className = {styles.buttonAdd}
        type = "submit">Add</Button>
    </form>
  );
}