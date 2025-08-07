import './NewsItem.css';

const NewsItem = ({ item }) => {
  return (
    <div className="news-item">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
}

export default NewsItem;
