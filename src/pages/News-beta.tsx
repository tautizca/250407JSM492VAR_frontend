import axios from "axios";
import { useState, useEffect} from "react";
import NewsItem from "../components/NewsItem";

export const NewsBeta = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:80/news")
            .then(response => {
                setNews(response.data);
            })
    });

    return (
        <>
            <h2>NAUJIENOS Beta:</h2>
            {news.map((element, index) => (
                <NewsItem key={index} item={element} />
            ))}
        </>
    );
}