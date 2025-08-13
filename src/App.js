import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './pages/home';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Legals from './pages/legals';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/services" element={<Services />} />
        <Route path ="/portfolio" element={<Portfolio />} />
        <Route path ="/contact" element={<Contact />} />
        <Route path ="/mentionslegales" element={<Legals />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
