import React, { useMemo, useState } from "react";

function ExampleUseMemo () {
  const [ counter, setCounter ] = useState(0);
  const [ name, setName ] = useState('');

  const total = useMemo(() => {
    return (counter * 219827347 * 328473248 * 2834723048);
  }, [counter]);

  function handlePlus(){
    setCounter((prevState) => prevState + 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <h4>{total}</h4>
      <button onClick={handlePlus}>+</button>

      <br /><br />
      <span>{name}</span><br />
      <input type="text" onChange={e => setName(e.target.value)}/>
    </div>
  )
}

export default ExampleUseMemo;