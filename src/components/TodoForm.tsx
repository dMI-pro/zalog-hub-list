import { useState, type FormEvent } from 'react'

type TodoFormProps = {
  onAdd: (text: string) => void
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmed = text.trim()
    if (!trimmed) return

    onAdd(trimmed)
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Новая задача"
        aria-label="Текст задачи"
      />
      <button type="submit">Добавить</button>
    </form>
  )
}
