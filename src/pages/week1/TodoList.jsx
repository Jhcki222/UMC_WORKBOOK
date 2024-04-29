import React, { useState } from 'react';
import { styled } from 'styled-components';

export default function TodoList() {
    // 할 일 입력값과 할 일 목록, 완료된 일 목록, 입력창 포커스 상태를 관리하는 상태값(useState) 선언
    const [todoInput, setTodoInput] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [completedList, setCompletedList] = useState([]);
    const [isInputFocused, setInputFocused] = useState(false);

    // 입력값 변경 이벤트 핸들러
    const handleInputChange = (event) => {
        setTodoInput(event.target.value);
    };

    // 할 일 추가 이벤트 핸들러
    const handleAddTodo = () => {
        if (todoInput.trim() !== '') {
            // 입력값이 비어 있지 않을 때만 할 일 목록에 추가
            setTodoList([...todoList, todoInput]);
            // 입력값 초기화
            setTodoInput('');
        }
    };

    // 할 일 완료 이벤트 핸들러
    const handleCompleteTodo = (index) => {
        // 완료된 할 일을 완료된 목록에 추가
        const completedTodo = todoList[index];
        setCompletedList([...completedList, completedTodo]);
        // 완료된 할 일을 할 일 목록에서 제거
        const updatedTodoList = todoList.filter((todo, i) => i !== index);
        setTodoList(updatedTodoList);
    };

    // 완료된 할 일 삭제 이벤트 핸들러
    const handleDeleteCompleted = (index) => {
        // 완료된 목록에서 선택한 할 일을 제거
        const updatedCompletedList = completedList.filter((todo, i) => i !== index);
        setCompletedList(updatedCompletedList);
    };

    // 엔터 키 입력 이벤트 핸들러
    const handleKeyPress = (event) => {
        // 엔터 키를 입력하면 할 일 추가 함수 호출
        if (event.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <Container>
            <Title>UMC Study Plan</Title>
            <HeadLine></HeadLine>
            <InputContainer>
                <Input
                    type="text"
                    value={todoInput}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                    focused={isInputFocused}
                    placeholder="스터디 계획을 작성해보세요!"
                />
            </InputContainer>
            <TodoWrapper>
                <TodoContainer>
                    <h2>해야 할 일</h2>
                    <List>
                        {todoList.map((todo, index) => (
                            <h3 key={index}>
                                {todo}
                                <CompleteButton onClick={() => handleCompleteTodo(index)}>완료</CompleteButton>
                            </h3>
                        ))}
                    </List>
                </TodoContainer>
                <CompletedContainer>
                    <h2>해낸 일</h2>
                    <List>
                        {completedList.map((completedTodo, index) => (
                            <h3 key={index}>
                                {completedTodo}
                                <DeleteButton onClick={() => handleDeleteCompleted(index)}>삭제</DeleteButton>
                            </h3>
                        ))}
                    </List>
                </CompletedContainer>
            </TodoWrapper>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #d7effa;
`;

const HeadLine = styled.div`
    width: 600px;
    position: relative;
    height: 2px;
    display: flex;
    background-color: gray;
    margin: 0 auto;
`;

const Title = styled.h1`
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 40rem;
    height: 3rem;
    margin-top: 3rem;
    border: 3px solid ${({ focused }) => (focused ? 'blue' : 'black')};
    background-color: #d7effa;
    border-radius: 0.3rem;
    outline: none;
    transition: border-color 0.3s ease;
`;
const TodoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 5rem;
`;
const TodoContainer = styled.div`
    margin-right: 15rem;
    text-align: center;
    h2 {
        width: 8rem;
        border-bottom: 3px solid #90b1c3;
    }
`;
const List = styled.div`
    width: 15rem;
    align-items: space-between;
    margin-top: 3rem;
    h3 {
        float: none;
        width: auto; /* 너비를 자동으로 설정하여 텍스트에 맞게 설정 */
        border-bottom: 3px solid #90b1c3;
        text-align: left; /* 텍스트를 왼쪽으로 정렬 */
        margin-right: 0;
    }
`;

const CompleteButton = styled.button`
    margin-left: 50px;
    float: right;
    background-color: #90b1c3;
    color: white;
    border: none;
    padding: 4px 8px;
    cursor: pointer;
    border-radius: 4px;
`;

const CompletedContainer = styled.div`
    text-align: center;
    h2 {
        width: 8rem;
        border-bottom: 3px solid #90b1c3;
    }
`;

const DeleteButton = styled.button`
    margin-left: 50px;
    background-color: #90b1c3;
    color: white;
    border: none;
    padding: 4px 8px;
    cursor: pointer;
    border-radius: 4px;
`;
