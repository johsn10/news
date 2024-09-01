import { enhancedImages } from "@sveltejs/enhanced-img";

export interface ArticleProps {
    title: string,
    body: string,
    createdAt: string,
    id: string,
    author: string,
};