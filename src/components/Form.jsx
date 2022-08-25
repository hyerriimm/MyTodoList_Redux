import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addTodo } from "../redux/modules/cards.js";

let number = 3;

const Form = () => {
  const dispatch = useDispatch();
  const initialState = {
    id: 0,
    title: '',
    body: '',
    isDone: false,
  };
  const [todo, setTodo] = useState(initialState);


  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
    // console.log('onChange 함수가 실행되면 나오는 todo객체 setState가 비동기적이라 함수 안 코드console 실행 후 마지막에 실행?',todo);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); // 폼 제출 후 카드 붙고 새로고침되는 걸 막아줌
    if (todo.title.trim() === '' || todo.body.trim() === '') return;
    dispatch(addTodo({...todo, id: number}));
    setTodo(initialState);
    number++;
  };

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInpGroup>
        <StLabel>제목</StLabel>
        <StInput
          type='text'
          name='title'
          value={todo.title}
          onChange={onChangeHandler}
        />
        <StLabel>내용</StLabel>
        <StInput
          type='text'
          name='body'
          value={todo.body}
          onChange={onChangeHandler}
        />
      </StInpGroup>
      <StButton>추가하기</StButton>
    </StAddForm>
  );
}

export default Form;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StInpGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StButton = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: cornflowerblue;
  width: 140px;
  color: #fff;
  font-weight: 700;
  &:hover {
    box-shadow: 3px 3px 3px #979797;
  }
`;
