import styles from '../../globals.module.css';
import Link from 'next/link';

export function MemberCard({ student, bio, studentID }) {
  const newStudent = student.toUpperCase();

  return (
    <div className={styles.cardLink}>
      <div className={styles.memberCard}>
        <img src={`/students/${newStudent}.jpeg`} alt={newStudent} className={styles.cardImage} />
        <h4 className={styles.cardStudent1}><strong>{newStudent}</strong></h4>
        <span className={styles.breakLine}></span>
        <p className={styles.cardBio}>{bio}</p>
      </div>
    </div>
  );
}
