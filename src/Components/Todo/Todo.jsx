import { useState, useEffect, useRef } from 'react'
import './Todo.scss'
import AddTaskForm from '../AddTaskForm'
import SearchTaskForm from '../SearchTaskForm'
import TodoInfo from '../TodoInfo'
import TodoList from '../TodoList'
import Button from '../Button/index.js'

const Todo = (props) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')

    if (savedTasks) {
      return JSON.parse(savedTasks)
    }

    return [
      {id: 'task-1', title: 'Купить молоко', isDone: true},
      {id: 'task-2', title: 'Погладить кота', isDone: false},
      {id: 'task-3', title: 'Погладить кота ещё', isDone: false},
    ]
  })

  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const newTaskInputRef = useRef(null)
  const firstIncompleteTaskRef = useRef(null)
  const firstIncompleteTaskRefId = tasks.find(({ isDone }) => !isDone)?.id

  const deleteAllTasks = () => {
    const isConfirmed = confirm('Вы уверены, что хотите всё удалить?')

    if (isConfirmed) {
      setTasks([])
    }
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const toggleTaskId = (taskId, isDone) => {
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
        return {...task, isDone}
      }

      return task
    }))
  }

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      }

      setTasks([...tasks, newTask])
      setNewTaskTitle('')
      setSearchQuery('')
      newTaskInputRef.current.focus()

    }
    console.log('newTaskInputRef:', newTaskInputRef)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    newTaskInputRef.current.focus()
  }, [])

  const renderCount = useRef(0)

  useEffect(() => {
    renderCount.current++
    console.log(`Компонент Todo отрисовался ${renderCount.current} раза`)
  })

  const clearSeqrchQuery = searchQuery.trim().toLowerCase()
  const filteredTasks = clearSeqrchQuery.length > 0
    ? tasks.filter(({title}) => title.toLowerCase().includes(clearSeqrchQuery))
    : null

  return (
    <div className="todo">
      <h1 className="todo__title">Список дел</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        newTaskInputRef={newTaskInputRef}
      />
      <SearchTaskForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({isDone}) => isDone).length}
        ondeleteAllBattonClick={deleteAllTasks}
      />
      <Button
        onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({behavior: 'smooth'})}
      >
        Первая невыполненная задача
      </Button>
      <TodoList
        tasks={tasks}
        filteredTasks={filteredTasks}
        firstIncompleteTaskRef={firstIncompleteTaskRef}
        firstIncompleteTaskRefId={firstIncompleteTaskRefId}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskId}
      />
    </div>
  )
}

export default Todo