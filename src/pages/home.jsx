import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export default function home() {
    return (
        <Wrapper>
        <h1>
            UMC WEB FRONT-END WORKBOOK
        </h1>
        <hr/>
        <ButtonBox>
        <Link to ='/counter'>
        <button>1주차 실습 1번</button>
        </Link>
        <Link to ='/signup'>
        <button>1주차 미션 1번</button>
        </Link>
        <Link to ='/todo'>
        <button>1주차 미션 2번</button>
        </Link>
        <Link to ='/MoviePage'>
        <button>2주차 미션 2번</button>
        </Link>
        </ButtonBox>
        <hr/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
   
  margin: 0 auto;
  hr{
    width : 100%;
    height : 2px;
    background-color : gray;
  }
`;
const ButtonBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  button{
    background: ${props => (props.isSelected ? '#a3b6e9' : '#FF7062')};
    border: none;
    width: 8rem;
    height: 2.4rem;
    border-radius: 1rem;
    cursor: pointer;
    font-size: 0.9375rem;
    font-style: bold;
    font-weight: 900;
    line-height: 130%;
    color: #FFF;
    margin : 2rem;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    &:hover {
      background: #F29788;
    }
  }


`;