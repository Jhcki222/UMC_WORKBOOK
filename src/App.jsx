import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/week1/SignUp'
import Todo from './pages/week1/TodoList'
import Counter from './pages/week1/Counter'
import MoviePage from './pages/week2/MoviePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/MoviePage" element={<MoviePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
