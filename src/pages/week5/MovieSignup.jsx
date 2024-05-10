import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Navbar from '../../components/week3/Navbar';

export default function MovieSignup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [submitValid, setSubmitValid] = useState(false);

    const validateFields = () => {
        let isValid = true;

        // 이름 필드 유효성 검사
        if (name.trim() === '') {
            setNameError('필수 입력 항목입니다!');
            isValid = false;
        } else {
            setNameError('');
        }

        // 이메일 필드 유효성 검사
        if (!email.includes('@')) {
            setEmailError('올바른 이메일 형식이 아닙니다!');
            isValid = false;
        } else {
            setEmailError('');
        }

        // 나이 필드 유효성 검사
        const ageNumber = parseInt(age);
        if (isNaN(ageNumber)) {
            setAgeError('나이는 숫자로 입력해야 합니다!');
            isValid = false;
        } else if (ageNumber < 0) {
            setAgeError('나이는 양의 정수를 입력해야 합니다!');
            isValid = false;
        } else if (!Number.isInteger(ageNumber)) {
            setAgeError('나이는 정수만 입력해야 합니다!');
            isValid = false;
        } else if (ageNumber < 19) {
            setAgeError('우리 영화 사이트는 19세 이상만 사용가능합니다!');
            isValid = false;
        } else {
            setAgeError('');
        }
        // 비밀번호 필드 유효성 검사
        if (password === '') {
            setPasswordError('비밀번호를 입력하세요!');
            isValid = false;
        } else if (password.length < 4) {
            setPasswordError('비밀번호는 최소 4자리 이상이어야 합니다.');
            isValid = false;
        } else if (password.length > 12) {
            setPasswordError('비밀번호는 최대 12자리까지 가능합니다.');
            isValid = false;
        } else if (!/[a-zA-Z]/.test(password) || !/\d/.test(password) || !/[^a-zA-Z\d]/.test(password)) {
            setPasswordError('영어, 숫자, 특수문자를 모두 포함해야 합니다.');
            isValid = false;
        } else {
            setPasswordError('');
        }

        // 비밀번호 확인 필드 유효성 검사
        if (confirmPassword !== password || confirmPassword === '') {
            setConfirmPasswordError('비밀번호가 일치하지 않습니다!');
            isValid = false;
        } else {
            setConfirmPasswordError('');
        }

        setSubmitValid(isValid); // 유효성 검사 결과 설정

        return isValid;
    };
    const handleSignUp = () => {
        const isValid = validateFields();
        if (isValid) {
            console.log('폼 데이터:', { name, email, age, password, confirmPassword });
        }
    };

    return (
        <>
            <Container>
                <Navbar />
                <SignUpContainer>
                    <h1>회원가입 페이지</h1>
                    <InputForm>
                        <InputField
                            type="text"
                            placeholder="이름을 입력해주세요"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                if (e.target.value.trim() === '') {
                                    setNameError('필수 입력 항목입니다!');
                                } else {
                                    setNameError('');
                                }
                            }}
                        />
                        <ErrorMessage>{nameError}</ErrorMessage>
                        <InputField
                            type="text"
                            placeholder="이메일을 입력해주세요"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (!e.target.value.includes('@')) {
                                    setEmailError('올바른 이메일 형식이 아닙니다!');
                                } else {
                                    setEmailError('');
                                }
                            }}
                        />
                        <ErrorMessage>{emailError}</ErrorMessage>
                        <InputField
                            type="text"
                            placeholder="나이를 입력해주세요"
                            value={age}
                            onChange={(e) => {
                                setAge(e.target.value);
                                const ageNumber = parseInt(e.target.value);
                                if (isNaN(ageNumber)) {
                                    setAgeError('나이는 숫자로 입력해야 합니다!');
                                } else if (ageNumber < 0) {
                                    setAgeError('나이는 양수여야 합니다.');
                                } else if (ageNumber < 19) {
                                    setAgeError('19세 이상만 사용가능합니다.');
                                } else if (!Number.isInteger(ageNumber)) {
                                    setAgeError('나이는 소수가 될 수 없습니다.');
                                } else {
                                    setAgeError('');
                                }
                            }}
                        />
                        <ErrorMessage>{ageError}</ErrorMessage>
                        <InputField
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                const passwordValue = e.target.value;
                                if (passwordValue === '') {
                                    setPasswordError('비밀번호를 입력하세요!');
                                } else if (passwordValue.length < 4) {
                                    setPasswordError('비밀번호는 최소 4자리 이상이어야 합니다.');
                                } else if (passwordValue.length > 12) {
                                    setPasswordError('비밀번호는 최대 12자리까지 가능합니다.');
                                } else if (
                                    !/[a-zA-Z]/.test(passwordValue) ||
                                    !/\d/.test(passwordValue) ||
                                    !/[^a-zA-Z\d]/.test(passwordValue)
                                ) {
                                    setPasswordError('영어, 숫자, 특수문자를 모두 포함해야 합니다.');
                                } else {
                                    setPasswordError('');
                                }
                            }}
                        />
                        <ErrorMessage>{passwordError}</ErrorMessage>
                        <InputField
                            type="password"
                            placeholder="비밀번호 확인"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                const confirmPasswordValue = e.target.value;
                                if (confirmPasswordValue !== password || confirmPasswordValue === '') {
                                    setConfirmPasswordError('비밀번호가 일치하지 않습니다!');
                                } else {
                                    setConfirmPasswordError('');
                                }
                            }}
                        />
                        <ErrorMessage>{confirmPasswordError}</ErrorMessage>
                    </InputForm>
                    <SignupButton valid={submitValid} onClick={handleSignUp}>
                        <p>제출하기</p>
                    </SignupButton>
                </SignUpContainer>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
    height: 100vw;
    display: flex;
    background-color: #223a68;
    margin: 0 auto;
`;

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 900px;
    height: auto;
    margin-top: 1rem;
    background-color: #223a68;
    border-radius: 1rem;
    align-items: center;
    color: #fff;
    h1 {
        text-align: center;
        font-style: bold;
    }
`;

const InputForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
    height: auto;
    margin: auto 0;
    p {
        color: black;
        font-size: 1.2rem;
        font-weight: 800;
        line-height: 100%;
    }
`;

const InputField = styled.input`
    width: 99%;
    height: 3.5rem;
    border-radius: 2rem;
    border: 3px solid white;
    background-color: #fff;
`;

const ErrorMessage = styled.div`
    color: red;
    font-size: 1.2rem;
    font-weight: 800;
    line-height: 100%;
    margin-top: 0.5rem;
    margin-bottom: 4rem;
`;

const SignupButton = styled.button`
    margin-bottom: 2rem;
    width: 40rem;
    height: 4rem;
    flex-shrink: 0;
    border-radius: 2rem;
    background-color: ${(props) => (props.valid ? '#F7CE3E' : '#959595')};
    border: none;
    cursor: pointer;
    p {
        color: white;
        text-align: center;
        font-size: 1.1rem;
        font-style: bold;
        font-weight: 800;
        line-height: 100%;
    }
`;
