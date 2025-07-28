import Header from './components/Header';
import Aside from './components/Aside';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="app-layout">
      <Header />
      <div className="main-area">
        <Aside />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
