import FormAddTask from "./formAddTask" /* я не понимаю , просто гит решил сохранить файл с маленьким регистром и профиг что его нет */
import ListTasks from "./ListTasks";

function Todo(){
  const tasks = [
    {id: "1", title: "drink beer", isDone: false},
    {id: "2", title: "2 drink beer", isDone: true}
  ]
    return (
      <div className="todo">
        <label className="header__label">To Do List</label>
        <FormAddTask />
        <ListTasks tasks = {tasks}/>
      </div>
    );
}

export default Todo