import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Week1_A from './pages/week1/Week1_a'
import Week1_B from './pages/week1/Week1_b'
import Counter from './pages/week1/Counter'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/week1_a" element={<Week1_A/>}/>
        <Route path="/week1_b" element={<Week1_B/>}/>
      </Routes>
    </Router>
  );
}

export default App;
