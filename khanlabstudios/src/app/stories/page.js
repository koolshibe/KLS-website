import { storyfetch } from './fetch.js';
import { Storycard } from '@/app/components/card.js';
import styles from '@/globals.module.css';

export default async function Page() {
    const data = await storyfetch();

    return (
        <div>
            <h1>WOW! STORIES!</h1>
            <div>
                <div id={styles.sidebar} className={styles.floatLeft}>
                    {data.map((x, index) =>
                        <a className={styles.locallink} key={index} href={`#${x['author']}.${x['title']}}`}>{`${x['author']}.${x['title']}`}</a>
                    )}
                </div>
                <div className={styles.floatRight}>
                    {data.map((x, index) =>
                        <div key={`${index}.${index}`} id={`${x['author']}.${x['title']}}`}>
                            <Storycard key={`${index}.${index}.${index}`} title={x['title']} student={x['author']} date={x['published']} storyID={x['id']}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}