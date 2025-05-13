import styles from '../../globals.module.css';
import { useRouter } from 'next/navigation'

export default function Story({title, student, summary, date, storyID}) {
    const router = useRouter();
    const path = '../stories/' + storyID;
    const handleClick = () => {
        router.push(path);
    };

    let newStudent = student.toUpperCase();
    return (
      <div id={styles.storyCard}> 
        <h4 className={styles.cardStudent}><strong>{newStudent}</strong></h4><span className={styles.breakLine}></span>
        <p className={styles.cardDate}>{date}</p><span className={styles.breakLine}></span>
        <h1 className={styles.cardTitle}><strong>{title}</strong></h1><span className={styles.breakLine}></span>
        <p className={styles.cardSummary}>{summary}</p><span className={styles.breakLine}></span>
        <button className={styles.cardButton} onClick={handleClick}><strong>EXPLORE</strong></button>
      </div>
    );
}
