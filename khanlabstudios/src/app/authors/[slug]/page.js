import { Storycard } from '@/app/components/card.js';
import { createClient } from '@/utils/supabase/server';

export async function storyfetch(author) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("authors")
        .select('author, title, stories!inner(published, id)')
        .eq('author', author.replaceAll('%20', ' '));
    
    console.log(data);
    console.log(error);
    return (
        data
    );
}

export default async function Page({ params }) {
    const { slug } = await params;
    console.log(slug)
    const data = await storyfetch(slug)

    return (
        <div key="exist">
            <h1>WOW! STORIES!</h1>
            {data.map((x, index) =>
                <div key={`${index}.${index}`} id={`${x['author']}.${x['title']}`}>
                    <Storycard key={`${index}.${index}.${index}`} title={x['title']}  date={x['stories']['published']} storyID={x['stories']['id']}/>
                </div>
            )}
        </div>
    )
}