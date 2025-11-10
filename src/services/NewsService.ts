import { NewsItem } from "./interfaces/NewsItemInterface";

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
