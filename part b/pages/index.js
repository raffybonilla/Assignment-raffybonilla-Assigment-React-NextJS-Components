import WelcomeCard from '../components/WelcomeCard';
import Counter from '../components/Counter';
import StudentInfo from '../components/StudentInfo';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <WelcomeCard name="Raffy" />
      <Counter />
      <StudentInfo />
    </main>
  );
}
