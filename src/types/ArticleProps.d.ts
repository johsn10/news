import { enhancedImages } from "@sveltejs/enhanced-img";

export interface ArticleProps {
    title: string,
    body: string,
    imageUrl: string,
    articleUrl: string,
};