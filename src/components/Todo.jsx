// import React from 'react';
// import styled from 'styled-components';

// function Todo({ todo, onDelete, onEdit }) {
//   return (
//     <StTodoContainer>
//       <div>상세보기</div>
//       <div>
//         <h2 className='todo-title'>{todo.title}</h2>
//         <div>{todo.body}</div>
//       </div>
//       <StButtonSet>
//         <StDeleteButton onClick={() => onDelete(todo.id)}>
//           삭제하기
//         </StDeleteButton>
//         <StCompleteButton onClick={() => onEdit(todo.id)}>
//           {todo.isDone ? '취소' : '완료'}
//         </StCompleteButton>
//       </StButtonSet>
//     </StTodoContainer>
//   );
// }

// export default Todo;

// const StTodoContainer = styled.div`
//   width: 270px;
//   /* height: 150px; */
//   border: 3px solid cornflowerblue;
//   border-radius: 12px;
//   padding: 12px 24px 24px 24px;
//   /* box-shadow: 6px 3px 3px #b4b4b4; */
//   &:hover {
//     box-shadow: 6px 3px 3px #979797;
//   }
// `;

// const StButtonSet = styled.div`
//   display: flex;
//   gap: 10px;
//   margin-top: 24px;
// `;

// const StDeleteButton = styled.button`
//   border: none;
//   width: 50%;
//   height: 40px;
//   border-radius: 8px;
//   cursor: pointer;
//   border: 2px solid red;
//   background-color: #fff;
// `;

// const StCompleteButton = styled.button`
//   border: none;
//   width: 50%;
//   height: 40px;
//   border-radius: 8px;
//   cursor: pointer;
//   border: 2px solid green;
//   background-color: #fff;
// `;
