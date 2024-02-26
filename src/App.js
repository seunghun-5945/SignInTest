import React from "react";
import Customer from "./components/Customer";

const customer = 
[
  {
    'name' : '이승훈',
    'birthday' : '20010403',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'name' : '이승아',
    'birthday' : '19991010',
    'gender' : '여자',
    'job' : '바보'
  },
]

const App = () => {
  return (
    <>
      <Customer
        name={customer[1].name}
        birthday={customer[1].birthday}
        gender={customer[1].gender}
        job={customer[1].job}
      />
    </>
  )
}

export default App;
