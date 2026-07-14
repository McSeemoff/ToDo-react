import { memo, useContext } from 'react'
import './TodoList.scss'
import { TodoItem, TaskContext } from '@/entities/Todo'

const TodoList = () => {
  const {
    tasks,
    filteredTasks,
  } = useContext(TaskContext)

  const hasTasks = tasks.length > 0
  const isEmptyFilteredTasks = filteredTasks?.length === 0

  if(!hasTasks) {
    return (
      <div className="todo__empty-message">Задач пока нет</div>
    )
  }

  if (hasTasks && isEmptyFilteredTasks) {
    return (
      <div className="todo__empty-message">Задачи не найдены</div>
    )
  }

  return (
    <ul className="todo__list">
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem
          className="todo__item"
          key={task.id}
          {...task}
        />
      ))}
    </ul>
  )
}

export default memo(TodoList)