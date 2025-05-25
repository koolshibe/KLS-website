'use server'

import { createClient } from '@/utils/supabase/server';
import * as fs from 'node:fs/promises'

export async function upload(formdata) {
    const supabase = await createClient()

    const {data, error } = await supabase  
        .from('stories')  
        .upsert({ title: formdata.get("title") }, { onConflict:'title' })
        .select()

    const dir = await fs.mkdir(`${process.cwd()}/public/${data[0]["id"]}`, {recursive:true});

    formdata.get("author").split(',').forEach(async element => {
        await supabase  
        .from('authors')  
        .upsert({ title: formdata.get("title"), author: element})
    })
    
    formdata.getAll("files").forEach(async element => {
        fs.appendFile(
            `${dir}/${element['name']}`,
            Buffer.from( await element.arrayBuffer() )
        )
    });
    

}
