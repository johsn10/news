import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "$env/static/private";

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_ANON_KEY;

// @ts-ignore
export const supabase = createClient(supabaseUrl, supabaseKey);

// @ts-ignore
export async function uploadFile(file) {
    const { error } = await supabase.storage.from("images").upload("", file, {
        upsert: true,
    });
    if (error) {
        console.log("Coulnd't upload file: ", error);
    }
}