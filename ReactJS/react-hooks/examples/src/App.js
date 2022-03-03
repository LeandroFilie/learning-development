import ExampleUseContext from "./components/ExampleUseContext";
import ExampleUseEffect from "./components/ExampleUseEffect";
import ExampleUseReducer from "./components/ExampleUseReducer";
import ExampleUseState from "./components/ExampleUseState";

function App() {
  return (
    <>
      <h1>useState</h1>
      <ExampleUseState></ExampleUseState>

      <h1>useEffect</h1>
      <ExampleUseEffect></ExampleUseEffect>

      <h1>useContext</h1>
      <ExampleUseContext></ExampleUseContext>

      <h1>useReducer</h1>
      <ExampleUseReducer></ExampleUseReducer>
    </>

  );
}

export default App;
