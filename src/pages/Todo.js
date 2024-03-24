import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;

const InputArea = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;

const Todo = () => {
  
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  const inputHandler = (e) => {
    return (
      setInputValue(e.target.value)
    );
  };

  useEffect(() => {
    axios.get('http://localhost:2024/todos')
      .then(response => {
        console.log(response.data);
        setTodo(response.data);
      })
  }, [])

   

  return (
    <Container>
      <h1>1분만에 Rest api 만들기</h1>
      <h2>추가하기</h2>
      <InputArea>
        <input type="text" style={{width: "40%" , height: "40px"}} onChange={inputHandler}/>
        <button>추가하기</button>
      </InputArea>
      <h2>할 일 목록</h2>
        {todo.map((todo, item)=> (
          <h1 key={item}>{todo.description}</h1>
          ))}

    </Container>
  );
};

export default Todo;