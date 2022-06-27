import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { PlusCircle } from 'phosphor-react'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form className={styles.createTodoForm}>
          <input type='text' placeholder='Add a new task' />
          <button type='submit'>
            Add <PlusCircle size={16} weight='bold' />
          </button>
        </form>

        <main className={styles.todosSection}>
          <div className={styles.todosInfo}>
            <p>Created tasks <span>0</span></p>
            <p>Done <span>0</span></p>
          </div>

          <div className={styles.todoList}>

          </div>
        </main>
      </div>
    </div>
  )
}

export default App
