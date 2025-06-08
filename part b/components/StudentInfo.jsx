import { useState } from 'react';
import styles from './StudentInfo.module.css';

export default function StudentInfo() {
  const [name, setName] = useState('');

  return (
    <div className={styles.form}>
      <label>
        Name:
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button className={styles.btn} onClick={() => alert(`Student: ${name}`)}>
        Submit
      </button>
    </div>
  );
}
