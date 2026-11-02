import { useState } from 'react'
import './App.css'
import { TodoFilter } from './components/TodoFilter'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { useTodos } from './hooks/useTodos'
import type { Todo, TodoFilter as TodoFilterType } from './types'

function filterTodos(todos: Todo[], filter: TodoFilterType): Todo[] {
  switch (filter) {
    case 'active':
      return todos.filter((todo) => !todo.completed)
    case 'completed':
      return todos.filter((todo) => todo.completed)
    default:
      return todos
  }
}

function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos()
  const [filter, setFilter] = useState<TodoFilterType>('all')

  const filteredTodos = filterTodos(todos, filter)

  return (
    <main className="app">
      <h1>ZalogHub Todo</h1>
      <TodoForm onAdd={addTodo} />
      <div className="todo-toolbar">
        <TodoFilter value={filter} onChange={setFilter} />
        <p className="todo-count">Всего: {filteredTodos.length}</p>
      </div>
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onRemove={removeTodo}
      />
    </main>
  )
}

export default App
