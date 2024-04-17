import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Week1A from './pages/week1/Week1A'
import Week1B from './pages/week1/Week1B'
import Counter from './pages/week1/Counter'
import Week2B from './pages/week2/Week2B'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/week1a" element={<Week1A/>}/>
        <Route path="/week1b" element={<Week1B/>}/>
        <Route path="/week2b" element={<Week2B/>}/>
      </Routes>
    </Router>
  );
}

export default App;
