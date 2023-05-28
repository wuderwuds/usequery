// import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Outlet, useNavigate, useParams } from "react-router-dom"
// import { TodosHelpersContext } from "../../context/TodosContext"

export const CurrentTodo = () => {
  const navigate = useNavigate()
  const { idOfTodo } = useParams()
  // const { getCurrentTodo } = useContext(TodosHelpersContext)
// const [oneTodo, setOneTodo] = useState('')

const {data: oneTodo, isError, error, isLoading, refetch} = useQuery({
  queryKey: ['getCurrentTodo', idOfTodo ],
  // initialData: [],
  queryFn: async () => {
    const res = await fetch(`http://localhost:3007/todo/${idOfTodo}`)
    const recponce = await res.json()
    return JSON.stringify(recponce);
  }
})
if (isError) return <p>Произошла ошибка: {error}</p>

if (isLoading) return <p>Загрузка...</p>  


// useEffect(() => {
//   const fetchData = async ()=>{
// const res = await fetch(`http://localhost:3007/todo/${idOfTodo}`)
// const recponce = await res.json()
// setOneTodo(JSON.stringify(recponce))
//   }
//   fetchData();
// }, [idOfTodo])

  return (
    <>
      <div>Вы находитесь на конкретной странице тудушки</div>
      <p>{oneTodo}</p>
      <button className="btn btn-primary" onClick={() => navigate('update')}>Редактировать</button>
      <button className="btn btn-success" onClick={() => navigate(-1)}>Назад</button>
      <Outlet />
    </>
  )
}
