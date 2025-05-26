import styles from '@/globals.module.css';
import { Map } from '@/app/components/map.js';

export default function Page() {
    return (
        <div className="text-center mt-5">
            <h1 
                className={styles.title}>
                Welcome to Red String Studios
            </h1>
            <p className={styles.description}>
                Aliquip est nostrud nulla duis eiusmod nostrud sunt proident veniam est elit cillum consequat ullamco. Anim ex nulla esse adipisicing dolore incididunt ex consequat. Amet ut adipisicing eiusmod sint ad irure fugiat sunt enim duis. Ipsum culpa eu ut id enim proident cillum anim. Aliquip commodo nulla esse nostrud duis sunt cupidatat id. Deserunt magna esse aliquip ea.

Lorem aliqua Lorem adipisicing dolore adipisicing minim laborum laboris occaecat proident consectetur sint minim. Laborum labore consectetur ipsum pariatur cillum ut fugiat quis proident. Fugiat non aute aliqua eiusmod aute est officia proident.

Consectetur fugiat exercitation magna laborum sunt id nulla deserunt ad ad incididunt in est. Nostrud proident minim aliqua aute ipsum aute pariatur dolor tempor nisi. Velit enim eiusmod nostrud dolor anim voluptate fugiat qui culpa incididunt magna excepteur commodo. Culpa magna consequat labore et aute. Exercitation incididunt do elit qui dolore laboris duis excepteur incididunt. Adipisicing esse tempor consequat cillum sit. Dolore veniam id proident anim in anim nostrud do et.
            </p>
            <Map></Map>
        </div>
    );
}