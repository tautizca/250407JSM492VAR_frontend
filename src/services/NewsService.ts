import { NewsItem } from "./interfaces/newsItem";

class NewsService {
    private data: NewsItem[];
    
    constructor(data: NewsItem[]) {
        this.data = data;
    }

    getList(): NewsItem[] {
        return this.data;
    }
}

export default NewsService;
