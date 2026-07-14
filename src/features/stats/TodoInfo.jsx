import {memo, useContext, useMemo} from 'react'
import { TaskContext} from '@/entities/todo'
import './TodoInfo.scss'

const TodoInfo = () => {
  const {
    tasks,
    deleteAllTasks
  } = useContext(TaskContext)

  const total = tasks.length
  const hasTasks = total > 0

  const done = useMemo(() => {
    return tasks.filter(({isDone}) => isDone).length
  }, [tasks])

  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Выполнено: {done} из {total}
      </div>

      {hasTasks && (
        <button
          className="todo__delete-all-button"
          type="button"
          onClick={deleteAllTasks}
        >
          Очистить
        </button>
      )}
    </div>
  )
}

export default memo(TodoInfo)