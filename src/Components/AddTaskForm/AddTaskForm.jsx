import './AddTaskForm.scss'
import Field from '../Field'
import Button from '../Button'
import { useContext, useState } from 'react'
import { TaskContext } from '../../context/TaskContext'

const AddTaskForm = () => {
  const {
    addTask,
    newTaskTitle,
    setNewTaskTitle,
    newTaskInputRef
  } = useContext( TaskContext )

  const [error, setError] = useState()

  const clearNewTaskTitle = newTaskTitle.trim()
  const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0

  const onSubmit = (event) => {
    event.preventDefault()

    if (!isNewTaskTitleEmpty) {
      addTask(clearNewTaskTitle)
    }
  }

  const onInput = (event) => {
    const { value } = event.target
    const clearValue =  value.trim()
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0

    setNewTaskTitle(value)
    setError(hasOnlySpaces ? 'Задача не может быть пустой' : '')
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        label="Новая задача"
        id="new-task"
        value={newTaskTitle}
        error={error}
        onInput={onInput}
        ref={newTaskInputRef}
      />
      <Button
        type="submit"
        isDisabled={isNewTaskTitleEmpty}
      >
        Добавить
      </Button>
    </form>
  )
}

export default AddTaskForm