import React from 'react';
// import Todo from './Todo';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodoStatus } from "../redux/modules/cards.js";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const card_list = useSelector((state)=> state.cards.card_list); 
  // 리덕스의 모든 state에서 리듀서cards안의 card_list를 가져옴

//  console.log('Form이 리렌더링 되면 List도 렌더링 되나..?')

  const onDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const onEditStatusHandler = (id) => {
    dispatch(editTodoStatus(id));
    console.log(card_list);
  };

  return (
    <StListContainer>
      <h2 className='list-title'>Working.. 🔥</h2>
      <StListWrapper>
        {card_list.map((todo) => {
          if (!todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                <Link to={`/detail/${todo.id}`}><div>상세보기</div></Link>
                <div>
                  <h2 className='todo-title'>{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <StButtonSet>
                  <StDeleteButton onClick={() => onDeleteHandler(todo.id)}>
                    삭제하기
                  </StDeleteButton>
                  <StCompleteButton onClick={() => onEditStatusHandler(todo.id)}>
                    {todo.isDone ? '취소' : '완료'}
                  </StCompleteButton>
                </StButtonSet>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
      <h2 className='list-title'>Done!!! 🎉</h2>
      <StListWrapper>
        {card_list.map((todo) => {
          if (todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                <Link to={`/detail/${todo.id}`}><div>상세보기</div></Link>
                <div>
                  <h2 className='todo-title'>{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <StButtonSet>
                  <StDeleteButton onClick={() => onDeleteHandler(todo.id)}>
                    삭제하기
                  </StDeleteButton>
                  <StCompleteButton onClick={() => onEditStatusHandler(todo.id)}>
                    {todo.isDone ? '취소' : '완료'}
                  </StCompleteButton>
                </StButtonSet>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
    </StListContainer>
  );
}

export default List;

const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;



const StTodoContainer = styled.div`
  width: 270px;
  /* height: 150px; */
  border: 3px solid cornflowerblue;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
  /* box-shadow: 6px 3px 3px #b4b4b4; */
  &:hover {
    box-shadow: 6px 3px 3px #979797;
  }
`;

const StButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const StDeleteButton = styled.button`
  border: none;
  width: 50%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid red;
  background-color: #fff;
`;

const StCompleteButton = styled.button`
  border: none;
  width: 50%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid green;
  background-color: #fff;
`;
