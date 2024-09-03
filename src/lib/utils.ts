export function getImageUrl(id: string): string {
    let recource = "https://wibelkkoojtxnxwhxoea.supabase.co/storage/v1/object/public/images/";
    return recource + id + ".avif"
}