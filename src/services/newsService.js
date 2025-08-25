import axios from 'axios';

export async function fetchNews() {
  const resp = await axios.get('http://localhost:3000/news');
  return resp.data;
}

export default { fetchNews };
