import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 로그인 버튼 클릭 시 로그인 상태 변경
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    // 로그아웃 버튼 클릭 시 로그인 상태 변경
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <Nav>
            <Logo to="/mainpage">UMC Movie</Logo>
            <Links>
                {/* 로그인/로그아웃 상태에 따라 버튼 텍스트 변경 */}
                {isLoggedIn ? (
                    <NavLink onClick={handleLogout}>로그아웃</NavLink>
                ) : (
                    <NavLink onClick={handleLogin}>로그인</NavLink>
                )}
                <NavLink to="/popular">Popular</NavLink>
                <NavLink to="/nowplaying">Now Playing</NavLink>
                <NavLink to="/toprated">Top Rated</NavLink>
                <NavLink to="/upcoming">Upcoming</NavLink>
            </Links>
        </Nav>
    );
};

const Nav = styled.nav`
    background-color: #192c50;
    display: flex;
    width: 100%;
    height: 5rem;
    align-items: center;
    padding-left: 10px;
    justify-content: space-between;
`;

const Logo = styled(Link)`
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
`;

const Links = styled.div`
    display: flex;
    gap: 1rem;
    padding-right: 2rem;
`;

const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: transform 0.2s ease-in-out;
    &:hover {
        color: #a3b6e9;
        transform: scale(1.1);
        cursor: pointer;
    }
`;

export default Navbar;
