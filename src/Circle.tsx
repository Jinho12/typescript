import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div <ContainerProps>`
  height: 100px;
  width:100px;
  border-radius: 50px;
  background-color: ${(props) => props.bgColor};
`;

interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor}/>;
}

export default Circle;