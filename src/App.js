import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='h-screen bg-prussian-blue max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/projects' element={<Project />} />
          <Route exact path='/contact-me' element={<Contact />} />
          <Route path='*' element={<div></div>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
