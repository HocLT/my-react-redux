import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login"></Route>
        <Route path="/dashboard"></Route>
        <Route path="*"></Route>
      </Routes>
    </Router>
  );
}
