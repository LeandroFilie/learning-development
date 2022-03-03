import React, { useEffect, useLayoutEffect } from 'react'

function ExampleUseLayoutEffect(){
  useEffect(() => {
    console.log('useEffect 1');
  }, [])

  useEffect(() => {
    console.log('useEffect 2');
  }, [])

  useEffect(() => {
    console.log('useEffect 3');
  }, [])

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  })

  return <h1>Teste</h1>
}

export default ExampleUseLayoutEffect;