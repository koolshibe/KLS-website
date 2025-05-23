import { createClient } from '@/utils/supabase/server';
import * as fs from 'node:fs/promises';

export async function storyfetch(context) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("stories")
        .select()
        .eq('id', context)

    const story = ((await fs.readFile(`${process.cwd()}/public/${context}/story.txt`)))

    return (
        <div key="exist">
            <h1>{data[0]["title"]}</h1>
            <h2>{data[0]["author"]}</h2>
            <h2>{data[0]["published"]}</h2>
            <div>
                {story.toString().split(/\r\n|\n|\r/).map( (element, index) =>
                    (element.match(/\$img{()/)) ? <img key={index} src={`/${context}/${element.substring(5, element.length-1)}`}/> : <div key={index}>{element}</div>
                )}
            </div>
        </div>
    );
}

export default async function Page({params}) {
  const {slug} = await params;

  const data = storyfetch(slug);

  return (
    <div>
      {data}
    </div>
  );
}