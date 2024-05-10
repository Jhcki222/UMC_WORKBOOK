import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RealMovieItem from '../../components/week3/RealMovieItem';
import axios from 'axios';
import Navbar from '../../components/week3/Navbar';

const NowPlayingPage = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        // TMDB API 요청을 보낼 URL
        const API_KEY = 'd5b7149c32045a933d62bc087867582c';
        const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
        // TMDB API로 Popular 영화 데이터 가져오기
        axios
            .get(apiUrl)
            .then((response) => {
                const popularMoviesData = response.data?.results || [];
                setPopularMovies(popularMoviesData);
            })
            .catch((error) => {
                console.error('Error fetching popular movies:', error);
            });
    }, []);

    return (
        <Wrapper>
            <Navbar></Navbar>
            <MoviesContainer>
                {popularMovies.map((movie) => (
                    <RealMovieItem key={movie.id} movie={movie} />
                ))}
            </MoviesContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: #192c50;
    width: 100vw;
    height: 100%;
    color: #ffffff;
`;

const MoviesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
`;

export default NowPlayingPage;
