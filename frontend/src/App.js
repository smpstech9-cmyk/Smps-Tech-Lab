import React from 'react';
import '@/index.css';
import '@/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Investor from './pages/Investor';
import Collaborate from './pages/Collaborate';
import Careers from './pages/Careers';
import Ecosystem from './pages/Ecosystem';
import Insights from './pages/Insights';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;