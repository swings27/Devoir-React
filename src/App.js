import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path ="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
