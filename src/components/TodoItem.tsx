import { Trash } from 'phosphor-react';
import { useState, MouseEvent, ChangeEvent } from 'react';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  id: string
  text: string
  completed: boolean
  onCheck: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({
  id,
  text,
  completed,
  onCheck,
  onDelete,
}: TodoItemProps) {
  const handleCheckTodo = (event: ChangeEvent<HTMLInputElement>) => {
    onCheck(id)
  }

  const handleDeleteTodo = (event: MouseEvent<HTMLButtonElement>) => {
    onDelete(id)
  }

  return (
    <div className={styles.todoItem}>
      <input type="checkbox" checked={completed} onChange={handleCheckTodo} />

      <p className={completed ? styles.textDisabled : ''}>
        {text}
      </p>

      <button
        className={styles.remove} 
        title='Remove todo'
        onClick={handleDeleteTodo}
      >
        <Trash size={14} weight='bold' />
      </button>
    </div>
  );
}