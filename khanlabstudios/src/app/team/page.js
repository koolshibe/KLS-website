import styles from '../../globals.module.css';
import {Membercard} from '@/app/components/member.js';
import { storyfetch } from './fetch.js';
export default async function Page() {
    const data = await storyfetch();
    return (
        <div className="container text-center mt-5">
            <h1 className={styles.title}>Meet Our Team</h1>
            {data.map((x, index) =>
                    <Membercard key={`${index}.${index}`} student={x['name']} bio={x['bio']} studentID={x['id']} department={x['department']} suppressHydrationWarning/>
            )}
            
        </div>
    );
}