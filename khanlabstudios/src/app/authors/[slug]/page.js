import { Storycard } from '@/app/components/card.js';
import { createClient } from '@/utils/supabase/server';
import styles from '../../../globals.module.css';
import TransitionLink from '../../components/transitionlink.js';
import {Membercard} from '@/app/components/member.js';

export async function storyfetch(author) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("authors")
        .select('author, title, stories!inner(published, id, summary)')
        .eq('author', author.replaceAll('%20', ' '));

    return (
        data
    );
}

export async function authorfetch(author) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("team")
        .select()
        .eq('name', author.replaceAll('%20', ' '));

    console.log(data);

    return (
        data
    );
}

export default async function Page({ params }) {
    const { slug } = await params;
    console.log(slug);
    const data = await storyfetch(slug);
    const author = await authorfetch(slug);

    return (
        <div key="exist">
            
            <h1 className={styles.title}>{data.length > 0 ? data[0].author + "'s Stories" : 'Author not found'}</h1>
            <Membercard student={author[0]['name']} bio={author[0]['bio']} studentID={author[0]['id']} department={author[0]['department']} suppressHydrationWarning/>
            {data.map((x, index) =>
                <div key={`${index}.${index}`} id={`${x['author']}.${x['title']}`}>
                    <Storycard key={`${index}.${index}.${index}`} title={x['title']} summary={x['stories']['summary']}  date={x['stories']['published']} storyID={x['stories']['id']}/>
                </div>
            )}
        </div>
    )
}