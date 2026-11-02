import { useState } from 'react'
import type { Todo } from '../types'

type TodoItemProps = {
  todo: Todo
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  const [isConfirming, setIsConfirming] = useState(false)

  return (
    <li className={`todo-item${todo.completed ? ' todo-item--completed' : ''}`}>
      <label className="todo-item__label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          disabled={isConfirming}
        />
        <span>{todo.text}</span>
      </label>

      {isConfirming ? (
        <div className="todo-item__confirm">
          <span className="todo-item__confirm-text">Удалить?</span>
          <button
            type="button"
            className="todo-item__confirm-yes"
            onClick={() => onRemove(todo.id)}
          >
            Да
          </button>
          <button
            type="button"
            className="todo-item__confirm-no"
            onClick={() => setIsConfirming(false)}
          >
            Нет
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="todo-item__remove"
          onClick={() => setIsConfirming(true)}
          aria-label="Удалить задачу"
        >
          Удалить
        </button>
      )}
    </li>
  )
}
