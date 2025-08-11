import {useState, useEffect} from 'react';
import {News as NewsComponent} from '../components/News.jsx';
import axios from 'axios';

function News() {

  const [news, setNews] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/news')
      .then(response => {
        setNews(response.data);
      }).catch(error => {
        setErrors([...errors, error]);
      });
  }, []);

  const removeNewsItem = (item) => {
    setNews(news.filter(i => i !== item));
  }

  return (
    <NewsComponent title="Latest News" newsList={news} handleDelete={removeNewsItem} />
  );
}

export default News;
