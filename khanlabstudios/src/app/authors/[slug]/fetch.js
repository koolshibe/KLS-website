'use server'

import { createClient } from '@/utils/supabase/server';

export async function storyfetch(author) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("stories")
        .select()
        .eq('author', author.replace('%20', " "))
    
    return (
        data
    );
}