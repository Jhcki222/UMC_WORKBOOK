import React, { useState } from 'react';
import styled from 'styled-components';

// movies 데이터 가져오기
import { movies } from './moviesData';

// 이미지 URL 생성 함수
const getImageUrl = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

// 각 영화를 표시하는 컴포넌트
const MovieItem = ({ movie }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <MovieContainer
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <Poster
        src={getImageUrl(movie.poster_path)}
        alt={movie.title}
        showDescription={showDescription}
      />
      {showDescription && (
        <DescriptionOverlay>
          <DescriptionContent>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </DescriptionContent>
        </DescriptionOverlay>
      )}
    </MovieContainer>
  );
};

// 스타일 컴포넌트 정의
const MovieContainer = styled.div`
  margin: 10px;
  width: 200px;
  position: relative;
`;

const Poster = styled.img`
  width: 100%;
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
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
`;

const DescriptionContent = styled.div`
  padding: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  
`;

// 전체 페이지 컴포넌트
const MoviePage = () => {
  // 영화 목록을 8개씩 나누기
  const chunks = movies.results.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 8);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <div>
      {chunks.map((chunk, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {chunk.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MoviePage;
