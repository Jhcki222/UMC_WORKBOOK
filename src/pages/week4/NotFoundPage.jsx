import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <Container>
            <Content>
                <Title>Oops!</Title>
                <Description>
                    예상치 못한 에러가 발생했습니다.. <br />
                    Not Found
                </Description>
                <Button to="/mainpage">메인으로 이동하기</Button>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #192c50;
    color: #fff;
`;

const Content = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    font-size: 48px;
    margin-bottom: 20px;
`;

const Description = styled.p`
    font-size: 24px;
    margin-bottom: 40px;
`;

const Button = styled(Link)`
    display: inline-block;
    padding: 10px 20px;
    background-color: #223a68;
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

export default NotFoundPage;
