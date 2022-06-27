import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { ClipboardText, PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'

import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { TodoItem } from './components/TodoItem'

interface Todo {
  id: string
  text: string
  completed: boolean
}

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [newTodoText, setNewTodoText] = useState('')

  const totalCompletedTodoList = todoList.filter(todo => todo.completed).length
  const todoCount = todoList.length

  const handleCreateNewTodo = (event: FormEvent) => {
    event.preventDefault()
    const newTodo = {
      id: uuidv4(),
      text: newTodoText,
      completed: false
    }
    setTodoList([...todoList, newTodo])
    setNewTodoText('')
  }

  const handleNewTodoTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')
    setNewTodoText(event.target.value.trimStart())
  }

  const handleInvalidTodoText = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('To-do text is required')
  }

  const isNewTodoTextEmpty = newTodoText.trim().length === 0

  const checkTodo = (id: string) => {
    setTodoList(todoList.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const deleteTodo = (id: string) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form className={styles.createTodoForm} onSubmit={handleCreateNewTodo}>
          <input
            type='text'
            placeholder='Add a new task'
            value={newTodoText}
            onChange={handleNewTodoTextChange}
            onInvalid={handleInvalidTodoText}
            required
          />
          <button type='submit' disabled={isNewTodoTextEmpty}>
            Add <PlusCircle size={16} weight='bold' />
          </button>
        </form>

        <main className={styles.todoListSection}>
          <div className={styles.todoListInfo}>
            <p>Created tasks <span>{todoCount}</span></p>
            <p>Done <span>{totalCompletedTodoList} of {todoCount}</span></p>
          </div>

          <div className={styles.todoList}>
            {todoCount === 0 ? (
              <div className={styles.emptyTodoList}>
                <ClipboardText size={56} weight='thin' />
                <div>
                  <h2>You don't have any tasks registered yet</h2>
                  <p>Create tasks and organize your to-do items</p>
                </div>
              </div>
              ) : (
                todoList.map(todo => (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onCheck={checkTodo}
                    onDelete={deleteTodo}
                  />
                ))
              )
            }
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
