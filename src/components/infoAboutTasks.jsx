import ButtonForm from "./button";

function Panel_info_tasks(props) {
    const { 
        tasks, 
        onDeleteAllTasks,
    } = props;

    const lengthTatalTasks = tasks.length;
    const hasTasks = tasks.length > 0;
    return (
        <div className="panel-info-tasks">
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

export default Panel_info_tasks