import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { getPublicUrl } from './utils/publicUrl';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import HowIWork from './pages/HowIWork';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollRevealObserver() {
  const location = useLocation();
  useEffect(() => {
    const els = document.querySelectorAll('[data-scroll-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { rootMargin: '0px 0px -120px 0px', threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router basename={getPublicUrl()}>
      <ScrollToTop />
      <ScrollRevealObserver />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-i-work" element={<HowIWork />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

