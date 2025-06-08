import styles from './WelcomeCard.module.css';

export default function WelcomeCard({ name }) {
  return (
    <div className={styles.card}>
      <h2>Welcome, {name}!</h2>
    </div>
  );
}
