import React from "react";
import styled from 'styled-components';

function Header() { // 맨 윗줄에 들어가는 헤더
  return (
    <StContainer>
      <div>My Todo List</div>
      <div>React</div>
    </StContainer>
  );
}

export default Header;

const StContainer = styled.div`
  border: 1px solid #ddd;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;