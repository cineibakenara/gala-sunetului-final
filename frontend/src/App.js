import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Attractions from './components/Attractions';
import AboutUs from './components/AboutUs';
import logoImagine from './logo.png';
import './App.css';

function App() {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const serverIp = window.location.hostname;
    fetch(`https://gala-sunetului-final-production.up.railway.app/`)
      .then(response => response.json())
      .then(data => setEventData(data))
      .catch(error => console.error(error));
  }, []);

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const scrollToAttractions = () => {
    setTimeout(() => {
      const element = document.getElementById('atractii');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!eventData) {
    return <div className="loading">Se încarcă...</div>;
  }

  return (
    <Router>
      <div className="app-container">
        <header>
          <Link to="/" className="logo-container" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
            <img src={logoImagine} alt="Cashpuff Girls Logo" className="header-logo" />
            <div className="logo-text">Gala Sunetului</div>
          </Link>
          <nav>
            <Link to="/" onClick={scrollToTop}>Eveniment</Link>
          <Link to="/" onClick={scrollToAttractions}>Atracții</Link>
          <Link to="/about" onClick={scrollToTop}>Despre Noi</Link>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero data={eventData.hero} />
                <Attractions items={eventData.attractions} localArtists={eventData.localArtists} />
              </>
            } />
            <Route path="/about" element={<AboutUs data={eventData.about} />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2026 Gala Sunetului by Cashpuff Girls. Toate drepturile rezervate.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
