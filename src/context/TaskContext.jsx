import { createContext } from 'react'
import useTasks from '../hooks/useTasks'
import useIncompleteTaskScroll from '../hooks/useIncompleteTaskScroll'

export const TaskContext = createContext({})

export const TaskProvider = (props) => {
  const { children } = props

  const {
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
  } = useTasks()


  const {
    firstIncompleteTaskRef,
    firstIncompleteTaskRefId,
  } = useIncompleteTaskScroll(tasks)


  return (
    <TaskContext.Provider
    value = {{
      tasks,
      filteredTasks,
      firstIncompleteTaskRef,
      firstIncompleteTaskRefId,
      deleteTask,
      deleteAllTasks,
      toggleTaskId,
      newTaskTitle,
      setNewTaskTitle,
      searchQuery,
      setSearchQuery,
      newTaskInputRef,
      addTask,
    }}>
      {children}
  </TaskContext.Provider>
  )
}