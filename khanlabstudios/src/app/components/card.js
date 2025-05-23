import styles from '../../globals.module.css';
import { TransitionLink } from './transitionlink';

export function Storycard({title, student, date, storyID, summary}) {
    let newStudent = student.toUpperCase();
    return (
      <div id={styles.storyCard} className={styles.cardClass}> 
          <div className={styles.smallContainer}>
            <h4 className={styles.cardStudent}><strong>{newStudent}</strong></h4><span className={styles.breakLine}></span>
            <p className={styles.cardDate}>{date}</p><span className={styles.breakLine}></span>
            <h1 className={styles.cardTitle}><strong>{title}</strong></h1><span className={styles.breakLine}></span>
            <p className={styles.cardSummary}>{summary}</p><span className={styles.breakLine}></span>
            <TransitionLink href={`/stories/${storyID}`} className={styles.link}><button className={styles.cardButton}><strong>EXPLORE</strong></button></TransitionLink>
            <span className={styles.breakLine}></span>
          </div>
      </div>
    );
}
