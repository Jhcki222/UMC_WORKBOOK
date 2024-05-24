import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const getImageUrl = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

const RealMovieItem = ({ movie }) => {
    const [showDescription, setShowDescription] = useState(false);
    const navigate = useNavigate();

    const handlePosterClick = () => {
        navigate(`/movie/${encodeURIComponent(movie.title)}`);
    };

    const handleTitleClick = () => {
        navigate(`/movie/${encodeURIComponent(movie.title)}`);
    };

    return (
        <MovieContainer
            onMouseEnter={() => setShowDescription(true)}
            onMouseLeave={() => setShowDescription(false)}
            onClick={handlePosterClick}
        >
            <Poster src={getImageUrl(movie.poster_path)} alt={movie.title} showDescription={showDescription} />
            {showDescription && (
                <DescriptionOverlay>
                    <DescriptionContent>
                        <a onClick={handleTitleClick}>{movie.title}</a>
                        <p>{movie.overview}</p>
                    </DescriptionContent>
                </DescriptionOverlay>
            )}
            <TitleWrapper>
                <span>{movie.title}</span>
                <span>⭐️{movie.popularity}</span>
            </TitleWrapper>
        </MovieContainer>
    );
};

const MovieContainer = styled.div`
    margin: 10px;
    width: 200px;
    position: relative;
`;

const Poster = styled.img`
    width: 100%;
    height: 300px;
    filter: ${(props) => (props.showDescription ? 'brightness(70%)' : 'brightness(100%)')};
    transition: filter 0.3s ease-in-out;
`;

const DescriptionOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    display: flex;
    align-items: center;
    z-index: 1;
`;

const DescriptionContent = styled.div`
    padding: 20px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 13;
    -webkit-box-orient: vertical;
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
