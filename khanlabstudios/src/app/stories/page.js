
import styles from '@/globals.module.css';
import { Suspense } from 'react'; 
import { createClient } from '@/utils/supabase/server';
import Stories from '@/app/components/stories';

export async function storyfetch() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("stories")
        .select('title, published, state, id, authors!inner(author), summary')

    
    console.log(error)
    return (
        data
    );
}

export default function Page() {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const sidebarStyle = isMobile ? { display: 'none' } : {};
    const data = storyfetch();

    return (
        <div key="exist">
            <h1 className={styles.title}>Red String Stories</h1>
            <div>
                {/* <div className={`${styles.sidebar} ${styles.floatLeft}`} id='sidebar' style={sidebarStyle}>
                    <h3 style={
                        { textAlign: 'center', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'Roboto'}
                    }>Quick Access</h3>
                    {data.map((x, index) =>
                        <a className={styles.locallink} key={index} href={`#${x['author']}.${x['title']}}`}>{`${x['title']} - ${x['author']}`}</a>
                    )}
                </div> */}
                <div className={styles.floatRight}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Stories stories={data}/>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}