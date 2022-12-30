import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Circle from "./Circle";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${props => props.theme.textColor}
`

function App() {

  return (
   <div>
    <Container>
      <H1>오</H1>
    </Container>
   </div>
  );
}

export default App;
