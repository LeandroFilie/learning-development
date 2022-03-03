import ExampleUseCallback from "./components/ExampleUseCallback";
import ExampleUseContext from "./components/ExampleUseContext";
import ExampleUseEffect from "./components/ExampleUseEffect";
import ExampleUseImperativeHandle from "./components/ExampleUseImperativeHandle";
import ExampleUseLayoutEffect from "./components/ExampleUseLayoutEffect";
import ExampleUseMemo from "./components/ExampleUseMemo";
import ExampleUseReducer from "./components/ExampleUseReducer";
import ExampleUseRef from "./components/ExampleUseRef";
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

      <h1>useRef</h1>
      <ExampleUseRef></ExampleUseRef>

      <h1>useImperativeHandle</h1>
      <ExampleUseImperativeHandle></ExampleUseImperativeHandle>

      <h1>useLayoutEffect</h1>
      <ExampleUseLayoutEffect></ExampleUseLayoutEffect>
    </>

  );
}

export default App;
