import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <React.StrictMode>
      <Router basname='/react-portfolio/'>
        <div className='flex flex-col min-h-screen bg-prussian-blue mx-auto px-2 sm:px-6 lg:px-8'>
          <Header>
            <Navigation />
          </Header>
          <div className='max-w-7xl mx-auto mb-auto'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/projects' element={<Projects />} />
              <Route exact path='/contact-me' element={<Contact />} />
              <Route exact path='*' element={<div></div>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}
export default App;
