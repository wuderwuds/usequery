// import { useContext } from "react"
import { useNavigate } from "react-router-dom"
// import { TodosHelpersContext } from "../../context/TodosContext"

export const TodoItem = ({ todo, index }) => {
  // const { deleteOneTodo, updTodoStatus } = useContext(TodosHelpersContext)
  const navigate = useNavigate()

  const deleteOneTodo = async (id)=>{
    const res = await fetch(`http://localhost:3007/todo/${id}`, {
      method: 'DELETE'
    }
    )
    return;
  }

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className={todo.status ? "text-decoration-line-through" : ''} >
        {`${index + 1}.  `}{todo.title}
      </span>
      <div data-actions>
        <button
          type="submit"
          onClick={() => deleteOneTodo(todo.id)}
          className="btn btn-danger mx-2"
        >
          Удалить
        </button>
        {/* <button
          type="submit"
          onClick={() => updTodoStatus(todo.id)}
          className="btn btn-success"
        >
          Done
        </button> */}
        <button
          type="submit"
          onClick={() => navigate(`/todos/${todo.id}`)}
          className="btn btn-warning mx-2"
        >
          Go deeper
        </button>
      </div>
    </li>)
}
