import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container" style={{ padding: 20, fontFamily: 'sans-serif' }}>
        <h1>GitHub User Search</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<UserDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
