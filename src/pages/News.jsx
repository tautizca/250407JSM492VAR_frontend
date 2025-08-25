import React, { useState, useEffect } from 'react';
import { News as NewsComponent } from '../components/News.jsx';
import { fetchNews } from '../services/newsService';

function News() {
  const [news, setNews] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchNews()
      .then((data) => {
        if (mounted) setNews(data);
      })
      .catch((err) => {
        if (mounted) setErrors(err);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const removeNewsItem = (item) => {
    setNews((prev) => prev.filter((i) => i !== item));
  };

  if (loading) return <div>Loading...</div>;
  if (errors) return <div>Error loading news</div>;

  return (
    <NewsComponent title="Latest News" newsList={news} handleDelete={removeNewsItem} />
  );
}

export default News;
