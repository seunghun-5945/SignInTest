import { useState } from "react";
import axios from "axios";
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

const SignUpBox = () => {

  const [inputValue, setInputValue] = useState({  
    email: '',
    password: '',
  })

  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setInputValue({
      ...inputValue,
      [name]: value,
    })
  }

  const doSignUp = async () => {
    try {
      const { data } = await axios.post(
        'http://localhost:2024/User',
        inputValue,
      )
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      <LoginBoxFrame>
        <ItemBox>
          <label>아이디:</label>
          <input type="text" name="email" onChange={inputChangeHandler}/>
        </ItemBox>

        <ItemBox>
          <label>비밀번호:</label>
          <input type="text" name="password" onChange={inputChangeHandler}/>
        </ItemBox>

        <ItemBox>
          <label>닉네임:</label>
          <input type="text" />
        </ItemBox>
        <button style={{marginTop:"20px" , width:"100px"}} onClick={doSignUp}>회원가입</button>
      </LoginBoxFrame>
    </>
  )
}

const SginUp = () => {
  return (
    <Container>
      <SignUpBox />
    </Container>
  );
};

export default SginUp;







// // useState 훅을 사용하여 상태 변수 inputValue와 그 값을 변경하는 함수 setInputValue를 정의합니다.
// // 초기 상태는 빈 문자열을 가진 email과 password 속성을 갖는 객체입니다.
// const [inputValue, setInputValue] = useState({
//   email: '',
//   password: '',
// })

// // input 요소의 변화를 감지하여 상태 변수 inputValue를 업데이트하는 함수입니다.
// // 이벤트 객체에서 name과 value 속성을 추출하여, 해당 name에 해당하는 상태 값을 업데이트합니다.
// const inputChangeHandler = (e) => {
//   const { name, value } = e.target
//   setInputValue({
//     ...inputValue, // 이전 상태를 복사합니다.
//     [name]: value, // 새로운 값으로 업데이트합니다.
//   })
// }

// // 회원가입을 요청하는 함수입니다.
// // axios를 사용하여 지정된 URL에 POST 요청을 보냅니다.
// // 입력값은 inputValue에 담긴 객체로 전달됩니다.
// const doSignUp = async () => {
//   try {
//     // axios.post 메서드를 사용하여 서버로 POST 요청을 보냅니다.
//     // 응답 데이터는 비구조화 할당을 사용하여 data 변수에 할당됩니다.
//     const { data } = await axios.post(
//       'http://localhost:2024/User', // 요청을 보낼 URL
//       inputValue, // 입력값
//     )
//     console.log(data) // 응답 데이터를 콘솔에 출력합니다.
//   } catch (error) {
//     console.log(error) // 에러가 발생하면 에러를 콘솔에 출력합니다.
//   }
// }