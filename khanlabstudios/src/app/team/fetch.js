'use server'

import { createClient } from '@/utils/supabase/server';

export async function storyfetch() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("team")
        .select()

    return (
        data
    );
}