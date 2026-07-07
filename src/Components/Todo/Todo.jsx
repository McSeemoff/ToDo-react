import { useContext } from 'react'
import './Todo.scss'
import AddTaskForm from '../AddTaskForm'
import SearchTaskForm from '../SearchTaskForm'
import TodoInfo from '../TodoInfo'
import TodoList from '../TodoList'
import Button from '../Button'
import {TaskContext} from '../../context/TaskContext'

const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TaskContext)

  return (
    <div className="todo">
      <h1 className="todo__title">Список дел</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <Button
        onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({behavior: 'smooth'})}
      >
        Первая невыполненная задача
      </Button>
      <TodoList />
    </div>
  )
}

export default Todo