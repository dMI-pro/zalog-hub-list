import type { TodoFilter as TodoFilterType } from '../types'

type FilterOption = {
  value: TodoFilterType
  label: string
}

const FILTERS: FilterOption[] = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'completed', label: 'Выполненные' },
]

type TodoFilterProps = {
  value: TodoFilterType
  onChange: (filter: TodoFilterType) => void
}

export function TodoFilter({ value, onChange }: TodoFilterProps) {
  return (
    <div className="todo-filter" role="group" aria-label="Фильтр задач">
      {FILTERS.map((filter) => (
        <button
          key={filter.value}
          type="button"
          className={`todo-filter__button${value === filter.value ? ' todo-filter__button--active' : ''}`}
          onClick={() => onChange(filter.value)}
          aria-pressed={value === filter.value}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
