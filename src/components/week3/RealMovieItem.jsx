// RealMovieItem.js

import React, { useState } from 'react';
import styled from 'styled-components';

// 영화 포스터 이미지 URL
const getImageUrl = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

const RealMovieItem = ({ movie }) => {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <MovieContainer onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
            <Poster src={getImageUrl(movie.poster_path)} alt={movie.title} showDescription={showDescription} />
            {showDescription && (
                <DescriptionOverlay>
                    <DescriptionContent>
                        <a>{movie.title}</a>
                        <p>{movie.overview}</p>
                    </DescriptionContent>
                </DescriptionOverlay>
            )}
            <TitleWrapper>
                <span>{movie.title}</span>
                <span>{movie.popularity}</span>
            </TitleWrapper>
        </MovieContainer>
    );
};

const MovieContainer = styled.div`
    margin: 10px;
    width: 200px;
    position: relative;
`;

// 영화 포스터 이미지
const Poster = styled.img`
    width: 100%;
    height: 300px;
    /* 영화 설명이 표시될 때 포스터 이미지를 어둡게 처리 */
    filter: ${(props) => (props.showDescription ? 'brightness(70%)' : 'brightness(100%)')};
    transition: filter 0.3s ease-in-out; /* 변화가 자연스럽게 일어나도록 transition 설정 */
`;

// 영화 설명 오버레이
const DescriptionOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* 반투명한 검은색 */
    color: #fff;
    display: flex;
    align-items: center;
    z-index: 1; /* 다른 요소들 위에 오버레이 표시 */
`;

const DescriptionContent = styled.div`
    padding: 20px;
    overflow: hidden;
    display: -webkit-box; /* WebKit 기반 브라우저에서 레이아웃 박스를 표시 */
    -webkit-line-clamp: 13; /* 최대 13줄까지 표시 */
    -webkit-box-orient: vertical; /* 세로 방향으로 레이아웃 배치 */
    font-size: 1rem;
    text-overflow: ellipsis;
    a {
        font-size: 1rem;
        position: absolute;
        top: 5px;
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    margin-top: -3px;
    margin-bottom: 10px;
    width: 187px;
    height: 45px;
    font-size: 11px;
    justify-content: space-between;
    padding: 7px;
    background-color: #223a68;
    color: #fff;
`;

export default RealMovieItem;
