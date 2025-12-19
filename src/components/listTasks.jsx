import ItemList from "./itemListTask";

function ListTasks(props) {
  const { 
    tasks = [],
    onToggleCheckedTask,
    onDeleteTask,
  } = props;

  const hasTasks = tasks.length > 0;

  if (!hasTasks) {
    return <div className="no-tasks-list-task">No tasks</div>;
  }
  return (
    <ul className="list-task">
      {tasks.map((task) => (
        <ItemList
          key={task.id}
          className="task-on-list"
          id={task.id}
          title={task.title}
          isDone={task.isDone}
          onToggleCheckedTask = {onToggleCheckedTask}
          onDeleteTask = {onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default ListTasks;
