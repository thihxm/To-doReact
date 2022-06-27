import { Trash } from 'phosphor-react';
import { useState, MouseEvent } from 'react';
import styles from './TodoItem.module.css';

export function TodoItem() {
  const [checked, setChecked] = useState(false)

  const handleCheckTodo = (event: MouseEvent<HTMLInputElement>) => {
    setChecked((currState) => !currState)
  }

  return (
    <div className={styles.todoItem}>
      <input type="checkbox" checked={checked} onClick={handleCheckTodo} />
      <p className={checked ? styles.textDisabled : ''}>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </p>
      <button className={styles.remove} title='Remove todo'>
        <Trash size={14} weight='bold' />
      </button>
    </div>
  );
}