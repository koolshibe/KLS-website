import styles from '../../globals.module.css';
import Link from 'next/link';

export function Storycard({title, student, date, storyID}) {
    console.log(student)
    let newStudent = student.toUpperCase();
    return (
      <div id={styles.storyCard}> 
        <Link href={`/stories/${storyID}`}>
          <h4 className={styles.cardStudent}><strong>{newStudent}</strong></h4><span className={styles.breakLine}></span>
          <p className={styles.cardDate}>{date}</p><span className={styles.breakLine}></span>
          <h1 className={styles.cardTitle}><strong>{title}</strong></h1><span className={styles.breakLine}></span>
        </Link>
      </div>
    );
}
