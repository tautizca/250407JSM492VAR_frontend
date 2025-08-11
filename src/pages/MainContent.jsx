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
    <main className="rounded-xl bg-white shadow border border-slate-200 p-6 min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-2 text-slate-800">Welcome to the Modern React App: {duomenys}</h2>
      <p className="text-slate-600 mb-4">This is a beautiful, modern, and responsive React page layout using components.</p>
      <div className="flex flex-wrap gap-3 mb-6">
        <button onClick={manoVeiksmai} className="px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition">PASPAUSK {imgRodymas.toString()}</button>
        <button onClick={() => {manoKitiVeiksmai('asda');}} className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition">Kitas BTN</button>
        <button onClick={() => {setCount(count += 1)}} className="px-4 py-2 rounded-lg bg-slate-700 text-white hover:bg-slate-800 transition">{count}</button>
      </div>

      <Sarasas duomenys={sarasas} rodytiFoto={imgRodymas} salinimoEventas={salinimas} />

    </main>
  );
}

export default MainContent;
