import NewsItem from "./NewsItem";

const News = ({title, newsList, handleDelete}) => {
  return (
    <div className="news">
      <h2>{title}</h2>
      <ul>
        {newsList.map((newsItem, index) => (
          <li key={index}>
            <NewsItem item={newsItem} />
            <button onClick={() => handleDelete(newsItem)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;