import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage.js';
import BlogPage from './pages/BlogPage';
import ProgramsPage from './pages/ProgramsPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
      </Routes>
    </div>
  );
}

export default App;
