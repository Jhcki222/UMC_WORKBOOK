import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/week3/Navbar';

const MovieDetailPage = () => {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_KEY = 'd5b7149c32045a933d62bc087867582c';
    const { id } = useParams(); // useParams 훅 사용하여 URL 매개변수 읽기

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
                setMovie(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('영화 가져오기 오류:', error);
                setError(error);
                setIsLoading(false);
            }
        };
        fetchMovie();
    }, [API_KEY, id]);

    if (isLoading) {
        return <Loading>데이터를 받아오는 중 입니다...</Loading>;
    }

    if (error) {
        return <Error>영화 정보를 가져오는 중 오류가 발생했습니다.</Error>;
    }

    // 줄거리를 표시하는 함수
    const renderOverview = () => {
        if (movie.overview) {
            return movie.overview;
        } else {
            return 'TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.';
        }
    };

    // 평점을 ⭐️으로 표시하기 위한 로직
    const rating = Math.floor(movie.vote_average); //Math.floor함수를 이용해 소수점 버림(내림)
    const stars = Array.from({ length: rating }, (_, index) => index); // 평점에 따라 채워질 별의 개수 결정
    const getImageUrl = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

    return (
        <Container>
            <Navbar />
            <DetailContainer>
                <Poster src={getImageUrl(movie.poster_path)} alt={movie.title} />
                <InfoWrapper>
                    <Title>{movie.title}</Title>
                    <Rating>
                        평점
                        {stars.map((index) => (
                            <Star key={index}>⭐️</Star>
                        ))}
                    </Rating>
                    <ReleaseDate>개봉일: {movie.release_date}</ReleaseDate>
                    <Overview>
                        줄거리
                        <br />
                        <br />
                        {renderOverview()}
                    </Overview>
                </InfoWrapper>
            </DetailContainer>
        </Container>
    );
};

const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 24px;
    color: white;
`;

const Error = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 24px;
    color: red;
`;

const Container = styled.div`
    background-color: #223a68;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: #fff;
`;

const DetailContainer = styled.div`
    display: flex;
    align-items: center;
    width: 1600px;
    height: 100vh;
    margin: 0 auto;
    padding: 0 20px;
`;

const Poster = styled.img`
    width: 400px;
    height: 600px;
    margin-right: 20px;
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
`;

const Title = styled.h2`
    font-size: 36px;
    margin-bottom: 50px;
`;

const Rating = styled.div`
    margin-bottom: 50px;
    font-size: 24px;
`;

const Star = styled.span`
    color: #ffd700;
`;

const ReleaseDate = styled.p`
    font-size: 24px;
    margin-bottom: 50px;
`;

const Overview = styled.p`
    font-size: 16px;
`;

export default MovieDetailPage;
