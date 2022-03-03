import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

function ExampleUseContext () {
  return(
    <ThemeContext.Provider value={{ mode: 'dark' }}>
      <Button></Button>
    </ThemeContext.Provider>
  )

}

function Button () {
  const theme = useContext(ThemeContext)
  return (
    <button>
      {theme.mode}
    </button>
  )
}

export default ExampleUseContext;