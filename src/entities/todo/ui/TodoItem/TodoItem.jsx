import { memo, useContext} from 'react'
import clsx from 'clsx'
import {TaskContext} from '@/entities/todo'
import RouterLink from '@/shared/ui/RouterLink'
import './TodoItem.scss'
import {highlightCaseInsensitive} from '@/shared/utils/highlight'

const TodoItem = (props) => {
  const {
    className = '',
    id,
    title,
    isDone,
  } = props

  const {
    firstIncompleteTaskRef,
    firstIncompleteTaskRefId,
    deleteTask,
    toggleTaskId,
    disappearingTaskId,
    appearingTaskId,
    searchQuery,
  } = useContext(TaskContext)

  const highlightedTitle = highlightCaseInsensitive(title, searchQuery)

  return (
    <li
      className={clsx(
        'todo-item',
        className,
        disappearingTaskId === id ? 'is-disappearing' : '',
        appearingTaskId === id ? 'is-appearing' : ''
      )}
      ref={id === firstIncompleteTaskRefId ? firstIncompleteTaskRef : null}>
      <input
        className="todo-item__checkbox"
        id={id}
        type="checkbox"
        checked={isDone}
        onChange={(event) => toggleTaskId(id, event.target.checked)}
      />
      <label
        className="todo-item__label visually-hidden"
        htmlFor={id}
      >
        {title}
      </label>
      <RouterLink to={`/tasks/${id}`} aria-label="Task detail page">
        {/*{title}*/}
        <span dangerouslySetInnerHTML={{__html: highlightedTitle}} />
      </RouterLink>
      <button
        className="todo-item__delete-button"
        aria-label="Delete"
        title="Delete"
        onClick={() => deleteTask(id)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  )
}

export default memo(TodoItem)