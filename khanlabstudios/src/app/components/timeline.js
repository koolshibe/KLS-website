import styles from '@/globals.module.css';
import { createClient } from '@/utils/supabase/server';
import { TransitionLink } from './transitionlink';

async function fetchTimeline() {

    const supabase = await createClient();
    const { data, error } = await supabase
        .from('timeline')
        .select('id, stories!inner(id, title, summary)')
        .order('id', { ascending: false });

    if (error) {
        console.error('Error fetching bios:', error);
        return;
    }

    return data;
}

export async function Timeline() {

    const members = await fetchTimeline();

    return (
        <div className={styles.timeline}>
            {members.map((member,i) => (
                <div key={i} className={`${(i%2) ? styles.right : styles.left} ${styles.container}`}>
                    <div className={styles.content}>
                        <TransitionLink href={`/stories/${member['stories']['id']}`}>{member['stories']['title']}</TransitionLink>
                        <p>{member['stories']['summary']}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}