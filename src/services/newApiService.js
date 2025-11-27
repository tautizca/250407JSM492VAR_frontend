import axios from 'axios';
import NewsService from './NewsService';

const API_PORT = 81;

export async function fetchNews() {
  const resp = await axios.get('http://localhost:'+API_PORT+'/news');

  let jsonData = resp.data;

  const naujienos = new NewsService(jsonData);

  return naujienos.getList();
}

export default { fetchNews };
