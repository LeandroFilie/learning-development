import React, { useCallback, useState } from "react";

function ExampleUseCallback(){
  const [ counter, setCounter ] = useState(0);

  const handlePlus = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, [])

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>
    </>
  )
}

export default ExampleUseCallback;