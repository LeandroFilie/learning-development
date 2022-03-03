import React, { useState, useEffect } from 'react';

function ExampleUseEffect () {
  const [ name, setName ] = useState('Leandro');
  const [ counter, setCounter ] = useState(0);

  useEffect(() => {
    console.log('useEffect Rodou');
  }, [name]);

  function handlePlus(){
    setCounter((prevState) => prevState + 1); 
  }

  function handleMinus(){
    setCounter((prevState) => prevState - 1); 
  }

  // chamadas assíncronas
  useEffect(() => {
    fetch()
    .then()
  }, []);

  useEffect(() => {
    (async () => {
      //code here
    })();
  })

  // Executar uma função quando o componente for sair de tela
  useEffect(() => {
    //code here

    return () => {
      // code here (componentWillUnmount)
    }
  })

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>

      <br />
      <span>{name}</span>
      <br />
      <input onChange={e => setName(e.target.value)} />
    </>
  )
}

export default ExampleUseEffect;