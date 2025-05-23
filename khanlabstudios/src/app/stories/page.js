import { Storycard } from '@/app/components/card.js';
import styles from '@/globals.module.css';
import React from 'react'; import { createClient } from '@/utils/supabase/server';

export async function storyfetch() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("stories")
        .select()

    return (
        data
    );
}

export default async function Page() {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const sidebarStyle = isMobile ? { display: 'none' } : {};
    const data = await storyfetch();
    return (
        <div key="exist">
            <h1 className={styles.title}>Red String Stories</h1>
            <div>
                <div className={`${styles.sidebar} ${styles.floatLeft}`} id='sidebar' style={sidebarStyle}>
                    <h3 style={
                        { textAlign: 'center', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'Roboto'}
                    }>Quick Access</h3>
                    {data.map((x, index) =>
                        <a className={styles.locallink} key={index} href={`#${x['author']}.${x['title']}}`}>{`${x['title']} - ${x['author']}`}</a>
                    )}
                </div>
                <div className={styles.floatRight}>
                    {data.map((x, index) =>
                        <div key={`${index}.${index}`} id={`${x['author']}.${x['title']}}`}>
                            <Storycard key={`${index}.${index}.${index}`} summary={x['creator_statement']} title={x['title']} student={x['author']} date={x['published']} storyID={x['id']}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}