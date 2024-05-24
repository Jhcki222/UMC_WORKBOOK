import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import RealMovieItem from '../week3/RealMovieItem';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();
    const API_KEY = 'd5b7149c32045a933d62bc087867582c';

    const debounce = (func, delay) => {
        let debounceTimer;
        return (...args) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func(...args), delay);
        };
    };

    const fetchSearchResults = useCallback(
        debounce(async (query) => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
                );
                const data = await response.json();
                setSearchResult(data.results);
            } catch (error) {
                console.error('Error searching for movies:', error);
            }
        }, 500),
        []
    );

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query) {
            fetchSearchResults(query);
        } else {
            setSearchResult([]);
        }
    };

    return (
        <Wrapper>
            <Container>
                <SearchInput
                    type="text"
                    placeholder="영화를 검색하세요"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <SearchButton>검색</SearchButton>
            </Container>
            {searchResult.length > 0 && (
                <SearchResults>
                    {searchResult.map((movie) => (
                        <RealMovieItem key={movie.id} movie={movie} />
                    ))}
                </SearchResults>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    width: 50rem;
    align-items: center;
    justify-content: center;
`;

const SearchInput = styled.input`
    flex: 1;
    padding: 1rem;
    width: 30rem;
    border: none;
    border-radius: 1.5rem;
    font-size: 1rem;
`;

const SearchButton = styled.button`
    background-color: #ffffff;
    color: #000000;
    border: none;
    width: 5rem;
    height: 3rem;
    border-radius: 10rem;
    margin-left: 20px;
    cursor: pointer;
`;

const SearchResults = styled.div`
    margin-top: 2rem;
    width: 60rem;
    padding: 1.5rem;
    max-height: 30rem;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #192640;

    /* 스크롤바 스타일링 */
    scrollbar-width: thin; /* Firefox */
    scrollbar-color: yellow #333; /* Firefox */

    /* Webkit */
    &::-webkit-scrollbar {
        width: 12px; /* 두께 조정 */
    }

    &::-webkit-scrollbar-thumb {
        background-color: yellow; /* 노란색 */
        border-radius: 6px; /* 둥글기 조정 */
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #ff0; /* hover 시 색상 변경 */
    }

    &::-webkit-scrollbar-track {
        background: #333; /* 스크롤바 트랙 배경색 */
    }
`;

export default Search;
