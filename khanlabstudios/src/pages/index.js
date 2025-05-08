import styles from '../globals.module.css';

export default function Page() {
    return (
        <div className="container text-center mt-5">
            <h1 
                className={styles.title}>
                Welcome to Khan Lab Studios
            </h1>
            <p className={styles.description}>
                We are a team of passionate developers and designers.
            </p>
        </div>
    );
}