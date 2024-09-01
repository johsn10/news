import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "$env/static/private";

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_ANON_KEY;

// @ts-ignore
export const supabase = createClient(supabaseUrl, supabaseKey);