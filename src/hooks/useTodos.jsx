import { useEffect, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LS_TOKEN } from "../utils/constants"

// {
//   id: string,
//   status: boolean,
//   title: string,
//   description: string,
//   image: string, 
//   date: Data,               DataPiker
//   tags: string[]            Select
//   isPriority: boolean,      checkbox
// }

export const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const todoList = localStorage.getItem(LS_TOKEN)

    return todoList ? JSON.parse(todoList) : []
  })

  useEffect(() => {
    localStorage.setItem(LS_TOKEN, JSON.stringify(todos))
  }, [todos])

  const addToList = useCallback((values) => {
    const newTodo = {
      id: uuidv4(),
      status: false,
      ...values,
    }

    setTodos((prev) => [newTodo, ...prev])
  }, [])

  const updateTodo = useCallback((id, values) => {
    setTodos((prev) => prev.map(todo => {
      if (id === todo.id) return {
        ...values,
      }

      return todo;
    }))
  }, [])

  const deleteList = useCallback(() => {
    setTodos([])
  }, [])

  const deleteOneTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }, [])

  const updTodoStatus = useCallback((id) => {
    setTodos((prev) => prev.map(todo => {
      if (id === todo.id) return {
        ...todo,
        status: !todo.status
      }

      return todo;
    }))
  }, [])

  const getCurrentTodo = useCallback((id) => {
    return todos.find(todo => todo.id === id)
  }, [todos])


  return {
    todos,
    addToList,
    deleteList,
    deleteOneTodo,
    updTodoStatus,
    getCurrentTodo,
    updateTodo
  }
}
