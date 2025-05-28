import styles from '@/globals.module.css';
import { TransitionLink } from './transitionlink';

export function DepartmentCard({ name, head = '', description, deptID, members = [] }) {
    return (
        <div id={styles.departmentCard} className={styles.cardClass}>
            <div className={styles.smallContainer}>
                {head && (
                    <>
                        <h4 className={styles.cardHead}>
                            <strong>
                                <TransitionLink className={styles.transitionCard} href={`/faculty/${head}`}>
                                    {head.toUpperCase()}
                                </TransitionLink>
                            </strong>
                        </h4>
                        <span className={styles.breakLine}></span>
                    </>
                )}
                <h1 className={styles.cardTitle}>
                    <strong>{name}</strong>
                </h1>
                <span className={styles.breakLine}></span>
                <p className={styles.cardSummary}>{description}</p>
                <span className={styles.breakLine}></span>
                {members.length > 0 && (
                    <>
                        <p className={styles.cardMembers}>
                            <strong>Members: </strong>
                            {members.map((member, idx) => (
                                <TransitionLink
                                    className={styles.transitionCard}
                                    key={member}
                                    href={`/members/${member}`}
                                >
                                    {member.toUpperCase()}
                                    {idx < members.length - 1 ? ', ' : ''}
                                </TransitionLink>
                            ))}
                        </p>
                        <span className={styles.breakLine}></span>
                    </>
                )}
                <TransitionLink href={`/departments/${deptID}`} className={styles.link}>
                    <button className={styles.cardButton}>
                        <strong>EXPLORE</strong>
                    </button>
                </TransitionLink>
                <span className={styles.breakLine}></span>
            </div>
        </div>
    );
}