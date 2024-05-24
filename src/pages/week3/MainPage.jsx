import React from 'react';
import Navbar from '../../components/week3/Navbar';
import styled from 'styled-components';
import Search from '../../components/week5/Search';

export default function MainPage() {
    return (
        <>
            <Navbar />
            <Wrapper>
                <WelcomeMessage>환영합니다!</WelcomeMessage>

                <SearchContainer>
                    <FindMovies>Find your movies!</FindMovies>
                </SearchContainer>
                <Search />
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #192c50;
    color: #ffffff;
`;

const WelcomeMessage = styled.div`
    font-size: 3.5rem;
    display: flex;
    height: 15rem;
    width: 100%;
    background-color: black;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    align-items: center;
    justify-content: center;
`;

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const SearchInput = styled.input`
    flex: 1;
    padding: 30px;
    width: 30rem;
    border: none;
    border-radius: 1.5rem;
    font-size: 16px;
`;

const SearchButton = styled.button`
    background-color: #white;
    color: #black;
    border: none;
    width: 3rem;
    height: 3rem;
    border-radius: 10rem;
    padding: 10px;
    margin-left: 20px;
    cursor: pointer;
`;

const FindMovies = styled.div`
    font-size: 3rem;
`;
