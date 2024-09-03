import type { ArticleProps } from "$components/article/Article";
import { supabase } from "$lib/supabaseClient";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { PageData } from "./$types";
import { getImageUrl } from "$lib/utils";

export const load: PageServerLoad = async ({ params }): Promise<PageData> => {
    const response = await supabase.from("articles").select().eq("id", params.id);
    let article: ArticleProps;
    
    if (response.error) {
        console.log("error: ", response.error);
        error(500, "500 internt error")
    }
    if (!response.data[0]) {
        error(404, "Ingen slik artikkel");
    }
    
    let record = response.data[0];

    article = <ArticleProps>{
        createdAt: record.created_at,
        author: record.author,
        title: record.title,
        body: record.body,
        id: record.id,
        imageUrl: getImageUrl(record.id),
    };
    
    return { article };
}