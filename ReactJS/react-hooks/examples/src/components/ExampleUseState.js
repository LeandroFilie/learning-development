import React, { useState } from 'react';

function ExampleUseState () {
  const [ counter, setCounter ] = useState(0);

  function handlePlus(){
    setCounter((prevState) => prevState + 1); 
  }

  function handleMinus(){
    setCounter((prevState) => prevState - 1); 
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </>
  )
}

export default ExampleUseState;