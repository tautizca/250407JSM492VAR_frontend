import './MainContent.css';
import {useState, useEffect} from 'react';
import Sarasas from '../components/Sarasas.jsx';

function MainContent() {
  const [duomenys, setDuomenys] = useState('testas');
  let [count, setCount] = useState(0);
  const [imgRodymas, toggleRodymas] = useState(true);

  const [sarasas, setSarasas] = useState([]);

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

  return (
    <main className="main-content">
      <h2>Welcome to the Modern React App: {duomenys}</h2>
      <p>This is a beautiful, modern, and responsive React page layout using components.</p>
      <button onClick={manoVeiksmai} className=''>PASPAUSK {imgRodymas.toString()}</button>
      <button onClick={() => {manoKitiVeiksmai('asda');}}>Kitas BTN</button>
      <button onClick={() => {setCount(count += 1)}}>{count}</button>

      <Sarasas duomenys={sarasas} rodytiFoto={imgRodymas} salinimoEventas={salinimas} />

    </main>
  );
}

export default MainContent;
