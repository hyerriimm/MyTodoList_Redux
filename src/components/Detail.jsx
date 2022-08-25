import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/cards.js";

const Detail = () => {
  const dispatch = useDispatch();
    // const { id } = useParams();
  const params = useParams();
  const params_id = params.id;
  const card_list = useSelector((state) => state.cards.card_list);
  const todo = card_list.filter((card)=>{
    return card.id === Number(params_id);
  });

  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(getTodoByID(params_id));
  // }, [dispatch, params_id]
  // );
  // 없어도 잘 동작하는데 뭘까..
  // Detail컴포넌트가 맨 처음 화면에 렌더링 될 때, 의존배열 안의 값이 바뀔 때

  return (
    <StContainer>
      <StDiv>
        <div>
          <StDivHeader>
            <div>ID :{todo[0].id}</div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate(-1);}}>
              이전으로
              </StButton>
          </StDivHeader>
          <StTitle>{todo[0].title}</StTitle>
          <StBody>{todo[0].body}</StBody>
        </div>
      </StDiv>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDiv = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDivHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;


// import React from 'react';
// import styled from 'styled-components';
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";

// const Detail = () => {

//   const dispatch = useDispatch();
//   const todo = useSelector((state)=> state.cards.todo); 

//   const { id } = useParams();
//   const navigate = useNavigate();


//   return (
//     <Stdiv1>
//       <Stdiv2>
//         <h5>ID:ㅁ</h5>
//         <button>이전으로</button>
//       </Stdiv2>
//       <Stdiv3>
//         <h2>리액트</h2>
//         <p>리액트를 배워봅시다.</p>
//       </Stdiv3>
//     </Stdiv1>
//   );
// };

// export default Detail;

// const Stdiv1 = styled.div`
//   border: 1px solid #bbb;
//   width: 270px;
//   margin: 10px 10px;
//   button {
//     border: 1px solid #bbb;
//     border-radius: 10px;
//     height: 30px;
//   }
// `;

// const Stdiv2 = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 20px;
//   margin: 5px 10px;
//   height: 30px;
// `;

// const Stdiv3 = styled.div`
//   margin: 0 10px;
//   /* padding: 0 10px; */
// `;