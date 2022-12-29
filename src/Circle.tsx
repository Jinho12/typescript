import { useEffect, useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor?: string;
}

// div에 props를 정의해주어야함.
const Container = styled.div <ContainerProps>`
  height: 100px;
  width:100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 50px;
  background-color: ${(props) => props.bgColor};
`;

const Name = styled.p`
  color: whitesmoke;
`

interface CircleProps {
  bgColor: string;
  // ? 물음표를 사용함으로 optional 이 props가 있어도 괜찮고 없어도 괜찮고 그전에는 필수요소
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor=bgColor, text="Good" }: CircleProps) {
  const [value, setValue] = useState<number|string>(1);

  return <Container bgColor={bgColor} borderColor={borderColor}></Container>
}

export default Circle;