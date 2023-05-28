import { TodoList } from '../../components/TodoList/index'

import { useState } from 'react'

import { Modal } from '../../components/Modal'
import { CreateTodo } from '../../components/CreateTodo'
import { useQuery } from '@tanstack/react-query'

export const Todos = () => {
  // const todos = useContext(TodosContext)
  const [isModalOpen, setIsModalOpen] = useState(false)

// const [todos, setTodos] = useState([])

const {data: todos, isError, error, isLoading, refetch} = useQuery({
  queryKey: ['getTodos'],
  // initialData: [],
  queryFn: async () => {
    const res = await fetch('http://localhost:3007/todo')
    const recponce = await res.json()
    return recponce;
  }
})
if (isError) return <p>Произошла ошибка: {error}</p>

if (isLoading) return <p>Загрузка...</p>
// useEffect(() => {
//   const fetchData = async ()=>{
// const res = await fetch('http://localhost:3007/todo')
// const recponce = await res.json()
// setTodos(recponce)
//   }
//   fetchData();
// }, [])

const closeModal = () => {
  setIsModalOpen(false)
  refetch();
}

  return (
    <>
      <div className="d-flex justify-content-center mb-3">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="btn btn-success"
        >
          Создать новую todo
        </button>
      </div>
      {todos.length ? <TodoList todos={todos} /> : <p>TODO лист пока пуст...</p>}
      
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <CreateTodo closeModal={closeModal} />
      </Modal>
    </>
  )
}
