import Header from './components/Header';
import Aside from './components/Aside';
import MainContent from './pages/MainContent';
import Footer from './components/Footer';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NotFound from './pages/NotFound';
import About from './pages/About';
import News from './pages/News';
import Contacts from './pages/Contacts';


function App() {
  return (
    <Router>
      <div className="app-layout">
        <ToastContainer />
        <Header title="MANO SVETAINE">Welcome to my website</Header>
        <div className="main-area">
          <Aside />
          <div className="content-area" style={{ padding: '20px', marginLeft: '254px' }}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </div>

        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
