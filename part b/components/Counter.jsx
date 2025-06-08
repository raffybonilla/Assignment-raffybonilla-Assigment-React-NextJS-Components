import { useState } from 'react';
import styles from './Counter.module.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <h3>Count: {count}</h3>
      <button className={styles.btn} onClick={() => setCount(count + 1)}>+</button>
      <button className={styles.btn} onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
