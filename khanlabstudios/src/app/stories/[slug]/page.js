import { createClient } from '@/utils/supabase/server';
import * as fs from 'node:fs/promises';
import styles from '../../../globals.module.css';

export async function storyfetch(context) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("stories")
        .select()
        .eq('id', context)

    const story = ((await fs.readFile(`${process.cwd()}/public/${context}/story.txt`)))

    return (
        <div key="exist">
            <h1 className={styles.storyTitle}>{data[0]["title"]}</h1>
            <h2 className={styles.storyAuthor}>{data[0]["author"]}</h2>
            <h2 className={styles.storyDate}>{data[0]["published"]}</h2>
            <div className={styles.storyText}>
                {story.toString().split(/\r\n|\n|\r/).map( (element, index) =>
                    (element.match(/\$img{()/)) ? <img className={styles.storyImage} key={index} src={`/${context}/${element.substring(5, element.length-1)}`}/> : <div key={index}>{element}</div>
                )}
            </div>
        </div>
    );
}

export default async function Page({params}) {
  const {slug} = await params;

  const data = storyfetch(slug);

  return (
    <div className={styles.storyBody}>
      {data}
    </div>
  );
}