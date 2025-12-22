import { ButtonForm } from "../button";
import info_about_tasks_styles from './Panel_info_tasks.module.css'

export function Panel_info_tasks(props) {
    const { 
        tasks, 
        onDeleteAllTasks,
    } = props;

    const lengthTatalTasks = tasks.length;
    const hasTasks = tasks.length > 0;
    return (
        <div className={info_about_tasks_styles.infoTotalTasks}>
            <span className="info-total-tasks" tasks={tasks}>
            Total tasks: {lengthTatalTasks}
            </span>
            {hasTasks &&
                <ButtonForm 
                    className="info-delete-all" 
                    type="button" 
                    onClick = {() => {
                        onDeleteAllTasks();
                    }} > Delete All </ButtonForm>
            }
        </div>
    );
}