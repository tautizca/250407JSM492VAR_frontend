import './MainContent.css';
import {useState} from 'react';
import Sarasas from './Sarasas.jsx';

function MainContent() {
  const [duomenys, setDuomenys] = useState('testas');
  let [count, setCount] = useState(0);
  const [imgRodymas, toggleRodymas] = useState(true);

  const [sarasas, setSarasas] = useState([
    {title: 'pavadinimas', descripcion: 'aprasymas ...adsfasdf', img: '/img/foto1.jpg'},
    {title: 'antras', descripcion: 'antras aprasymas ...', img: '/img/foto2.jpg'},
    {title: 'trecias', descripcion: 'trecias aprasymas ...', img: '/img/foto3.jpg'},
    {title: 'ketvirtas', descripcion: 'ketvirtas aprasymas ...', img: '/img/foto4.jpg'},
    {title: 'penktas', descripcion: 'penktas aprasymas ...', img: '/img/foto5.jpg'},
    {title: 'sestas', descripcion: 'sestas aprasymas ...', img: '/img/foto6.jpg'}
  ]);

  const manoVeiksmai = () => {
    console.log('Veikiu');
    setDuomenys('bandymas');
    toggleRodymas(!imgRodymas);
  }

  const manoKitiVeiksmai = (duom) => {
    console.log('Kita: ' + duom);
    setDuomenys(duom);
  }

  return (
    <main className="main-content">
      <h2>Welcome to the Modern React App: {duomenys}</h2>
      <p>This is a beautiful, modern, and responsive React page layout using components.</p>
      <button onClick={manoVeiksmai} className=''>PASPAUSK {imgRodymas.toString()}</button>
      <button onClick={() => {manoKitiVeiksmai('asda');}}>Kitas BTN</button>
      <button onClick={() => {setCount(count += 1)}}>{count}</button>

      <Sarasas duomenys={sarasas} rodytiFoto={imgRodymas} />

    </main>
  );
}

export default MainContent;
