import { storyfetch } from './fetch.js';
import { Storycard } from '@/app/components/card.js';

export default async function Page({ params }) {
    const { slug } = await params;

    const data = await storyfetch(slug)

    return (
        <div key="exist">
            <h1>WOW! STORIES!</h1>
            {data.map((x, index) =>
                <div key={`${index}.${index}`} id={`${x['author']}.${x['title']}`}>
                    <Storycard key={`${index}.${index}.${index}`} title={x['title']} student={x['author']} date={x['published']} storyID={x['id']}/>
                </div>
            )}
        </div>
    )
}