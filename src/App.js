import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from './pages/HomePage';
import CreateProjectPage from './pages/CreateProjectPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/createProject" element={<CreateProjectPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
