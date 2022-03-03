import ExampleUseCallback from "./components/ExampleUseCallback";
import ExampleUseContext from "./components/ExampleUseContext";
import ExampleUseEffect from "./components/ExampleUseEffect";
import ExampleUseMemo from "./components/ExampleUseMemo";
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

      <h1>useCallback</h1>
      <ExampleUseCallback></ExampleUseCallback>

      <h1>useMemo</h1>
      <ExampleUseMemo></ExampleUseMemo>
    </>

  );
}

export default App;
