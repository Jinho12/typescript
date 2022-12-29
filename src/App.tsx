import styled, { keyframes } from "styled-components";
import Circle from "./Circle";

function App() {
  return (
   <div>
    <Circle bgColor="tomato" borderColor="yellow" />
    <Circle bgColor="teal" text="Excellent"/>
   </div>
  );
}

export default App;
