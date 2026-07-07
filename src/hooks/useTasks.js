import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import {TaskContext} from '../context/TaskContext'
import useTasksLocalStorage from './useTasksLocalStorage'

const useTasks = () => {
  const {
    savedTasks,
    saveTasks,
  } = useTasksLocalStorage()


  const [tasks, setTasks] = useState(savedTasks ?? [
    {id: 'task-1', title: 'Купить молоко', isDone: true},
    {id: 'task-2', title: 'Погладить кота', isDone: false},
    {id: 'task-3', title: 'Погладить кота ещё', isDone: false},
  ])

  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const newTaskInputRef = useRef(null)

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm('Вы уверены, что хотите всё удалить?')

    if (isConfirmed) {
      setTasks([])
    }
  }, [])

  const deleteTask = useCallback((taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }, [tasks])

  const toggleTaskId = useCallback((taskId, isDone) => {
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
        return {...task, isDone}
      }

      return task
    }))
  }, [tasks])

  const addTask = useCallback((title) => {
    const newTask = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title,
      isDone: false,
    }

    setTasks((prevTasks) => [...prevTasks, newTask])
    setNewTaskTitle('')
    setSearchQuery('')
    newTaskInputRef.current.focus()

  }, [])

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  useEffect(() => {
    newTaskInputRef.current.focus()
  }, [])

  const filteredTasks = useMemo( () => {
    const clearSeqrchQuery = searchQuery.trim().toLowerCase()

    return clearSeqrchQuery.length > 0
      ? tasks.filter(({title}) => title.toLowerCase().includes(clearSeqrchQuery))
      : null
  }, [searchQuery, tasks])

  return {
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskId,
    newTaskTitle,
    setNewTaskTitle,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask,
  }
}

export default useTasks