import type { ArticleProps } from "$components/article/Article";
import { supabase } from "$lib/supabaseClient";
import type { PageServerLoad } from "./$types";
import type { PageData } from "./$types";

export const load: PageServerLoad = async (): Promise<PageData> => {
    const response = await supabase.from("articles").select();
    let articles: ArticleProps[];
    
    if (response.error) {
        console.log("error: ", response.error);
        return { articles: [] };
    }

    let imagesUrl = "https://wibelkkoojtxnxwhxoea.supabase.co/storage/v1/object/public/images/";
    
    articles = response.data.map((record) => {
        return <ArticleProps> {
            createdAt: record.created_at,
            author: record.author,
            title: record.title,
            body: record.body,
            id: record.id,
            imageUrl: imagesUrl+record.id+".avif",
        };
    })
    return { articles };
}