import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export default function home() {
    return (
        <Wrapper>
        <h1>
            UMC WEB FRONT-END WORKBOOK
        </h1>
        <ButtonBox>
        <Link to ='/week1_a'>
        <button>1주차 1번</button>
        </Link>
        <Link to ='/week1_b'>
        <button>1주차 2번</button>
        </Link>
        </ButtonBox>
      
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

`;
const ButtonBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
   
  margin: 0 auto;

`;