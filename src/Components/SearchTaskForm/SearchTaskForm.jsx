import './SearchTaskForm.scss'
import Field from '../Field/index.js'
import { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'

const SearchTaskForm = () => {
  const {
    searchQuery,
    setSearchQuery,
  } = useContext( TaskContext )

  return (
    <form
      className="todo__form"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        className="todo__field"
        label="Поиск"
        id="search-task"
        type="search"
        value={searchQuery}
        onInput={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  )
}

export default SearchTaskForm