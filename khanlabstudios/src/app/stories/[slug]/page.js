import { createClient } from '@/utils/supabase/server';
import styles from '@/globals.module.css';


export async function storyfetch(context) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("stories")
        .select()
        .eq('id', context)

    
    const url = `https://hb2d7h9foo6iagrh.public.blob.vercel-storage.com/${data[0]['id']}`;
    const story = ((await fetch(`${url}/story.txt`).then(response => response.text())))

    return (
        <div key="exist">
            <h1 className={styles.storyTitle}>{data[0]["title"]}</h1>
            <h2 className={styles.storyAuthor}>{data[0]["author"]}</h2>
            <h4 className={styles.storyDate}>{data[0]["published"]}</h4>
            <div className={styles.storyText}>
                {story.toString().split(/\r\n|\n|\r/).map( (element, index) =>
                    (element.match(/\$img{([^}]*)}/)) ? <img className={styles.storyImage} key={index} src={`${url}/${element.substring(5, element.length-1)}`}/> : <div key={index} dangerouslySetInnerHTML={{__html: element}}/>
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