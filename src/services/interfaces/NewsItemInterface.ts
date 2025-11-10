export interface NewsItemInterface {
    title: string;
    content: string;
    slug: string;
    excerpt: string;
    readTime: number;
    date: string;
    // @TODO: Refactor comments and split into separate interface
    comments: [
        {
            owner: string;
            text: string;
            date: string;
        }
    ]
}
