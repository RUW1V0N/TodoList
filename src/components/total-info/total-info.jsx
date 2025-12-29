import { Button } from "../button";
import styles from './total-info.module.css'

export function TotalInfo(props) {
    const { 
        tasks, 
        onDeleteAllTasks,
    } = props;

    const count = tasks.length;
    return (
        <div className={styles.panelInfoTasks}>
            <span className={styles.infoTotalTasks} tasks={tasks}>
            Total tasks: {count}
            </span>
            {!!count &&
                <Button 
                    className={styles.infoDeleteAll} 
                    type="button" 
                    onClick = {onDeleteAllTasks} > Delete All </Button>
            }
        </div>
    );
}