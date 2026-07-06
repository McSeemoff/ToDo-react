import './TodoList.scss'
import TodoItem from '../TodoItem/index.js'

const TodoList = (props) => {
  const {
    tasks = [],
    filteredTasks,
    firstIncompleteTaskRef,
    firstIncompleteTaskRefId,
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
  } = props

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
          ref={task.id === firstIncompleteTaskRefId ? firstIncompleteTaskRef : null}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
          {...task}
        />
      ))}
    </ul>
  )
}

export default TodoList