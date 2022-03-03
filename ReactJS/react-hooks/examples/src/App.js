import ExampleUseContext from "./components/ExampleUseContext";
import ExampleUseEffect from "./components/ExampleUseEffect";
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
    </>

  );
}

export default App;
