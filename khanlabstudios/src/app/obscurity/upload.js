'use server'
import { createClient } from '@/utils/supabase/server';
import * as fs from 'node:fs/promises'
import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';

export async function upload(formdata) {
    const supabase = await createClient()

    const {data, error } = await supabase  
        .from('stories')  
        .upsert({ title: formdata.get("title"),
            summary: formdata.get("summary")
        }, { onConflict:'title' })    
        .select()

    var bob = new Blob([formdata.get('story')], { type: 'text/plain' });
    var story = new File([bob], "story.txt", {type: "text/plain"});

    let blob = await put(`${data[0]["id"]}/story.txt`, story, {
      access: 'public',
    });

    formdata.get("author").split(',').forEach(async element => {
        await supabase  
        .from('authors')  
        .upsert({ title: formdata.get("title"), author: element})
    })
    


    

    formdata.getAll("files").forEach(async element => {
        blob = await put(`${data[0]["id"]}/${element['name']}`, element, {
            access: 'public',
        })
    });
}
