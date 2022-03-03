import React, { useEffect, useState, useDebugValue } from "react";

function ExampleCustomHook(){
  const [loading, response] = useFetch('https://api.github.com/users/LeandroFilie')
  const [loading2, response2] = useFetch('https://api.github.com/users/LeandroFilie23232424')
  
  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {JSON.stringify(response)}
    </div>
  )
}

function useFetch(url){
  const [ loading, setLoading ] = useState(true);
  const [ response, setResponse ] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(url);
      const json = await resp.json();

      setLoading(false);
      setResponse({ json, status: resp.status })
    })()
  }, [url])

  useDebugValue(response?.status, (message) => {
    return `Status: ${message}`
  });

  return [ loading, response ];

}

export default ExampleCustomHook;