# ZalogHub Todo

Тестовое задание для Junior Frontend Developer: список задач на React + TypeScript.

**Демо:** [https://dmi-pro.github.io/zalog-hub-list/](https://dmi-pro.github.io/zalog-hub-list/)

## Стек

- React + TypeScript
- Vite
- CSS (без UI-библиотек)

## Запуск

```bash
npm install
npm run dev
```

Сборка:

```bash
npm run build
npm run preview
```

## Деплой

Проект задеплоен на **GitHub Pages** через **GitHub Actions**.

- workflow: `.github/workflows/deploy.yml`
- деплой запускается автоматически при пуше в `main`
- демо: [https://dmi-pro.github.io/zalog-hub-list/](https://dmi-pro.github.io/zalog-hub-list/)

## Что реализовано

- добавление задачи через поле ввода и кнопку
- переключение статуса выполнена / невыполнена
- удаление задачи с подтверждением
- фильтры: все / активные / выполненные
- сохранение задач в `localStorage`
- валидация: пустую задачу или задачу из пробелов добавить нельзя, показывается ошибка
- выполненные задачи визуально отличаются от активных
- деплой на GitHub Pages (GitHub Actions)

## Время выполнения

~100 минут
