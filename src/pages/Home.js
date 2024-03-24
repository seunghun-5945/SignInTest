import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightsalmon;
`;

const LoginBoxFrame = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
  background-color: white;
`;

const ItemBox = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border: 1px solid black;
`

const CheckLogin = styled.div`
  width: 400px;
  height: 100px;
  margin-top: 30px;
  background-color: white;
`;

const LoginBox = () => {
  return (
    <>
      <LoginBoxFrame>
        <ItemBox>
          <label>아이디:</label>
          <input type="text" />
        </ItemBox>
        <ItemBox>
          <label>비밀번호:</label>
          <input type="text" />
        </ItemBox>
        <button style={{marginTop:"20px" , width:"100px"}}>로그인</button>
        <Link to="/SignUp">
          <button style={{marginTop:"20px" , width:"100px"}}>회원가입</button>
        </Link>
      </LoginBoxFrame>
      <CheckLogin>
        <h1>현재상태: </h1>
      </CheckLogin>
    </>
  )
}

const Home = () => {
  return (
    <Container>
      <LoginBox />
    </Container>
  );
};

export default Home;