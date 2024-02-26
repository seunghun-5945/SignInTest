import React from "react";

const Customer = ( props ) => {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.birthday}</p>
      <p>{props.gender}</p>
      <p>{props.job}</p>
    </>
  )
}

export default Customer;