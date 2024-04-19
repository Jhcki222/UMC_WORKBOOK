import React from 'react';
import styled from 'styled-components';
import MovieItem from '../../components/week2/MovieItem';
import { movies } from '../../services/moviesData';

// 영화 페이지 컴포넌트
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
    <Wrapper>
      {/* 각 영화 목록을 렌더링 */}
      {chunks.map((chunk, index) => (
        <Row key={index}>
          {/* 각 줄에 8개의 영화를 나타내는 MovieItem 컴포넌트 렌더링 */}
          {chunk.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
          {/* 마지막 줄이면서 남은 영화 개수가 8개 미만일 때, 빈 아이템으로 채움 */}
          {index === chunks.length - 1 && chunk.length < 8 && (
            new Array(8 - chunk.length).fill(null).map((_, idx) => <EmptyItem key={idx} />)
          )}
        </Row>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color : #192C50;
  width : 100vw;
  height : 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EmptyItem = styled.div`
  width: 220px;
`;

export default MoviePage;
