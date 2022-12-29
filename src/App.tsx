import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Circle from "./Circle";

function App() {
  const [value, setValue] = useState("")
  const onChange = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
    console.log(currentTarget.value);
    setValue(currentTarget.value);
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  }
  
  return (
   <div>
    <form onSubmit={onSubmit}>
      <input value={value} type="text" placeholder="username" onChange={onChange}/>
      <button>Log in</button>
    </form>
   </div>
  );
}

export default App;
