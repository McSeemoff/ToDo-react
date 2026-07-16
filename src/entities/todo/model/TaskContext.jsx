import {createContext, useMemo} from 'react'
import useTasks from './useTasks'
import useIncompleteTaskScroll from './useIncompleteTaskScroll'

export const TaskContext = createContext({})

export const TaskProvider = (props) => {
  const { children } = props

  const {
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskId,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask,
    disappearingTaskId,
    appearingTaskId,
  } = useTasks()


  const {
    firstIncompleteTaskRef,
    firstIncompleteTaskRefId,
  } = useIncompleteTaskScroll(tasks)

  const value = useMemo(() => ({
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskId,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask,
    disappearingTaskId,
    appearingTaskId,
    firstIncompleteTaskRef,
    firstIncompleteTaskRefId,
  }), [
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskId,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask,
    disappearingTaskId,
    appearingTaskId,
    firstIncompleteTaskRef,
    firstIncompleteTaskRefId,
  ])

  return (
    <TaskContext.Provider value = {value}>
      {children}
    </TaskContext.Provider>
  )
}