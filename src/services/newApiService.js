import axios from 'axios';
import NewsService from './NewsService';

export async function fetchNews() {
  const resp = await axios.get('http://localhost:3000/news');

  let jsonData = resp.data;

  const naujienos = new NewsService(jsonData);

  return naujienos.getList();
}

export default { fetchNews };
