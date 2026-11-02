import { useState, type FormEvent } from 'react'

type TodoFormProps = {
  onAdd: (text: string) => void
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmed = text.trim()
    if (!trimmed) {
      setError('Введите текст задачи')
      return
    }

    onAdd(trimmed)
    setText('')
    setError('')
  }

  return (
    <div className="todo-form-block">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.target.value)
            if (error) setError('')
          }}
          placeholder="Новая задача"
          aria-label="Текст задачи"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'todo-form-error' : undefined}
          className={error ? 'todo-form__input--error' : undefined}
        />
        <button type="submit">Добавить</button>
      </form>
      <p
        id="todo-form-error"
        className="todo-form__error"
        role={error ? 'alert' : undefined}
        aria-live="polite"
      >
        {error || '\u00A0'}
      </p>
    </div>
  )
}
