import './MainContent.css';
import {useState, useEffect} from 'react';
import Sarasas from './Sarasas.jsx';
import News from './News.jsx';
import axios from 'axios';

function MainContent() {
  const [duomenys, setDuomenys] = useState('testas');
  let [count, setCount] = useState(0);
  const [imgRodymas, toggleRodymas] = useState(true);

  const [sarasas, setSarasas] = useState([]);
  const [news, setNews] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/news')
      .then(response => {
        setSarasas(response.data);
        setNews(response.data);
      }).catch(error => {
        setErrors([...errors, error]);
      });
  }, []);


  useEffect(() => {
    console.log(count);

    return () => {
      console.log('Component unmounted');
    };
  }, [count]);

  const manoVeiksmai = () => {
    console.log('Veikiu');
    setDuomenys('bandymas');
    toggleRodymas(!imgRodymas);
  }

  const manoKitiVeiksmai = (duom) => {
    console.log('Kita: ' + duom);
    setDuomenys(duom);
  }

  const salinimas = (item) => {
    setSarasas(sarasas.filter(i => i !== item));
  }

  const removeNewsItem = (item) => {
    setNews(news.filter(i => i !== item));
  }

  return (
    <main className="main-content">
      {errors.length > 0 && <div>Error fetching data</div>}
      <h2>Welcome to the Modern React App: {duomenys}</h2>
      <p>This is a beautiful, modern, and responsive React page layout using components.</p>
      <button onClick={manoVeiksmai} className=''>PASPAUSK {imgRodymas.toString()}</button>
      <button onClick={() => {manoKitiVeiksmai('asda');}}>Kitas BTN</button>
      <button onClick={() => {setCount(count += 1)}}>{count}</button>

      <Sarasas duomenys={sarasas} rodytiFoto={imgRodymas} salinimoEventas={salinimas} />

      <News title="Latest News" newsList={news} handleDelete={removeNewsItem} />

    </main>
  );
}

export default MainContent;
