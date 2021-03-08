// styles
import '../assets/styles/todoListStyle.css';

const ToDoList = (props) => {
    
    return (
        <div className='todos'>
            <h3>ToDo List</h3>
            {props.todos.map((todo, index) => {
                return (
                    <ToDo key={todo.id} index={index} todo={todo} toggle={props.toggleToDo} />
                )
            })
            }
        </div>
    );
};

const ToDo = (props) => {
    const toggleToDoStatus = () => {
        props.toggle(props.index);
    };

    return (
        <p className={props.todo.done ? 'done' : 'todo'}>
            <input
                type="checkbox"
                checked={props.todo.done}
                value={props.todo.done}
                onChange={toggleToDoStatus}
            />
            <span>
                {props.todo.task}
            </span>
        </p>
    );
};

export default ToDoList;