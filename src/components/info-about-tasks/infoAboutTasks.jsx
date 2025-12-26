import { ButtonForm } from "../button";
import styles from './Panel_info_tasks.module.css'

export function Panel_info_tasks(props) {
    const { 
        tasks, 
        onDeleteAllTasks,
    } = props;

    const lengthTatalTasks = tasks.length;
    const hasTasks = tasks.length > 0;
    return (
        <div className={styles.panelInfoTasks}>
            <span className={styles.infoTotalTasks} tasks={tasks}>
            Total tasks: {lengthTatalTasks}
            </span>
            {hasTasks &&
                <ButtonForm 
                    className={styles.infoDeleteAll} 
                    type="button" 
                    onClick = {() => {
                        onDeleteAllTasks();
                    }} > Delete All </ButtonForm>
            }
        </div>
    );
}