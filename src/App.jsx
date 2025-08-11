import Header from './components/Header';
import Aside from './components/Aside';
import MainContent from './pages/MainContent';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFound from './pages/NotFound';
import About from './pages/About';
import News from './pages/News';
import Contacts from './pages/Contacts';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
        <ToastContainer />
        <Header title="MANO SVETAINE">Welcome to my website</Header>
        <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto gap-6 px-4 sm:px-6 lg:px-8 py-6">
          <Aside />
          <div className="flex-1">
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
