import Todo from './Components/Todo'
import { TaskProvider } from './context/TaskContext'

const App = () => {
  return (
    <TaskProvider>
      <Todo />
    </TaskProvider>
  )
}

export default App
