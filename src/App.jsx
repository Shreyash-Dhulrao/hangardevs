import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar/navbar';
import Homepage from './pages/Home/homepage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* Always visible */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />

        {/* Add more routes below if needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
