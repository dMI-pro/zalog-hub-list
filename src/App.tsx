import './App.css'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { useTodos } from './hooks/useTodos'

function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos()

  return (
    <main className="app">
      <h1>ZalogHub Todo</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
    </main>
  )
}

export default App
