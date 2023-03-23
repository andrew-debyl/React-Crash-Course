import './Todo.css'

function Todo(props) {
       
    return (
        <div className='todo'>
            <p>{props.title}</p>
            <button onClick={props.onTodoDelete}>Delete</button>
        </div>
    )
}

export default Todo;