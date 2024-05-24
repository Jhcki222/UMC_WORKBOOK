import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/week1/SignUp';
import Todo from './pages/week1/TodoList';
import Counter from './pages/week1/Counter';
import MoviePage from './pages/week2/MoviePage';
import MainPage from './pages/week3/MainPage';
import PopularPage from './pages/week3/PopularPage';
import NowPlayingPage from './pages/week3/NowPlayingPage';
import TopRatedPage from './pages/week3/TopRatedPage';
import UpcomingPage from './pages/week3/Upcoming';
import MovieDetailPage from './pages/week4/MovieDetailPage';
import NotFoundPage from './pages/week4/NotFoundPage';
import MovieSignup from './pages/week5/MovieSignup';
import GlobalStyle from './styles/GlobalStyle';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/week1signup" element={<SignUp />} />
                <Route path="/signup" element={<MovieSignup />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/moviepage" element={<MoviePage />} />
                <Route path="/mainpage" element={<MainPage />} />
                <Route path="/popular" element={<PopularPage />} />
                <Route path="/nowplaying" element={<NowPlayingPage />} />
                <Route path="/toprated" element={<TopRatedPage />} />
                <Route path="/upcoming" element={<UpcomingPage />} />
                <Route path="/movie/:id" element={<MovieDetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;
