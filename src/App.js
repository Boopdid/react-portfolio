import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-prussian-blue mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <Header>
            <Navigation />
          </Header>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/contact-me' element={<Contact />} />
            <Route path='*' element={<div></div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
